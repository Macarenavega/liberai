export default function About() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 px-4 sm:px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
        <h2 className="t-heading-lg">
          <span className="block text-[#040101]">Conozco el sector</span>
          <span className="block text-[#f53900]">desde dentro.</span>
        </h2>
        <div className="flex flex-col gap-4 lg:pt-2">
          <p className="t-subheading text-[#040101]">
            Trabajé dentro de una empresa de servicios técnicos — no como alguien externo que viene a &ldquo;entender el negocio&rdquo;. He vivido los mismos problemas que tiene tu empresa: técnicos que no quieren tocar una pantalla, presupuestos hechos a mano, facturas que se pierden.
          </p>
          <p className="t-body text-[#827e7e]">
            Por eso lo que construyo funciona en la práctica, no solo en una demo.
          </p>
        </div>
      </div>
    </section>
  );
}
