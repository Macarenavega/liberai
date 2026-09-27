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

export default function Pricing() {
  return (
    <section id="precios" className="py-24 px-6" style={{ background: "var(--steel)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: "var(--safety)" }}>
          Precios
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <h2
            className="font-[family-name:var(--font-bebas)] leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff" }}
          >
            Precio cerrado.<br />Sin sorpresas.
          </h2>
          <p className="text-sm max-w-sm leading-relaxed" style={{ color: "var(--smoke)" }}>
            La cuota mensual cubre todo lo que necesita la herramienta para funcionar: el servidor donde vive, la dirección web, las copias de seguridad automáticas y el sistema que lee las fotos de los tickets. Tú no contratas nada, no recibes facturas de terceros, no tienes que configurar nada. Lo gestionamos nosotros.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-px" style={{ background: "#2E333D" }}>
          {plans.map((p) => (
            <div
              key={p.name}
              className="flex flex-col p-8 gap-6"
              style={{
                background: p.highlight ? "#252930" : "#1C1F26",
                borderTop: p.highlight ? `3px solid var(--safety)` : "3px solid transparent",
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p
                    className="font-[family-name:var(--font-bebas)] text-xl"
                    style={{ color: p.highlight ? "var(--safety)" : "var(--smoke)", letterSpacing: "0.05em" }}
                  >
                    {p.name}
                  </p>
                  {"originalSetup" in p && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm"
                      style={{ background: "var(--safety)", color: "#fff" }}
                    >
                      Oferta
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--smoke)" }}>{p.desc}</p>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="font-[family-name:var(--font-bebas)] leading-none"
                    style={{ fontSize: "3rem", color: "#fff" }}
                  >
                    {p.setup} €
                  </span>
                  {"originalSetup" in p && (
                    <span
                      className="text-lg line-through"
                      style={{ color: "var(--smoke)" }}
                    >
                      {(p as typeof p & { originalSetup: string }).originalSetup} €
                    </span>
                  )}
                </div>
                <p className="text-xs" style={{ color: "var(--smoke)" }}>
                  pago único · puesta en marcha{"originalSetup" in p ? " · por tiempo limitado" : ""}
                </p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-bold" style={{ color: "var(--safety)" }}>
                    {p.monthly} €
                  </span>
                  <span className="text-xs" style={{ color: "var(--smoke)" }}>/mes · todo incluido</span>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {p.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm" style={{ color: "var(--concrete)" }}>
                    <span style={{ color: "var(--safety)", flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Btn href="#contacto">
                Empezamos →
              </Btn>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-center" style={{ color: "var(--smoke)" }}>
          ¿Necesitas algo diferente? Hablemos — muchos proyectos no encajan exactamente en ninguna de estas opciones.
        </p>
      </div>
    </section>
  );
}
