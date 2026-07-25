"use client";
import { useState, useEffect } from "react";
import { useCountUp } from "@/lib/hooks";

const ROWS = [
  { sku: "SKU-014", name: "Hex bolt M8 · zinc", to: 1840 },
  { sku: "SKU-027", name: "Bearing 6204-2RS", to: 12 },
  { sku: "SKU-039", name: "Cutting fluid · 5L", to: 96 },
  { sku: "SKU-051", name: "Carbide insert CNMG", to: 340 },
  { sku: "SKU-068", name: "Shop rag · bulk", to: 8 },
];

function Row({ sku, name, to, delay, run }) {
  const q = useCountUp(to, run);
  const low = to <= 12;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "72px 1fr 68px",
        alignItems: "center",
        padding: "13px 18px",
        borderBottom: "1px solid var(--hair)",
        opacity: run ? 1 : 0,
        transform: run ? "translateY(0)" : "translateY(8px)",
        transition: `opacity .5s ${delay}ms, transform .5s ${delay}ms`,
        fontFamily: "var(--mono)",
      }}
    >
      <span style={{ color: "var(--mute)", fontSize: 12, letterSpacing: "0.05em" }}>{sku}</span>
      <span style={{ color: "var(--paper)", fontSize: 14 }}>{name}</span>
      <span
        style={{
          textAlign: "right",
          fontSize: 16,
          fontWeight: 600,
          color: low ? "var(--amber)" : "var(--teal)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {q}
      </span>
    </div>
  );
}

export default function StockLedger() {
  const [run, setRun] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setRun(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        background: "var(--slate)",
        borderRadius: 4,
        border: "1px solid var(--hair2)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
        overflow: "hidden",
        opacity: run ? 1 : 0,
        transform: run ? "none" : "translateY(20px)",
        transition: "all .8s .2s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 18px",
          borderBottom: "1px solid var(--hair2)",
          fontFamily: "var(--mono)",
        }}
      >
        <span style={{ fontSize: 12.5, color: "var(--paper)", letterSpacing: "0.04em" }}>
          Inventory Manager Pro
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--teal)" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--teal)", boxShadow: "0 0 8px var(--teal)" }} />
          live
        </span>
      </div>
      {ROWS.map((r, i) => (
        <Row key={r.sku} {...r} delay={300 + i * 90} run={run} />
      ))}
      <div
        style={{
          padding: "12px 18px",
          fontFamily: "var(--mono)",
          fontSize: 11.5,
          color: "var(--mute)",
          display: "flex",
          gap: 16,
        }}
      >
        <span><span style={{ color: "var(--amber)" }}>●</span> 2 low stock</span>
        <span><span style={{ color: "var(--teal)" }}>●</span> in balance</span>
      </div>
    </div>
  );
}
