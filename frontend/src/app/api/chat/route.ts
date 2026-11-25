import Anthropic from "@anthropic-ai/sdk";
import { siteKnowledge } from "@/lib/chat-knowledge";
import { site } from "@/lib/content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = "claude-opus-5-5";
const MAX_TURNS = 20; // messages kept from the client history
const MAX_CHARS = 2000; // per user message

// Frozen system prompt (no dates/IDs) so it caches across every visitor.
const SYSTEM_PROMPT = `You are the website assistant for ${site.name}, a software engineering and AI automation company. You chat with visitors on redcloudsystems.com.

Your job: answer questions about Redcloud's services, solutions, AI offerings, compliance programs, industries, and free offers, and help interested visitors take the next step.

How to answer:
- Use only the site knowledge below. If something isn't covered (exact prices, timelines for a specific project, staff names, guarantees), say you don't have that detail and offer the right next step: a quote (/quote), a consultation (/appointment), or email ${site.email}.
- Never invent prices, clients, statistics, certifications, or phone numbers.
- Keep replies short: 2–5 sentences or a few bullets. Plain, friendly, confident business tone.
- Link to the most relevant page using markdown links with site-relative paths, e.g. [Cloud Cost Reduction](/landing/cloud-cost). Link at most 3 pages per reply.
- When a visitor describes a need, recommend the best-fitting service or program and suggest a concrete next step. For a free starting point, mention the Free Digital Audit (/landing/free-audit).
- If asked for a person, a call, or a proposal, point to /appointment or /quote.
- For questions unrelated to Redcloud or technology services, politely steer back to how Redcloud can help.

<site_knowledge>
${siteKnowledge}
</site_knowledge>`;

let client: Anthropic | null = null;
function getClient() {
  client ??= new Anthropic(); // reads ANTHROPIC_API_KEY
  return client;
}

const UNAVAILABLE = `Sorry — I'm having trouble answering right now. You can reach the team at ${site.email} or [book a consultation](/appointment).`;

// Best-effort per-instance rate limit (serverless instances don't share memory).
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 12;
}

type IncomingMessage = { role: "user" | "assistant"; content: string };

function parseMessages(body: unknown): Anthropic.MessageParam[] | null {
  const raw = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(raw) || raw.length === 0) return null;
  const msgs = raw.slice(-MAX_TURNS) as IncomingMessage[];
  const clean: Anthropic.MessageParam[] = [];
  for (const m of msgs) {
    if (!m || (m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") return null;
    const text = m.content.trim().slice(0, MAX_CHARS);
    if (!text) continue;
    clean.push({ role: m.role, content: text });
  }
  // Conversation must start and end with the visitor.
  while (clean.length && clean[0].role !== "user") clean.shift();
  if (!clean.length || clean[clean.length - 1].role !== "user") return null;
  return clean;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-nf-client-connection-ip") ?? req.headers.get("x-forwarded-for") ?? "anon";
  if (rateLimited(ip)) {
    return Response.json({ error: "You're sending messages quickly — please wait a moment." }, { status: 429 });
  }

  let messages: Anthropic.MessageParam[] | null = null;
  try {
    messages = parseMessages(await req.json());
  } catch {
    /* fall through */
  }
  if (!messages) return Response.json({ error: "Invalid message." }, { status: 400 });

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("[chat] ANTHROPIC_API_KEY is not configured");
    return new Response(UNAVAILABLE, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }

  const stream = getClient().beta.messages.stream({
    model: MODEL,
    max_tokens: 2048, // short chat replies; caps cost per turn
    output_config: { effort: "low" },
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
    messages,
  });

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        const final = await stream.finalMessage();
        if (final.stop_reason === "refusal") {
          controller.enqueue(
            encoder.encode(`I can't help with that one. For anything about our services, email ${site.email}.`),
          );
        }
      } catch (err) {
        if (err instanceof Anthropic.RateLimitError) {
          console.error("[chat] rate limited", err.status);
        } else if (err instanceof Anthropic.AuthenticationError) {
          console.error("[chat] ANTHROPIC_API_KEY missing or invalid");
        } else if (err instanceof Anthropic.APIError) {
          console.error("[chat] API error", err.status, err.message);
        } else {
          console.error("[chat] stream failed", err);
        }
        controller.enqueue(encoder.encode(`\n\n${UNAVAILABLE}`));
      } finally {
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
