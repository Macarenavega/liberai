export default function Footer() {
  return (
    <footer className="pt-16 pb-10 px-4 sm:px-6" style={{ background: "var(--stone)" }}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <span className="t-heading-lg font-bold text-black">LiberAI</span>
          <nav aria-label="Pie de página" className="grid grid-cols-2 gap-x-8 sm:gap-x-16 gap-y-3 t-body-sm">
            <a href="#herramientas" className="text-black hover:opacity-60">Herramientas</a>
            <a href="https://wa.me/34603449845" className="text-black hover:opacity-60">WhatsApp</a>
            <a href="#precios" className="text-black hover:opacity-60">Precios</a>
            <a href="mailto:hola@liberai.es" className="text-black hover:opacity-60">hola@liberai.es</a>
            <a href="#trabajos" className="text-black hover:opacity-60">Trabajos</a>
            <a href="#contacto" className="text-black hover:opacity-60">Contacto</a>
          </nav>
        </div>
        <p className="t-caption text-black border-t border-black/15 pt-6">
          © {new Date().getFullYear()} LiberAI · Barcelona
        </p>
      </div>
    </footer>
  );
}
