"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/company", label: "Company" },
  { href: "/products", label: "Products" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(11,31,42,0.82)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--hair)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 26,
              height: 26,
              border: "2px solid var(--amber)",
              display: "grid",
              placeItems: "center",
              transform: "rotate(45deg)",
            }}
          >
            <span style={{ width: 8, height: 8, background: "var(--teal)" }} />
          </span>
          <span className="serif" style={{ fontWeight: 600, fontSize: 19, letterSpacing: "-0.01em" }}>
            Rhyam <span style={{ color: "var(--mute)", fontWeight: 400 }}>Tech Co</span>
          </span>
        </Link>

        <div style={{ display: "flex", gap: "clamp(16px,3vw,32px)", fontSize: 14, alignItems: "center" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: path === l.href ? "var(--amber)" : "var(--paper)",
                transition: "color .2s",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="cta" style={{ padding: "9px 18px" }}>
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
