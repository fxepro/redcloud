"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitLead } from "@/lib/api";

export interface Field {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  full?: boolean;
}

export function LeadForm({
  formKey,
  fields,
  submitLabel = "Send",
}: {
  formKey: string;
  fields: Field[];
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await submitLead(formKey, data);
    if (res.ok) {
      setStatus("done");
      setMessage(res.message);
    } else {
      setStatus("error");
      setMessage(res.message);
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-green-600" />
        <p className="text-lg font-semibold text-ink-900">Message sent</p>
        <p className="text-ink-600">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name} className={f.full || f.type === "textarea" ? "sm:col-span-2" : ""}>
          <label htmlFor={f.name} className="mb-1.5 block text-sm font-medium text-ink-800">
            {f.label} {f.required && <span className="text-brand-600">*</span>}
          </label>
          {f.type === "textarea" ? (
            <textarea
              id={f.name}
              name={f.name}
              required={f.required}
              rows={5}
              className="w-full rounded-lg border border-ink-300 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          ) : f.type === "select" ? (
            <select
              id={f.name}
              name={f.name}
              required={f.required}
              defaultValue=""
              className="w-full rounded-lg border border-ink-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            >
              <option value="" disabled>
                Select…
              </option>
              {f.options?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={f.name}
              name={f.name}
              type={f.type ?? "text"}
              required={f.required}
              className="w-full rounded-lg border border-ink-300 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          )}
        </div>
      ))}

      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-brand-700">{message}</p>
      )}

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto">
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
