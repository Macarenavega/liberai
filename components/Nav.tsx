import Btn from "@/components/Btn";

const links = [
  { href: "#herramientas", label: "Herramientas" },
  { href: "#precios", label: "Precios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#nosotros", label: "Nosotros" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Barra de anuncio */}
      <a
        href="#precios"
        className="flex items-center justify-center gap-2 h-10 px-4 bg-black text-white text-sm font-medium text-center focus:outline-none focus-visible:underline"
      >
        <span className="truncate">Oferta de lanzamiento: puesta en marcha a mitad de precio</span>
        <span aria-hidden="true">→</span>
      </a>

      {/* Navegación */}
      <nav className="bg-white border-b border-[#e1dad9]" aria-label="Principal">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
          <a
            href="#"
            className="text-2xl font-bold tracking-[-0.04em] text-black rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            LiberAI
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-base font-medium text-black hover:opacity-60 transition-opacity focus:outline-none focus-visible:underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Btn href="#contacto" className="!px-5 !py-2.5">
            Hablemos <span aria-hidden="true">→</span>
          </Btn>
        </div>
      </nav>
    </header>
  );
}
