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
    <section id="herramientas" className="py-24 px-6" style={{ background: "var(--chalk)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: "var(--safety)" }}>
          Herramientas
        </p>
        <h2
          className="font-[family-name:var(--font-bebas)] mb-16"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--steel)" }}
        >
          Mejoras concretas para tu empresa.
        </h2>

        <div className="flex flex-col gap-24">
          {tools.map((t, i) => (
            <div
              key={t.label}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Text */}
              <div>
                <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: "var(--safety)" }}>
                  {t.label}
                </p>
                <h3
                  className="font-[family-name:var(--font-bebas)] mb-4 leading-none"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--steel)" }}
                >
                  {t.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--graphite)" }}>
                  {t.desc}
                </p>
              </div>

              {/* Mockup */}
              <div>{t.mockup}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
