import Btn from "@/components/Btn";

const plans = [
  {
    name: "Web",
    setup: "299",
    originalSetup: "600",
    monthly: "9,99",
    desc: "Presencia digital que genera contactos. Responsive, rápida, con tu marca.",
    includes: [
      "Diseño y desarrollo a medida",
      "Dominio + hosting incluidos",
      "Formulario de contacto",
      "Actualizaciones incluidas",
    ],
  },
  {
    name: "Gestión",
    setup: "499",
    originalSetup: "999",
    monthly: "14,99",
    desc: "Facturas, presupuestos y gastos en un solo panel. Sin Excel, sin PDF a mano.",
    includes: [
      "Gestor de facturas y presupuestos",
      "Con tu logo y colores",
      "Hosting + backups automáticos",
      "Soporte incluido",
    ],
    highlight: true,
  },
  {
    name: "Suite completa",
    setup: "899",
    originalSetup: "1.699",
    monthly: "25,99",
    desc: "Todo lo anterior más rutas, captura de tickets por IA e informes con firma.",
    includes: [
      "Web + gestión completa",
      "Optimizador de rutas",
      "Captura de gastos por foto (IA)",
      "Informes de conformidad PDF",
    ],
  },
];

const tags = [
  "Dominio incluido",
  "Hosting incluido",
  "Copias de seguridad",
  "Tu logo y colores",
  "Lectura de tickets con IA",
  "Soporte directo",
];

export default function Pricing() {
  return (
    <section id="precios" className="py-20 sm:py-28 px-4 sm:px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <p className="pill mb-6"><span aria-hidden="true">✦</span> Precios</p>
          <h2 className="t-heading-lg">
            <span className="block text-[#040101]">Precio cerrado.</span>
            <span className="block text-[#f53900]">Sin sorpresas.</span>
          </h2>
        </div>

        <p className="t-body text-[#827e7e] max-w-2xl mx-auto text-center mb-8">
          La cuota mensual cubre todo lo que necesita la herramienta para funcionar: el servidor donde vive, la dirección web, las copias de seguridad automáticas y el sistema que lee las fotos de los tickets. Tú no contratas nada, no recibes facturas de terceros, no tienes que configurar nada. Lo gestionamos nosotros.
        </p>

        <ul className="flex flex-wrap justify-center gap-2 mb-14" aria-label="Incluido en todos los planes">
          {tags.map((t) => (
            <li key={t} className="pill !py-1.5 !px-3.5">{t}</li>
          ))}
        </ul>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => {
            const hl = Boolean(p.highlight);
            return (
              <div
                key={p.name}
                className="flex flex-col p-8 sm:p-10 gap-8 rounded-[8px] border bg-[#fffafa]"
                style={{
                  borderColor: hl ? "var(--ember)" : "var(--ash)",
                  boxShadow: hl ? "var(--shadow-subtle)" : "none",
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="t-heading-sm text-[#040101]">{p.name}</h3>
                    <span className="pill !py-1 !px-3 !text-xs">{hl ? "Recomendado" : "Oferta"}</span>
                  </div>
                  <p className="t-body-sm text-[#827e7e]">{p.desc}</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-5xl font-bold tracking-[-0.03em] text-[#040101]">{p.setup} €</span>
                    <span className="t-subheading line-through text-[#827e7e]">{p.originalSetup} €</span>
                  </div>
                  <p className="t-caption text-[#4d4b4b]">pago único · puesta en marcha · por tiempo limitado</p>

                  <div className="mt-5 pt-5 border-t border-[#e5e5e5] flex items-baseline gap-2">
                    <span className="text-2xl font-semibold text-[#f53900]">{p.monthly} €</span>
                    <span className="t-caption text-[#4d4b4b]">/mes · todo incluido</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {p.includes.map((item) => (
                    <li key={item} className="flex gap-3 t-body-sm text-[#040101]">
                      <span aria-hidden="true" className="text-[#f53900]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Btn href="#contacto" variant={hl ? "primary" : "ghost"}>
                  Empezamos <span aria-hidden="true">→</span>
                </Btn>
              </div>
            );
          })}
        </div>

        <p className="mt-10 t-body-sm text-center text-[#827e7e]">
          ¿Necesitas algo diferente? Hablemos — muchos proyectos no encajan exactamente en ninguna de estas opciones.
        </p>
      </div>
    </section>
  );
}
