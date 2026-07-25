import Link from "next/link";
import StockLedger from "@/components/StockLedger";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header
        className="wrap split-hero"
        style={{
          gap: "clamp(28px,5vw,64px)",
          alignItems: "center",
          paddingTop: "clamp(48px,7vw,96px)",
          paddingBottom: "clamp(48px,7vw,96px)",
        }}
      >
        <div>
          <div className="eyebrow" style={{ color: "var(--teal)", marginBottom: 22 }}>
            A software company
          </div>
          <h1
            className="serif"
            style={{
              fontWeight: 600,
              fontSize: "clamp(38px,5.6vw,68px)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            We build software with a machinist&apos;s respect for precision.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--mute)", maxWidth: 460, marginBottom: 34 }}>
            Rhyam Tech Co is where practical operational tools get built — exact,
            dependable, and made for people doing real work. Our first product,{" "}
            <strong style={{ color: "var(--paper)" }}>Inventory Manager Pro</strong>,
            is shipping now.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/company" className="cta">What we&apos;re about</Link>
            <Link href="/products" className="ghost">See what we&apos;ve built</Link>
          </div>
        </div>
        <StockLedger />
      </header>

      {/* How we build */}
      <section style={{ borderTop: "1px solid var(--hair)", borderBottom: "1px solid var(--hair)", background: "var(--slate)" }}>
        <div
          className="wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 0,
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          {[
            ["Exact", "A number is either right or it isn't"],
            ["Dependable", "Built to be relied on, not demoed"],
            ["Practical", "Made for the people doing the work"],
          ].map(([k, v], i) => (
            <div
              key={k}
              style={{
                padding: "clamp(28px,4vw,44px) 8px",
                borderLeft: i === 0 ? "none" : "1px solid var(--hair)",
              }}
            >
              <div className="eyebrow" style={{ color: "var(--amber)", marginBottom: 12 }}>{k}</div>
              <p className="serif" style={{ fontSize: 20, lineHeight: 1.25 }}>{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we're building */}
      <section className="wrap" style={{ paddingTop: "clamp(56px,8vw,100px)", paddingBottom: "clamp(56px,8vw,100px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--teal)", marginBottom: 14 }}>What we&apos;re building</div>
            <h2 className="serif" style={{ fontWeight: 600, fontSize: "clamp(28px,3.8vw,44px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              The catalog starts here
            </h2>
          </div>
          <Link href="/products" className="ghost">All products →</Link>
        </div>

        {/* Featured: IMP */}
        <Link href="/products" style={{ display: "block" }}>
          <div style={{ background: "var(--slate)", border: "1px solid var(--hair2)", borderRadius: 4, padding: "clamp(28px,4vw,40px)", transition: "border-color .25s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
              <span className="mono" style={{ fontSize: 12.5, color: "var(--teal)", letterSpacing: "0.1em" }}>PRODUCT 01 · SHIPPING NOW</span>
              <span className="mono" style={{ fontSize: 12, color: "var(--mute)" }}>Inventory software</span>
            </div>
            <h3 className="serif" style={{ fontWeight: 600, fontSize: "clamp(24px,3vw,34px)", marginBottom: 12 }}>Inventory Manager Pro</h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--mute)", maxWidth: 620 }}>
              Live stock tracking, reorder alerts, and a full movement history —
              for shops, warehouses, and small manufacturers done reconciling by
              hand. <span style={{ color: "var(--amber)" }}>Learn more →</span>
            </p>
          </div>
        </Link>

        {/* Next up placeholder */}
        <div style={{ marginTop: 20, border: "1px dashed var(--hair2)", borderRadius: 4, padding: "clamp(24px,3vw,32px)", display: "flex", alignItems: "center", gap: 16 }}>
          <span className="mono" style={{ fontSize: 12.5, color: "var(--mute)", letterSpacing: "0.1em" }}>NEXT</span>
          <p style={{ fontSize: 15, color: "var(--mute)" }}>
            More operational tools are in the works under the Rhyam name.{" "}
            <Link href="/contact" style={{ color: "var(--amber)" }}>Tell us what you need built.</Link>
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ background: "var(--slate)", borderTop: "1px solid var(--hair)" }}>
        <div className="wrap" style={{ textAlign: "center", paddingTop: "clamp(56px,8vw,100px)", paddingBottom: "clamp(56px,8vw,100px)" }}>
          <h2 className="serif" style={{ fontWeight: 600, fontSize: "clamp(28px,4vw,46px)", lineHeight: 1.06, letterSpacing: "-0.02em", marginBottom: 20, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
            Building something that needs to be counted, tracked, or trusted?
          </h2>
          <p style={{ fontSize: 17, color: "var(--mute)", marginBottom: 34 }}>
            That&apos;s the kind of work Rhyam takes on.
          </p>
          <Link href="/contact" className="cta" style={{ padding: "15px 34px", fontSize: 16 }}>Get in touch</Link>
        </div>
      </section>
    </>
  );
}
