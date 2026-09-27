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
  },
  {
    label: "Presupuestos",
    title: "Presentación seria, sin trabajo manual.",
    desc: "El cliente recibe un PDF con tu logo y colores, no una planilla compartida.",
    mockup: <MockupPresupuesto />,
  },
  {
    label: "Optimizador de rutas",
    title: "Menos kilómetros, más servicios.",
    desc: "Ordena las visitas del día por distancia. El técnico ve su ruta de un vistazo.",
    mockup: <MockupRuta />,
  },
  {
    label: "Captura de gastos",
    title: "Foto del ticket → datos listos.",
    desc: "IA extrae proveedor, importe y fecha. Sin teclear nada. Sin inventar nada.",
    mockup: <MockupTicket />,
  },
  {
    label: "Informes con firma",
    title: "El residente firma. El PDF queda guardado.",
    desc: "Hojas de conformidad por piso y puerta, con tu marca, descargables al instante.",
    mockup: <MockupInforme />,
  },
];

export default function Showcase() {
  return (
    <section id="herramientas" className="py-20 sm:py-28 px-4 sm:px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <p className="pill mb-6"><span aria-hidden="true">✦</span> Herramientas</p>
          <h2 className="t-heading-lg">
            <span className="block text-[#040101]">Mejoras concretas</span>
            <span className="block text-[#f53900]">para tu empresa.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-20 sm:gap-28">
          {tools.map((t, i) => (
            <div
              key={t.label}
              className={`grid grid-cols-1 lg:grid-cols-2 [&>*]:min-w-0 gap-10 lg:gap-20 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Texto */}
              <div>
                <p className="t-body-sm font-medium text-[#f53900] mb-3">
                  {String(i + 1).padStart(2, "0")} · {t.label}
                </p>
                <h3 className="t-heading text-[#040101] mb-4 max-w-[18ch]">{t.title}</h3>
                <p className="t-body text-[#827e7e] max-w-[42ch]">{t.desc}</p>
              </div>

              {/* Mockup */}
              <div className="rounded-[12px] border border-[#e5e5e5] p-4 sm:p-8 overflow-x-auto" style={{ boxShadow: "var(--shadow-subtle)" }}>
                {t.mockup}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
