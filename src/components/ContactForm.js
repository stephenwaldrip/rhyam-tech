"use client";
import { useState } from "react";

const field = {
  width: "100%",
  background: "var(--slate)",
  border: "1px solid var(--hair2)",
  borderRadius: 3,
  color: "var(--paper)",
  fontFamily: "var(--sans)",
  fontSize: 15,
  padding: "13px 15px",
  transition: "border-color .2s",
};

const label = { display: "block", fontFamily: "var(--mono)", fontSize: 12.5, letterSpacing: "0.05em", color: "var(--mute)", marginBottom: 8, textTransform: "uppercase" };

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", website: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Tell us who you are.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = "Enter a valid email.";
    if (!form.message.trim()) err.message = "A line about your operation helps.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div style={{ background: "var(--slate)", border: "1px solid var(--teal)", borderRadius: 4, padding: "40px 32px", textAlign: "center" }}>
        <div className="mono" style={{ color: "var(--teal)", fontSize: 13, letterSpacing: "0.1em", marginBottom: 12 }}>MESSAGE RECEIVED</div>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 10 }}>Thanks, {form.name.split(" ")[0]}.</h3>
        <p style={{ color: "var(--mute)", fontSize: 15, lineHeight: 1.6 }}>
          We&apos;ll be in touch about {form.company.trim() || "your operation"} shortly.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: 20 }}>
      <div className="split" style={{ gap: 20 }}>
        <div>
          <label style={label} htmlFor="name">Name</label>
          <input id="name" style={{ ...field, borderColor: errors.name ? "var(--amber)" : "var(--hair2)" }} value={form.name} onChange={set("name")} placeholder="Jane Operator" />
          {errors.name && <p style={{ color: "var(--amber)", fontSize: 12.5, marginTop: 6 }}>{errors.name}</p>}
        </div>
        <div>
          <label style={label} htmlFor="email">Email</label>
          <input id="email" type="email" style={{ ...field, borderColor: errors.email ? "var(--amber)" : "var(--hair2)" }} value={form.email} onChange={set("email")} placeholder="jane@shop.co" />
          {errors.email && <p style={{ color: "var(--amber)", fontSize: 12.5, marginTop: 6 }}>{errors.email}</p>}
        </div>
      </div>
      <div>
        <label style={label} htmlFor="company">Company <span style={{ textTransform: "none", opacity: 0.6 }}>(optional)</span></label>
        <input id="company" style={field} value={form.company} onChange={set("company")} placeholder="Acme Machining" />
      </div>
      <div>
        <label style={label} htmlFor="message">What are you running?</label>
        <textarea id="message" rows={5} style={{ ...field, resize: "vertical", borderColor: errors.message ? "var(--amber)" : "var(--hair2)" }} value={form.message} onChange={set("message")} placeholder="A few lines about your stock, your team, and what's breaking today." />
        {errors.message && <p style={{ color: "var(--amber)", fontSize: 12.5, marginTop: 6 }}>{errors.message}</p>}
      </div>
      {/* Honeypot — hidden from real users, catches bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={set("website")}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        aria-hidden="true"
      />
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <button onClick={submit} className="cta" disabled={status === "sending"} style={{ padding: "14px 30px", fontSize: 15, opacity: status === "sending" ? 0.7 : 1 }}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <span style={{ color: "var(--amber)", fontSize: 13.5 }}>
            Something went wrong. Try again, or email hello@rhyamtech.co directly.
          </span>
        )}
      </div>
    </div>
  );
}
