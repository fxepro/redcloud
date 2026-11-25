"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUp, Bot, CalendarDays, Loader2, MessageCircle, UserRound, X } from "lucide-react";
import { submitLead } from "@/lib/api";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi! I'm the Redcloud assistant. Ask me about our services, AI solutions, compliance programs, or which offer fits your business.",
};

const SUGGESTIONS = [
  "What does Redcloud do?",
  "How can AI help my business?",
  "Can you help us reduce cloud costs?",
  "Do you help with HIPAA or SOC 2?",
];

/** Render plain text with **bold**, [markdown](/links) and "- " bullets. */
function renderInline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      const internal = href.startsWith("/");
      out.push(
        internal ? (
          <Link key={`${keyBase}-${i++}`} href={href} className="font-semibold text-brand-700 underline underline-offset-2">
            {m[1]}
          </Link>
        ) : (
          <a key={`${keyBase}-${i++}`} href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline underline-offset-2">
            {m[1]}
          </a>
        ),
      );
    } else if (m[3]) {
      out.push(<strong key={`${keyBase}-${i++}`}>{m[3]}</strong>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function MessageBody({ text }: { text: string }) {
  const lines = text.split("\n");
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];
  const flush = (k: number) => {
    if (!bullets.length) return;
    blocks.push(
      <ul key={`ul-${k}`} className="my-1 list-disc space-y-1 pl-5">
        {bullets.map((b, j) => (
          <li key={j}>{renderInline(b, `li-${k}-${j}`)}</li>
        ))}
      </ul>,
    );
    bullets = [];
  };
  lines.forEach((line, k) => {
    const bullet = line.match(/^\s*[-*•]\s+(.*)/);
    if (bullet) {
      bullets.push(bullet[1]);
      return;
    }
    flush(k);
    if (line.trim()) blocks.push(<p key={`p-${k}`}>{renderInline(line, `p-${k}`)}</p>);
  });
  flush(lines.length);
  return <div className="space-y-2">{blocks}</div>;
}

type Lead = { name: string; email: string; phone: string };

/** Inline card that collects the visitor's contact details inside the chat. */
function ContactCard({
  initial,
  onSubmit,
  onDismiss,
}: {
  initial: Partial<Lead>;
  onSubmit: (lead: Lead) => Promise<string | null>;
  onDismiss: () => void;
}) {
  const [lead, setLead] = useState<Lead>({ name: "", email: "", phone: "", ...initial });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initial.email) setLead((l) => (l.email ? l : { ...l, email: initial.email! }));
  }, [initial.email]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    const err = await onSubmit(lead);
    if (err) setError(err);
    setSending(false);
  }

  const input =
    "w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 outline-none placeholder:text-ink-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20";

  return (
    <form onSubmit={submit} className="mr-6 rounded-2xl rounded-bl-md bg-white p-4 shadow-soft ring-1 ring-brand-200">
      <p className="flex items-center gap-2 font-semibold text-ink-900">
        <UserRound className="h-4 w-4 text-brand-600" /> How can our team reach you?
      </p>
      <p className="mt-1 text-xs text-ink-500">We&apos;ll follow up personally — usually within one business day.</p>
      <div className="mt-3 space-y-2">
        <input className={input} required placeholder="Your name *" autoComplete="name" value={lead.name}
          onChange={(e) => setLead({ ...lead, name: e.target.value })} />
        <input className={input} required type="email" placeholder="Email *" autoComplete="email" value={lead.email}
          onChange={(e) => setLead({ ...lead, email: e.target.value })} />
        <input className={input} type="tel" placeholder="Phone (optional)" autoComplete="tel" value={lead.phone}
          onChange={(e) => setLead({ ...lead, phone: e.target.value })} />
      </div>
      {error && <p className="mt-2 text-xs text-brand-700">{error}</p>}
      <div className="mt-3 flex items-center gap-3">
        <button type="submit" disabled={sending}
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60">
          {sending && <Loader2 className="h-3.5 w-3.5 animate-spin" />} Send my details
        </button>
        <button type="button" onClick={onDismiss} className="text-xs font-medium text-ink-500 hover:text-ink-700">
          Not now
        </button>
      </div>
    </form>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  // Contact capture: "idle" until the first answer, then the card shows until sent or dismissed.
  const [leadState, setLeadState] = useState<"idle" | "asking" | "dismissed" | "sent">("idle");
  const [typedEmail, setTypedEmail] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open, leadState, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;
    const emailInText = content.match(/[^\s@]+@[^\s@]+\.[^\s@]+/);
    if (emailInText) {
      setTypedEmail(emailInText[0].replace(/[.,;:!?)]+$/, ""));
      setLeadState((st) => (st === "sent" ? st : "asking"));
    }
    const history: Msg[] = [...messages, { role: "user", content }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    const update = (reply: string) =>
      setMessages((prev) => [...prev.slice(0, -1), { role: "assistant", content: reply }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // The greeting is UI-only; the API expects the visitor to speak first.
        body: JSON.stringify({ messages: history.filter((m) => m !== GREETING) }),
      });
      if (!res.ok || !res.body) {
        const err = await res.json().catch(() => null);
        update(err?.error ?? "Sorry — something went wrong. Please try again.");
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        update(reply);
      }
      if (!reply.trim()) update("Sorry — I didn't catch that. Could you rephrase?");
      else setLeadState((st) => (st === "idle" ? "asking" : st));
    } catch {
      update("Sorry — I couldn't connect. Please check your connection and try again.");
    } finally {
      setBusy(false);
    }
  }

  async function sendLead(lead: Lead): Promise<string | null> {
    const transcript = messages
      .filter((m) => m !== GREETING && m.content)
      .map((m) => `${m.role === "user" ? "Visitor" : "Assistant"}: ${m.content}`)
      .join("\n\n");
    const res = await submitLead("chat-lead", {
      name: lead.name.trim(),
      email: lead.email.trim(),
      phone: lead.phone.trim(),
      message: transcript || "(Visitor left details before asking a question.)",
    });
    if (!res.ok) return res.message;
    setLeadState("sent");
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: `Thanks, ${lead.name.trim().split(" ")[0]}! I've passed your details and this conversation to the team — they'll be in touch at **${lead.email.trim()}**. Feel free to keep asking questions here.`,
      },
    ]);
    return null;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  const showSuggestions = messages.length === 1;

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Redcloud"
          className="fixed inset-x-3 bottom-24 z-50 flex max-h-[min(640px,calc(100vh-8rem))] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-ink-900/10 sm:inset-x-auto sm:right-6 sm:w-[400px]"
        >
          {/* Header */}
          <div className="relative overflow-hidden bg-accent-950 px-5 py-4 text-white">
            <div aria-hidden className="pattern-circuit pointer-events-none absolute inset-0 opacity-[0.08]" />
            <div aria-hidden className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-brand-600/40 blur-3xl" />
            <div className="relative flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 shadow-lift">
                <Bot className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="font-display text-base font-bold leading-tight">Redcloud Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> AI · answers instantly
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-lg p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-ink-50 px-4 py-4 text-sm leading-relaxed">
            {messages.map((m, i) =>
              m.role === "user" ? (
                <div key={i} className="ml-10 rounded-2xl rounded-br-md bg-accent-900 px-4 py-2.5 text-white">
                  {m.content}
                </div>
              ) : (
                <div key={i} className="mr-6 rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-ink-800 shadow-soft ring-1 ring-ink-200/60">
                  {m.content ? (
                    <MessageBody text={m.content} />
                  ) : (
                    <span className="inline-flex gap-1 py-1" aria-label="Assistant is typing">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-400 [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-400 [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-400" />
                    </span>
                  )}
                </div>
              ),
            )}
            {leadState === "asking" && !busy && (
              <ContactCard
                initial={{ email: typedEmail }}
                onSubmit={sendLead}
                onDismiss={() => setLeadState("dismissed")}
              />
            )}
            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-accent-200 bg-white px-3 py-1.5 text-xs font-medium text-accent-800 transition hover:border-accent-400 hover:bg-accent-50"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={onSubmit} className="border-t border-ink-200 bg-white p-3">
            <div className="flex items-end gap-2 rounded-xl border border-ink-200 bg-ink-50 px-3 py-2 focus-within:border-accent-500 focus-within:ring-2 focus-within:ring-accent-500/20">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                rows={1}
                maxLength={2000}
                placeholder="Ask a question…"
                aria-label="Your message"
                className="max-h-32 flex-1 resize-none bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-400"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send message"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between px-1 text-[11px] text-ink-400">
              <span>AI can make mistakes — confirm details with our team.</span>
              {leadState === "sent" ? (
                <Link href="/appointment" className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-800">
                  <CalendarDays className="h-3 w-3" /> Book a call
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setLeadState("asking")}
                  className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-800"
                >
                  <UserRound className="h-3 w-3" /> Leave contact info
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with Redcloud"}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-2 rounded-full bg-brand-600 px-5 text-sm font-semibold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-brand-700"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        <span className="hidden sm:inline">{open ? "Close" : "Ask us anything"}</span>
      </button>
    </>
  );
}
