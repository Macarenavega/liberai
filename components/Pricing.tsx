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
    <section id="precios" className="py-20 sm:py-32 px-4 sm:px-6" style={{ background: "var(--deep-teal)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <p className="badge mb-6 text-white" style={{ background: "var(--slate-teal)" }}>Precios</p>
          <h2 className="t-display text-white mx-auto max-w-[14ch]">
            Precio cerrado. <span className="italic">Sin sorpresas.</span>
          </h2>
        </div>

        <p className="t-body max-w-2xl mx-auto mb-10" style={{ color: "var(--paper-muted)" }}>
          La cuota mensual cubre todo lo que necesita la herramienta para funcionar: el servidor donde vive, la dirección web, las copias de seguridad automáticas y el sistema que lee las fotos de los tickets. Tú no contratas nada, no recibes facturas de terceros, no tienes que configurar nada. Lo gestionamos nosotros.
        </p>

        <ul className="flex flex-wrap justify-center gap-2 mb-16" aria-label="Incluido en todos los planes">
          {tags.map((t) => (
            <li key={t} className="badge text-white" style={{ background: "var(--slate-teal)" }}>
              {t}
            </li>
          ))}
        </ul>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((p) => {
            const hl = Boolean(p.highlight);
            const ink = hl ? "#000" : "#fff";
            const muted = hl ? "var(--ink-muted)" : "var(--paper-muted)";
            return (
              <div
                key={p.name}
                className="flex flex-col p-6 sm:p-8 gap-8 rounded-2xl border"
                style={{
                  background: hl ? "var(--bone)" : "transparent",
                  borderColor: hl ? "var(--bone)" : "var(--teal-line)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="t-heading-sm font-medium" style={{ color: ink }}>
                      {p.name}
                    </h3>
                    <span
                      className="badge !py-1 !px-2.5 !text-xs border"
                      style={
                        hl
                          ? { borderColor: "var(--saddle-brown)", color: "var(--saddle-brown)" }
                          : { borderColor: "var(--teal-line)", color: "#fff" }
                      }
                    >
                      {hl ? "Recomendado" : "Oferta"}
                    </span>
                  </div>
                  <p className="t-body-sm" style={{ color: muted }}>{p.desc}</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="t-heading-lg font-bold" style={{ color: ink }}>
                      {p.setup} €
                    </span>
                    <span className="t-subheading line-through" style={{ color: muted }}>
                      {p.originalSetup} €
                    </span>
                  </div>
                  <p className="t-caption" style={{ color: muted }}>
                    pago único · puesta en marcha · por tiempo limitado
                  </p>

                  <div className="mt-5 pt-5 border-t flex items-baseline gap-2" style={{ borderColor: hl ? "var(--iron)" : "var(--teal-line)" }}>
                    <span className="t-heading-sm font-medium" style={{ color: ink }}>
                      {p.monthly} €
                    </span>
                    <span className="t-caption" style={{ color: muted }}>/mes · todo incluido</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {p.includes.map((item) => (
                    <li key={item} className="flex gap-3 t-body-sm" style={{ color: ink }}>
                      <span aria-hidden="true" style={{ color: muted }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Btn href="#contacto" variant={hl ? "dark" : "light"}>
                  Empezamos <span aria-hidden="true">→</span>
                </Btn>
              </div>
            );
          })}
        </div>

        <p className="mt-10 t-body-sm text-center" style={{ color: "var(--paper-muted)" }}>
          ¿Necesitas algo diferente? Hablemos — muchos proyectos no encajan exactamente en ninguna de estas opciones.
        </p>
      </div>
    </section>
  );
}
