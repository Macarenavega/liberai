import MockupFactura from "@/components/MockupFactura";
import MockupPresupuesto from "@/components/MockupPresupuesto";
import MockupRuta from "@/components/MockupRuta";
import MockupTicket from "@/components/MockupTicket";
import MockupInforme from "@/components/MockupInforme";

const tools = [
  {
    label: "Facturas",
    title: "Con tu marca. Desde el móvil.",
    desc: "Genera facturas profesionales en segundos. PDF listo para mandar.",
    mockup: <MockupFactura />,
    tint: "var(--dusty-sky)",
  },
  {
    label: "Presupuestos",
    title: "Presentación seria, sin trabajo manual.",
    desc: "El cliente recibe un PDF con tu logo y colores, no una planilla compartida.",
    mockup: <MockupPresupuesto />,
    tint: "var(--desert-clay)",
  },
  {
    label: "Optimizador de rutas",
    title: "Menos kilómetros, más servicios.",
    desc: "Ordena las visitas del día por distancia. El técnico ve su ruta de un vistazo.",
    mockup: <MockupRuta />,
    tint: "var(--mist-mint)",
  },
  {
    label: "Captura de gastos",
    title: "Foto del ticket → datos listos.",
    desc: "IA extrae proveedor, importe y fecha. Sin teclear nada. Sin inventar nada.",
    mockup: <MockupTicket />,
    tint: "var(--wisteria)",
  },
  {
    label: "Informes con firma",
    title: "El residente firma. El PDF queda guardado.",
    desc: "Hojas de conformidad por piso y puerta, con tu marca, descargables al instante.",
    mockup: <MockupInforme />,
    tint: "var(--dusty-sky)",
  },
];

export default function Showcase() {
  return (
    <section id="herramientas" className="py-20 sm:py-32 px-4 sm:px-6 bg-white border-t border-[#e1dad9]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <p className="badge mb-6 bg-[#f6f5f5] text-black border border-[#e1dad9]">Herramientas</p>
          <h2 className="t-display text-black mx-auto max-w-[16ch]">
            Mejoras concretas para tu empresa.
          </h2>
        </div>

        <div className="flex flex-col gap-20 sm:gap-32">
          {tools.map((t, i) => (
            <div
              key={t.label}
              className={`grid grid-cols-1 lg:grid-cols-2 [&>*]:min-w-0 gap-10 lg:gap-20 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Texto */}
              <div>
                <p className="t-caption font-medium text-[#4a4545] mb-4">
                  <span className="text-black">{String(i + 1).padStart(2, "0")}</span> — {t.label}
                </p>
                <h3 className="t-heading text-black mb-6 max-w-[16ch]">{t.title}</h3>
                <p className="t-body text-[#4a4545] max-w-[40ch]">{t.desc}</p>
              </div>

              {/* Mockup sobre tarjeta pastel */}
              <div className="rounded-2xl p-4 sm:p-10 overflow-x-auto" style={{ background: t.tint }}>
                {t.mockup}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
