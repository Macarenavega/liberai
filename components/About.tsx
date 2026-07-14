export default function About() {
  return (
    <section className="py-20 px-6" style={{ background: "var(--chalk)" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <h2
          className="font-[family-name:var(--font-bebas)] leading-none"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--steel)" }}
        >
          Conozco el sector<br />
          <span style={{ color: "var(--safety)" }}>desde dentro.</span>
        </h2>
        <div className="flex flex-col gap-4">
          <p className="leading-relaxed" style={{ color: "var(--graphite)" }}>
            Trabajé dentro de una empresa de servicios técnicos — no como alguien externo que viene a "entender el negocio". He vivido los mismos problemas que tiene tu empresa: técnicos que no quieren tocar una pantalla, presupuestos hechos a mano, facturas que se pierden.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--graphite)" }}>
            Por eso lo que construyo funciona en la práctica, no solo en una demo.
          </p>
        </div>
      </div>
    </section>
  );
}
