import Link from "next/link";

export const metadata = {
  title: "Company — Rhyam Tech Co",
  description:
    "Rhyam Tech Co builds operational software with a machinist's respect for precision. Small team, sharp tools.",
};

export default function Company() {
  return (
    <>
      <section className="wrap split" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
        <div>
          <div className="eyebrow" style={{ color: "var(--teal)", marginBottom: 16 }}>The company</div>
          <h1 className="serif" style={{ fontWeight: 600, fontSize: "clamp(30px,4.4vw,52px)", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Software with a machinist&apos;s respect for precision.
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--mute)", marginBottom: 16 }}>
            Rhyam Tech Co was founded by someone who spent years on the shop
            floor programming CNC machines before turning to software. That
            background shapes everything we ship: tools that are exact,
            dependable, and built for people doing real work.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--mute)" }}>
            We keep the roster small and the products sharp. Inventory Manager
            Pro is the first thing we've shipped under the Rhyam name — the start
            of a catalog, not the whole of it.
          </p>
        </div>
        <div style={{ display: "grid", gap: 14 }}>
          {[
            ["Founded", "on the shop floor"],
            ["Focus", "operational software"],
            ["Shipping", "Inventory Manager Pro"],
            ["Approach", "one product, done right"],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px", background: "var(--slate)", borderRadius: 4, border: "1px solid var(--hair)", fontFamily: "var(--mono)", fontSize: 14 }}>
              <span style={{ color: "var(--mute)" }}>{k}</span>
              <span style={{ color: "var(--paper)" }}>{v}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--slate)", borderTop: "1px solid var(--hair)", borderBottom: "1px solid var(--hair)" }}>
        <div className="wrap" style={{ paddingTop: "clamp(48px,7vw,84px)", paddingBottom: "clamp(48px,7vw,84px)" }}>
          <h2 className="serif" style={{ fontWeight: 600, fontSize: "clamp(24px,3.2vw,34px)", marginBottom: 32 }}>How we work</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 28 }}>
            {[
              ["Exactness first", "A number is either right or it isn't. We build so the count on screen matches the count on the shelf."],
              ["Built from experience", "We've done the manual reconciliation. The product exists to kill the parts of the job nobody should have to do twice."],
              ["Small on purpose", "Fewer products, done properly. When something ships under the Rhyam name, it's meant to be relied on."],
            ].map(([t, d]) => (
              <div key={t}>
                <h3 className="serif" style={{ fontSize: 20, marginBottom: 12 }}>{t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--mute)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" style={{ textAlign: "center", paddingTop: "clamp(56px,8vw,100px)", paddingBottom: "clamp(56px,8vw,100px)" }}>
        <h2 className="serif" style={{ fontWeight: 600, fontSize: "clamp(28px,4vw,46px)", marginBottom: 20, letterSpacing: "-0.02em" }}>
          Let&apos;s talk about your operation
        </h2>
        <Link href="/contact" className="cta" style={{ padding: "15px 34px", fontSize: 16 }}>Get in touch</Link>
      </section>
    </>
  );
}
