"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";


const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgeboyl";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    const form = e.currentTarget;
    // light client-side validation
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    if (!name || !email || !message) {
      setErrorMsg("Please fill all required fields.");
      setStatus("error");
      return;
    }
    // basic email pattern (relaxed)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    const formData = new FormData(form);
    // honeypot check
    if ((formData.get("_honey") as string)?.trim()) {
      setErrorMsg("Spam detected.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        // keep success visible for a bit
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        const payload = await res.json().catch(() => null);
        setErrorMsg(payload?.error || "Submission failed. Please try again later.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again later.");
      setStatus("error");
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
          {/* Left: Context / alt contact */}
          <div className="p-8 bg-gradient-to-b from-white to-slate-50">
            <div className="flex items-start gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
                <Image
                  src="/images/boku.jpeg"
                  alt="Dayron Anjos"
                  fill
                  sizes="56px"
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold">Contact</h1>
                <p className="text-slate-600 mt-2">
                  Interested in collaboration, a junior role, or a technical conversation? Send a concise message — I reply within a few business days.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="p-4 rounded-lg border border-slate-100 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Preferred</div>
                    <div className="font-medium">Email</div>
                  </div>
                  <div className="text-sm text-slate-500">dayronjp17@gmail.com</div>
                </div>
                <div className="mt-3 text-xs text-slate-500">Click the button on the right to copy.</div>
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText("dayronjp17@gmail.com");
                        setStatus("sent");
                        setTimeout(() => setStatus("idle"), 2000);
                      } catch {
                        setErrorMsg("Unable to copy email to clipboard.");
                        setStatus("error");
                      }
                    }}
                    className="px-3 py-2 bg-brand text-white rounded-md text-sm"
                  >
                    Copy email
                  </button>
                  <a
                    href="mailto:dayronjp17@gmail.com"
                    className="px-3 py-2 border rounded-md text-sm hover:bg-slate-50"
                    rel="noopener noreferrer"
                  >
                    Open mail
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-slate-100 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Alternative</div>
                    <div className="font-medium">LinkedIn</div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/dayron-anjos-566b02323/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-brand underline"
                  >
                    View profile
                  </a>
                </div>
                <div className="mt-3 text-xs text-slate-500">Best for hiring managers — short message or connect request.</div>
              </div>

              <div className="mt-3 text-xs text-slate-500">
                <strong className="text-slate-700">Privacy:</strong> messages are used only to reply and will not be shared. For legal matters, please consult a licensed attorney.
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" aria-live="polite" noValidate>
              {/* Hidden fields */}
              <input type="hidden" name="_subject" value="Portfolio contact — Dayron" />
              <input type="hidden" name="source" value="portfolio-site" />
              <label className="sr-only">
                Do not fill this (anti-spam)
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />
              </label>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="mt-1 w-full border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.name@example.com"
                  className="mt-1 w-full border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Short summary of the request (100–200 chars recommended)"
                  className="mt-1 w-full border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className={`inline-flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium ${status === "sending" || status === "sent" ? "bg-slate-300 text-slate-700 cursor-not-allowed" : "bg-brand text-white"
                    }`}
                  disabled={status === "sending" || status === "sent"}
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.15" />
                        <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                      </svg>
                      Sending…
                    </>
                  ) : status === "sent" ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
                      </svg>
                      Sent
                    </>
                  ) : (
                    <>
                      Send message
                    </>
                  )}
                </button>

                <div className="text-sm text-slate-600">
                  {status === "sent" && <span className="text-green-600">Thanks — I’ll reply by email.</span>}
                  {status === "error" && <span className="text-red-600">Error: {errorMsg}</span>}
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                <strong>Response time:</strong> I typically reply within 2–4 business days. If you need immediate support, please include that in the message subject.
              </div>
            </form>

            {/* subtle accessibility live region for screen readers */}
            <div role="status" aria-live="polite" className="sr-only">
              {status === "sending" && "Sending message"}
              {status === "sent" && "Message sent"}
              {status === "error" && `Error: ${errorMsg || "Unknown error"}`}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
