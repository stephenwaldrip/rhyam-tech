import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Rhyam Tech Co",
  description: "Tell Rhyam Tech Co about your operation and see what Inventory Manager Pro can do with it.",
};

export default function Contact() {
  return (
    <section className="wrap split-contact" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(56px,8vw,110px)", gap: "clamp(32px,5vw,72px)", alignItems: "start" }}>
      <div>
        <div className="eyebrow" style={{ color: "var(--teal)", marginBottom: 16 }}>Contact</div>
        <h1 className="serif" style={{ fontWeight: 600, fontSize: "clamp(32px,4.6vw,54px)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 20 }}>
          Let&apos;s talk.
        </h1>
        <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--mute)", marginBottom: 28 }}>
          Whether you want to see Inventory Manager Pro against your own numbers,
          or you&apos;ve got an operational problem you&apos;d trust Rhyam to
          build, tell us about it.
        </p>
        <div style={{ fontFamily: "var(--mono)", fontSize: 14, color: "var(--mute)", lineHeight: 2 }}>
          <div><span style={{ color: "var(--amber)" }}>→</span> support@rhyamtech.co</div>
          <div><span style={{ color: "var(--amber)" }}>→</span> Rhyam Tech Co</div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
