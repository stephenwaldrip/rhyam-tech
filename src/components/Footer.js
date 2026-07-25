import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--hair)", marginTop: 0 }}>
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          paddingTop: 28,
          paddingBottom: 28,
          fontSize: 13,
          color: "var(--mute)",
        }}
      >
        <span className="serif" style={{ color: "var(--paper)" }}>Rhyam Tech Co</span>
        <div style={{ display: "flex", gap: 22 }}>
          <Link href="/company" style={{ transition: "color .2s" }}>Company</Link>
          <Link href="/products" style={{ transition: "color .2s" }}>Products</Link>
          <Link href="/contact" style={{ transition: "color .2s" }}>Contact</Link>
        </div>
        <span className="mono" style={{ fontSize: 12 }}>
          © {new Date().getFullYear()} · Inventory Manager Pro
        </span>
      </div>
    </footer>
  );
}
