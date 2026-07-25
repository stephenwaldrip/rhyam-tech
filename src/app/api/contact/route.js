import { getDb } from "@/lib/mongodb";
import { Resend } from "resend";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Where inquiries land, and who they appear to come from.
const TO = process.env.CONTACT_TO || "hello@rhyamtech.co";
const FROM = process.env.CONTACT_FROM || "Rhyam Tech Co <onboarding@resend.dev>";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Basic sanitizing + validation
  const name = String(body.name || "").trim().slice(0, 200);
  const email = String(body.email || "").trim().slice(0, 200);
  const company = String(body.company || "").trim().slice(0, 200);
  const message = String(body.message || "").trim().slice(0, 5000);
  // Honeypot: real users leave this empty; bots fill everything.
  const trap = String(body.website || "").trim();

  if (trap) return Response.json({ ok: true }); // silently drop bots
  if (!name || !message || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Please fill in your name, a valid email, and a message." }, { status: 400 });
  }

  const doc = {
    name,
    email,
    company: company || null,
    message,
    createdAt: new Date(),
    userAgent: request.headers.get("user-agent") || null,
  };

  // 1) Save to MongoDB (if configured)
  let saved = false;
  if (process.env.MONGODB_URI) {
    try {
      const db = await getDb();
      await db.collection("inquiries").insertOne(doc);
      saved = true;
    } catch (err) {
      console.error("Mongo save failed:", err.message);
    }
  } else {
    console.log("[contact] MONGODB_URI not set — inquiry not saved:", doc);
  }

  // 2) Send notification email (if configured)
  let emailed = false;
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: FROM,
        to: TO,
        replyTo: email,
        subject: `New inquiry from ${name}${company ? ` · ${company}` : ""}`,
        text: [
          `Name:    ${name}`,
          `Email:   ${email}`,
          `Company: ${company || "—"}`,
          "",
          message,
        ].join("\n"),
      });
      emailed = true;
    } catch (err) {
      console.error("Email send failed:", err.message);
    }
  } else {
    console.log("[contact] RESEND_API_KEY not set — email not sent.");
  }

  // As long as we captured it one way, treat as success.
  if (!saved && !emailed) {
    // Nothing configured — still return ok in dev so the form flow works,
    // but log loudly. In production you'd want to fail here instead.
    console.warn("[contact] Received but neither saved nor emailed. Configure MONGODB_URI / RESEND_API_KEY.");
  }

  return Response.json({ ok: true, saved, emailed });
}
