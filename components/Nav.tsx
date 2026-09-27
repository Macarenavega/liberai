import Btn from "@/components/Btn";
import Logo from "@/components/Logo";

const links = [
  { href: "#herramientas", label: "Herramientas" },
  { href: "#precios", label: "Precios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#nosotros", label: "Nosotros" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fffafa] border-b border-[#e5e5e5]">
      <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-6" aria-label="Principal">
        <a
          href="#"
          aria-label="LiberAI — inicio"
          className="rounded-[4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f53900]"
        >
          <Logo className="text-[28px]" />
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-[#040101] hover:text-[#f53900] transition-colors focus:outline-none focus-visible:underline"
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
