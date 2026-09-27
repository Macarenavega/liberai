"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? "var(--steel)" : "transparent",
        borderBottom: scrolled ? "1px solid #2E333D" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4700F]"
        >
          Liber<span style={{ color: "var(--safety)" }}>AI</span>
        </a>
        <a
          href="#contacto"
          className="text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4700F]"
          style={{
            background: "var(--safety)",
            color: "#fff",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#d95e08")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--safety)")}
        >
          Hablemos →
        </a>
      </div>
    </header>
  );
}
