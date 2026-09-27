import Btn from "@/components/Btn";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-16 sm:pb-24 pt-[160px] px-4 sm:px-6 overflow-hidden"
      style={{ background: "var(--deep-teal)" }}
    >
      {/* Luz cálida de atardecer — sustituye a la fotografía de terreno */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 70% at 85% 0%, rgba(231,211,191,0.18) 0%, rgba(231,211,191,0) 60%), radial-gradient(80% 60% at 0% 100%, rgba(64,110,122,0.35) 0%, rgba(64,110,122,0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Edificios isométricos — tonos arena */}
      <div
        className="absolute pointer-events-none
          left-1/2 -translate-x-1/2 top-[120px] w-[78vw] max-w-[300px] opacity-60
          lg:left-auto lg:translate-x-0 lg:right-12 lg:top-auto lg:bottom-16 lg:w-[34%] lg:max-w-[420px] lg:opacity-90"
        aria-hidden="true"
      >
        <svg viewBox="80 30 410 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Building A — small, left */}
          <g className="iso-a">
            <path d="M140,155 L182,176 L140,197 L98,176 Z" fill="rgba(231,211,191,0.12)" stroke="rgba(231,211,191,0.45)" strokeWidth="1"/>
            <path d="M182,176 L182,236 L140,257 L140,197 Z" fill="rgba(231,211,191,0.07)" stroke="rgba(231,211,191,0.38)" strokeWidth="1"/>
            <line x1="140" y1="227" x2="182" y2="206" stroke="rgba(231,211,191,0.22)" strokeWidth="0.75"/>
            <path d="M98,176 L140,197 L140,257 L98,236 Z" fill="rgba(231,211,191,0.04)" stroke="rgba(231,211,191,0.32)" strokeWidth="1"/>
          </g>

          {/* Building B — tallest, center */}
          <g className="iso-b">
            <path d="M290,40 L355,72.5 L290,105 L225,72.5 Z" fill="rgba(231,211,191,0.15)" stroke="rgba(231,211,191,0.52)" strokeWidth="1"/>
            <path d="M355,72.5 L355,227.5 L290,260 L290,105 Z" fill="rgba(231,211,191,0.07)" stroke="rgba(231,211,191,0.46)" strokeWidth="1"/>
            <line x1="290" y1="143.75" x2="355" y2="111.25" stroke="rgba(231,211,191,0.28)" strokeWidth="0.75"/>
            <line x1="290" y1="182.5" x2="355" y2="150" stroke="rgba(231,211,191,0.28)" strokeWidth="0.75"/>
            <line x1="290" y1="221.25" x2="355" y2="188.75" stroke="rgba(231,211,191,0.28)" strokeWidth="0.75"/>
            <path d="M225,72.5 L290,105 L290,260 L225,227.5 Z" fill="rgba(231,211,191,0.04)" stroke="rgba(231,211,191,0.4)" strokeWidth="1"/>
            <line x1="225" y1="111.25" x2="290" y2="143.75" stroke="rgba(231,211,191,0.18)" strokeWidth="0.75"/>
            <line x1="225" y1="150" x2="290" y2="182.5" stroke="rgba(231,211,191,0.18)" strokeWidth="0.75"/>
            <line x1="225" y1="188.75" x2="290" y2="221.25" stroke="rgba(231,211,191,0.18)" strokeWidth="0.75"/>
          </g>

          {/* Building C — medium, right */}
          <g className="iso-c">
            <path d="M420,100 L468,124 L420,148 L372,124 Z" fill="rgba(231,211,191,0.13)" stroke="rgba(231,211,191,0.48)" strokeWidth="1"/>
            <path d="M468,124 L468,219 L420,243 L420,148 Z" fill="rgba(231,211,191,0.07)" stroke="rgba(231,211,191,0.42)" strokeWidth="1"/>
            <line x1="420" y1="179" x2="468" y2="155" stroke="rgba(231,211,191,0.25)" strokeWidth="0.75"/>
            <line x1="420" y1="211" x2="468" y2="187" stroke="rgba(231,211,191,0.25)" strokeWidth="0.75"/>
            <path d="M372,124 L420,148 L420,243 L372,219 Z" fill="rgba(231,211,191,0.04)" stroke="rgba(231,211,191,0.37)" strokeWidth="1"/>
          </g>
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto w-full">
        <p className="badge mb-8 text-white" style={{ background: "var(--slate-teal)" }}>
          Consultora · Obras y servicios · Barcelona
        </p>

        <h1 className="t-display-xl font-bold text-white mb-10 max-w-[12ch]">
          Tu empresa hace el trabajo pesado.
          <span className="block font-normal italic mt-[0.12em]" style={{ color: "var(--desert-clay)" }}>
            Nosotros te lo facilitamos.
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
          <p className="t-subheading max-w-lg" style={{ color: "var(--paper-muted)", lineHeight: 1.4 }}>
            Que la parte digital no sea otro problema. Webs, facturas,
            presupuestos e informes con tu marca — pensados para quien trabaja
            sobre el terreno, no para quien tiene un ordenador en un escritorio.
          </p>

          <Btn href="#contacto" variant="light" className="shrink-0 self-start sm:self-auto">
            Hablemos <span aria-hidden="true">→</span>
          </Btn>
        </div>
      </div>
    </section>
  );
}
