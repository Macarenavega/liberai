import Btn from "@/components/Btn";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 overflow-hidden"
      style={{ background: "var(--steel)" }}
    >
      {/* Signature stripe — right edge */}
      <div
        className="absolute top-0 right-0 w-1.5 h-full"
        style={{ background: "var(--safety)" }}
        aria-hidden="true"
      />

      {/* Blueprint dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(244,112,15,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Isometric buildings — visible on all screens, repositioned per breakpoint */}
      <div
        className="absolute pointer-events-none
          left-1/2 -translate-x-1/2 top-20 w-[78vw] max-w-[300px] opacity-[0.62]
          lg:left-auto lg:translate-x-0 lg:right-16 lg:top-20 lg:w-[40%] lg:max-w-[460px] lg:opacity-[0.82]"
        aria-hidden="true"
      >
        <svg viewBox="80 30 410 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Building A — small, left */}
          <g className="iso-a">
            <path d="M140,155 L182,176 L140,197 L98,176 Z" fill="rgba(244,112,15,0.12)" stroke="rgba(244,112,15,0.45)" strokeWidth="1"/>
            <path d="M182,176 L182,236 L140,257 L140,197 Z" fill="rgba(244,112,15,0.07)" stroke="rgba(244,112,15,0.38)" strokeWidth="1"/>
            <line x1="140" y1="227" x2="182" y2="206" stroke="rgba(244,112,15,0.22)" strokeWidth="0.75"/>
            <path d="M98,176 L140,197 L140,257 L98,236 Z" fill="rgba(244,112,15,0.04)" stroke="rgba(244,112,15,0.32)" strokeWidth="1"/>
          </g>

          {/* Building B — tallest, center */}
          <g className="iso-b">
            <path d="M290,40 L355,72.5 L290,105 L225,72.5 Z" fill="rgba(244,112,15,0.15)" stroke="rgba(244,112,15,0.52)" strokeWidth="1"/>
            <path d="M355,72.5 L355,227.5 L290,260 L290,105 Z" fill="rgba(244,112,15,0.07)" stroke="rgba(244,112,15,0.46)" strokeWidth="1"/>
            <line x1="290" y1="143.75" x2="355" y2="111.25" stroke="rgba(244,112,15,0.28)" strokeWidth="0.75"/>
            <line x1="290" y1="182.5" x2="355" y2="150" stroke="rgba(244,112,15,0.28)" strokeWidth="0.75"/>
            <line x1="290" y1="221.25" x2="355" y2="188.75" stroke="rgba(244,112,15,0.28)" strokeWidth="0.75"/>
            <path d="M225,72.5 L290,105 L290,260 L225,227.5 Z" fill="rgba(244,112,15,0.04)" stroke="rgba(244,112,15,0.4)" strokeWidth="1"/>
            <line x1="225" y1="111.25" x2="290" y2="143.75" stroke="rgba(244,112,15,0.18)" strokeWidth="0.75"/>
            <line x1="225" y1="150" x2="290" y2="182.5" stroke="rgba(244,112,15,0.18)" strokeWidth="0.75"/>
            <line x1="225" y1="188.75" x2="290" y2="221.25" stroke="rgba(244,112,15,0.18)" strokeWidth="0.75"/>
          </g>

          {/* Building C — medium, right */}
          <g className="iso-c">
            <path d="M420,100 L468,124 L420,148 L372,124 Z" fill="rgba(244,112,15,0.13)" stroke="rgba(244,112,15,0.48)" strokeWidth="1"/>
            <path d="M468,124 L468,219 L420,243 L420,148 Z" fill="rgba(244,112,15,0.07)" stroke="rgba(244,112,15,0.42)" strokeWidth="1"/>
            <line x1="420" y1="179" x2="468" y2="155" stroke="rgba(244,112,15,0.25)" strokeWidth="0.75"/>
            <line x1="420" y1="211" x2="468" y2="187" stroke="rgba(244,112,15,0.25)" strokeWidth="0.75"/>
            <path d="M372,124 L420,148 L420,243 L372,219 Z" fill="rgba(244,112,15,0.04)" stroke="rgba(244,112,15,0.37)" strokeWidth="1"/>
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <p
          className="text-xs font-semibold tracking-[0.14em] uppercase mb-6"
          style={{ color: "var(--safety)" }}
        >
          Consultora · Obras y Servicios · Barcelona
        </p>

        <h1
          className="font-[family-name:var(--font-bebas)] leading-none mb-8"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            color: "#fff",
            maxWidth: "20ch",
          }}
        >
          Tu empresa hace<br />
          el trabajo pesado.
          <span
            style={{
              color: "var(--safety)",
              fontSize: "clamp(2.2rem, 6vw, 6rem)",
              display: "block",
              marginTop: "0.12em",
            }}
          >
            Nosotros te lo facilitamos.
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
          <p
            className="text-lg leading-relaxed max-w-lg"
            style={{ color: "var(--smoke)" }}
          >
            Que la parte digital no sea otro problema. Webs, facturas,
            presupuestos e informes con tu marca — pensados para quien trabaja
            sobre el terreno, no para quien tiene un ordenador en un escritorio.
          </p>

          <Btn href="#contacto" className="shrink-0">
            Hablemos <span aria-hidden="true">→</span>
          </Btn>
        </div>
      </div>

      {/* Bottom stripe decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: "var(--safety)", opacity: 0.3 }}
        aria-hidden="true"
      />
    </section>
  );
}
