"use client";

import { useState } from "react";

export default function ContactFormServer() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("../api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      const body = await res.json();
      if (!res.ok || !body.ok) {
        throw new Error(body.error || "Failed to send message");
      }

      setStatus("sent");
      form.reset();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-2xl mx-auto grid gap-4 text-left"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            name="name"
            required
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#F9E158]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#F9E158]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Subject</label>
        <input
          name="subject"
          placeholder="Booking / Press / General"
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#F9E158]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Message</label>
        <textarea
          name="message"
          rows={6}
          required
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#F9E158] resize-y"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-[#F9E158] px-6 py-3 font-bold text-[#1E1E1E] hover:bg-[#E17742] hover:text-white transition disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        {status === "sent" && (
          <span className="text-green-700 font-medium">
            Thanks! We’ll be in touch.
          </span>
        )}
        {status === "error" && (
          <span className="text-red-700 font-medium">{error}</span>
        )}
      </div>
    </form>
  );
}
