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
            maxWidth: "16ch",
          }}
        >
          Tu empresa hace<br />
          el trabajo pesado.
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
