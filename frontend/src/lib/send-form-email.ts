function humanizeFormKey(formKey: string) {
  return formKey
    .split(/[-_]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/** Deliver form submissions via Web3Forms (free, no credit card). */
export async function sendFormEmail(
  formKey: string,
  payload: Record<string, unknown>,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("[forms] WEB3FORMS_ACCESS_KEY is not configured");
    return {
      ok: false,
      error: "Form delivery is not configured yet. Please email hello@redcloudsystems.com directly.",
    };
  }

  const name = String(payload.name ?? payload.first_name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const subjectLead = name || email || "New submission";

  const fields = Object.fromEntries(
    Object.entries(payload).filter(
      ([key, value]) => !key.startsWith("_") && value != null && String(value).trim() !== "",
    ),
  );

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `[Redcloud] ${humanizeFormKey(formKey)} — ${subjectLead}`,
      from_name: name || "Website visitor",
      email,
      form_key: formKey,
      ...fields,
    }),
  });

  const data = (await res.json().catch(() => ({}))) as {
    success?: boolean;
    message?: string;
  };

  if (!res.ok || !data.success) {
    console.error("[forms] Web3Forms error:", data.message ?? res.status);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  return { ok: true };
}
