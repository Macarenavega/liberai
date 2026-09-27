import Btn from "@/components/Btn";
import Rays from "@/components/Rays";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[152px] pb-20 sm:pb-28 px-4 sm:px-6">
      <Rays originY={-40} />

      <div className="relative max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <p className="pill mb-8">
          <span aria-hidden="true">✦</span> Consultora · Obras y servicios · Barcelona
        </p>

        <h1 className="t-display max-w-[16ch] mb-6">
          <span className="block text-[#f53900]">Tu empresa hace el trabajo pesado.</span>
          <span className="block text-[#040101]">Nosotros te lo facilitamos.</span>
        </h1>

        <p className="t-subheading max-w-[640px] text-[#040101] mb-10">
          Que la parte digital no sea otro problema. Webs, facturas,
          presupuestos e informes con tu marca — pensados para quien trabaja
          sobre el terreno, no para quien tiene un ordenador en un escritorio.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-16">
          <Btn href="#contacto">
            Hablemos <span aria-hidden="true">→</span>
          </Btn>
          <Btn href="#precios" variant="ghost">
            <span aria-hidden="true">✦</span> Ver precios
          </Btn>
        </div>

        {/* Edificios isométricos */}
        <div className="w-full max-w-[520px]" aria-hidden="true">
          <svg viewBox="80 30 410 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Building A — small, left */}
          <g className="iso-a">
            <path d="M140,155 L182,176 L140,197 L98,176 Z" fill="rgba(245,57,0,0.12)" stroke="rgba(245,57,0,0.45)" strokeWidth="1"/>
            <path d="M182,176 L182,236 L140,257 L140,197 Z" fill="rgba(245,57,0,0.07)" stroke="rgba(245,57,0,0.38)" strokeWidth="1"/>
            <line x1="140" y1="227" x2="182" y2="206" stroke="rgba(245,57,0,0.22)" strokeWidth="0.75"/>
            <path d="M98,176 L140,197 L140,257 L98,236 Z" fill="rgba(245,57,0,0.04)" stroke="rgba(245,57,0,0.32)" strokeWidth="1"/>
          </g>

          {/* Building B — tallest, center */}
          <g className="iso-b">
            <path d="M290,40 L355,72.5 L290,105 L225,72.5 Z" fill="rgba(245,57,0,0.15)" stroke="rgba(245,57,0,0.52)" strokeWidth="1"/>
            <path d="M355,72.5 L355,227.5 L290,260 L290,105 Z" fill="rgba(245,57,0,0.07)" stroke="rgba(245,57,0,0.46)" strokeWidth="1"/>
            <line x1="290" y1="143.75" x2="355" y2="111.25" stroke="rgba(245,57,0,0.28)" strokeWidth="0.75"/>
            <line x1="290" y1="182.5" x2="355" y2="150" stroke="rgba(245,57,0,0.28)" strokeWidth="0.75"/>
            <line x1="290" y1="221.25" x2="355" y2="188.75" stroke="rgba(245,57,0,0.28)" strokeWidth="0.75"/>
            <path d="M225,72.5 L290,105 L290,260 L225,227.5 Z" fill="rgba(245,57,0,0.04)" stroke="rgba(245,57,0,0.4)" strokeWidth="1"/>
            <line x1="225" y1="111.25" x2="290" y2="143.75" stroke="rgba(245,57,0,0.18)" strokeWidth="0.75"/>
            <line x1="225" y1="150" x2="290" y2="182.5" stroke="rgba(245,57,0,0.18)" strokeWidth="0.75"/>
            <line x1="225" y1="188.75" x2="290" y2="221.25" stroke="rgba(245,57,0,0.18)" strokeWidth="0.75"/>
          </g>

          {/* Building C — medium, right */}
          <g className="iso-c">
            <path d="M420,100 L468,124 L420,148 L372,124 Z" fill="rgba(245,57,0,0.13)" stroke="rgba(245,57,0,0.48)" strokeWidth="1"/>
            <path d="M468,124 L468,219 L420,243 L420,148 Z" fill="rgba(245,57,0,0.07)" stroke="rgba(245,57,0,0.42)" strokeWidth="1"/>
            <line x1="420" y1="179" x2="468" y2="155" stroke="rgba(245,57,0,0.25)" strokeWidth="0.75"/>
            <line x1="420" y1="211" x2="468" y2="187" stroke="rgba(245,57,0,0.25)" strokeWidth="0.75"/>
            <path d="M372,124 L420,148 L420,243 L372,219 Z" fill="rgba(245,57,0,0.04)" stroke="rgba(245,57,0,0.37)" strokeWidth="1"/>
          </g>
        </svg>
        </div>
      </div>
    </section>
  );
}
