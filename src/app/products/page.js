import Link from "next/link";

export const metadata = {
  title: "Products — Rhyam Tech Co",
  description:
    "The products Rhyam Tech Co builds. Currently shipping: Inventory Manager Pro — live stock tracking for shops, warehouses, and small manufacturers.",
};

const CAPS = [
  { k: "Track", t: "Live stock, every location", d: "Counts update the moment something moves. No spreadsheet lag, no guesswork on what's actually on the shelf." },
  { k: "Alert", t: "Reorder before you run dry", d: "Set thresholds per item. It flags what's low and drafts the purchase order for you." },
  { k: "Trace", t: "Full movement history", d: "Every receipt, pick, and adjustment is logged. Answer 'where did it go' in seconds, not an afternoon." },
  { k: "Count", t: "Cycle counts without the shutdown", d: "Schedule rolling counts by zone or category. Reconcile discrepancies without stopping the whole floor." },
  { k: "Report", t: "Numbers you can hand upstairs", d: "Turnover, shrinkage, valuation — the reports are ready when the questions come, not after." },
  { k: "Sync", t: "One source of truth", d: "Purchasing, receiving, and the floor all read the same numbers. What one person changes, everyone sees." },
];

export default function Products() {
  return (
    <>
      {/* Intro: Rhyam's approach */}
      <header className="wrap" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(32px,4vw,52px)", maxWidth: 760 }}>
        <div className="eyebrow" style={{ color: "var(--teal)", marginBottom: 16 }}>Products</div>
        <h1 className="serif" style={{ fontWeight: 600, fontSize: "clamp(34px,5vw,58px)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 20 }}>
          We ship one thing at a time, and we ship it right.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--mute)" }}>
          Rhyam builds operational software for people who can't afford to be
          wrong about their numbers. Rather than spread thin, we take one real
          problem at a time and solve it completely. Here's what's shipping now.
        </p>
      </header>

      {/* Featured product header */}
      <section className="wrap" style={{ paddingBottom: "clamp(24px,3vw,32px)" }}>
        <div style={{ background: "var(--slate)", border: "1px solid var(--hair2)", borderRadius: 4, padding: "clamp(28px,4vw,44px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 18 }}>
            <span className="mono" style={{ fontSize: 12.5, color: "var(--teal)", letterSpacing: "0.1em" }}>PRODUCT 01 · SHIPPING NOW</span>
            <span className="mono" style={{ fontSize: 12, color: "var(--mute)" }}>Inventory software</span>
          </div>
          <h2 className="serif" style={{ fontWeight: 600, fontSize: "clamp(28px,3.6vw,44px)", lineHeight: 1.05, marginBottom: 16 }}>
            Inventory Manager Pro
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--mute)", maxWidth: 640 }}>
            Built for shops, warehouses, and small manufacturers who are done
            reconciling stock by hand. It counts, it warns, and it remembers — so
            you can spend your day on the work, not the ledger.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="wrap" style={{ paddingBottom: "clamp(56px,8vw,100px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {CAPS.map((c) => (
            <div key={c.k} style={{ background: "var(--slate)", border: "1px solid var(--hair2)", borderRadius: 4, padding: "30px 28px" }}>
              <div className="eyebrow" style={{ color: "var(--teal)", marginBottom: 18 }}>{c.k}</div>
              <h3 className="serif" style={{ fontWeight: 600, fontSize: 21, marginBottom: 12, lineHeight: 1.2 }}>{c.t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--mute)" }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ background: "var(--slate)", borderTop: "1px solid var(--hair)", borderBottom: "1px solid var(--hair)" }}>
        <div className="wrap" style={{ paddingTop: "clamp(48px,7vw,84px)", paddingBottom: "clamp(48px,7vw,84px)" }}>
          <h2 className="serif" style={{ fontWeight: 600, fontSize: "clamp(26px,3.4vw,38px)", marginBottom: 32, letterSpacing: "-0.01em" }}>
            Made for the people counting the parts
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
            {[
              ["Machine shops", "Track tooling, raw stock, and consumables against real job demand."],
              ["Warehouses", "Keep pick locations accurate and reorder points honest."],
              ["Small manufacturers", "Tie components to builds so you never start a run short."],
            ].map(([t, d]) => (
              <div key={t}>
                <div className="mono" style={{ fontSize: 13, color: "var(--amber)", marginBottom: 8 }}>—</div>
                <h3 className="serif" style={{ fontSize: 19, marginBottom: 10 }}>{t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--mute)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's next */}
      <section className="wrap" style={{ paddingTop: "clamp(48px,7vw,84px)", paddingBottom: "clamp(24px,3vw,32px)" }}>
        <div style={{ border: "1px dashed var(--hair2)", borderRadius: 4, padding: "clamp(28px,4vw,40px)" }}>
          <span className="mono" style={{ fontSize: 12.5, color: "var(--mute)", letterSpacing: "0.1em" }}>PRODUCT 02 · IN THE WORKS</span>
          <h3 className="serif" style={{ fontWeight: 600, fontSize: "clamp(22px,2.8vw,30px)", margin: "14px 0 12px" }}>
            The next tool is already taking shape.
          </h3>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--mute)", maxWidth: 600 }}>
            Rhyam is a growing catalog, not a single product. If there's an
            operational problem you'd trust us to solve,{" "}
            <Link href="/contact" style={{ color: "var(--amber)" }}>we want to hear about it</Link>.
          </p>
        </div>
      </section>

      <section className="wrap" style={{ textAlign: "center", paddingTop: "clamp(40px,6vw,72px)", paddingBottom: "clamp(56px,8vw,100px)" }}>
        <h2 className="serif" style={{ fontWeight: 600, fontSize: "clamp(28px,4vw,46px)", marginBottom: 20, letterSpacing: "-0.02em" }}>
          See Inventory Manager Pro against your own numbers
        </h2>
        <Link href="/contact" className="cta" style={{ padding: "15px 34px", fontSize: 16 }}>Request a walkthrough</Link>
      </section>
    </>
  );
}
