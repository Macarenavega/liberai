import Logo from "@/components/Logo";

const links = [
  { href: "#herramientas", label: "Herramientas" },
  { href: "#precios", label: "Precios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#contacto", label: "Contacto" },
  { href: "https://wa.me/34603449845", label: "WhatsApp" },
  { href: "mailto:hola@liberai.es", label: "hola@liberai.es" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <Logo className="text-4xl" />
          <nav aria-label="Pie de página" className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-3 t-body-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[#040101] hover:text-[#f53900] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="t-caption text-[#827e7e] border-t border-[#e5e5e5] pt-6">
          © {new Date().getFullYear()} LiberAI · Barcelona
        </p>
      </div>
    </footer>
  );
}
