export default function About() {
  return (
    <section id="nosotros" className="py-20 sm:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <h2 className="t-display text-black">
          Conozco el sector <span className="italic">desde dentro.</span>
        </h2>
        <div className="flex flex-col gap-6 lg:pt-4">
          <p className="t-subheading text-black" style={{ lineHeight: 1.4 }}>
            Trabajé dentro de una empresa de servicios técnicos — no como alguien externo que viene a &ldquo;entender el negocio&rdquo;. He vivido los mismos problemas que tiene tu empresa: técnicos que no quieren tocar una pantalla, presupuestos hechos a mano, facturas que se pierden.
          </p>
          <p className="t-body text-[#4a4545]">
            Por eso lo que construyo funciona en la práctica, no solo en una demo.
          </p>
        </div>
      </div>
    </section>
  );
}
