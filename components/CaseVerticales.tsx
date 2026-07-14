import Btn from "@/components/Btn";

const features = [
  {
    title: "Captura de gastos por foto",
    desc: "El técnico saca una foto del ticket desde el móvil (o sube un Word/PDF) y un modelo de IA extrae los datos automáticamente. Con reglas estrictas para nunca inventar un dígito que no se lee bien.",
  },
  {
    title: "Informes de conformidad",
    desc: "Hojas de firma por escalera/piso/puerta para que los residentes certifiquen la obra realizada — generadas como PDF descargable con el logo, los colores y la marca de agua de la empresa.",
  },
  {
    title: "Gestión completa en un solo panel",
    desc: "Clientes, facturas, presupuestos y gastos centralizados. Sin saltar entre WhatsApp, Excel y el correo para encontrar un dato.",
  },
  {
    title: "Envío automático a gestoría",
    desc: "La documentación (facturas, Excel de gastos) se envía automáticamente a los contactos de la gestoría. Cero trabajo manual de exportación.",
  },
  {
    title: "Backup automático",
    desc: "Cada dato y documento generado se guarda automáticamente. Nada se pierde aunque el hosting no tenga disco persistente.",
  },
  {
    title: "Identidad visual propia",
    desc: "Cada factura, presupuesto e informe sale con la marca del cliente — naranja/gris, logo de mosquetón — no con una plantilla genérica.",
  },
];

export default function CaseVerticales() {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "var(--steel)" }}
    >
      {/* Signature stripe */}
      <div
        className="absolute top-0 right-0 w-1.5 h-full"
        style={{ background: "var(--safety)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs font-semibold tracking-[0.14em] uppercase mb-4"
          style={{ color: "var(--safety)" }}
        >
          Caso principal · En producción
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div>
            <h2
              className="font-[family-name:var(--font-bebas)] leading-none mb-6"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                color: "#fff",
              }}
            >
              Gestor de Facturas<br />
              <span style={{ color: "var(--safety)" }}>Verticales BCN</span>
            </h2>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--smoke)" }}>
              Empresa de trabajos en altura y reformas · Barcelona
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div
              className="p-6 rounded-sm"
              style={{ background: "#252930", borderLeft: "4px solid var(--safety)" }}
            >
              <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--safety)" }}>
                El problema
              </p>
              <p className="leading-relaxed" style={{ color: "var(--smoke)" }}>
                Una empresa de trabajos en altura con presencia en Barcelona y América Latina.
                Gestión fragmentada entre WhatsApp, Excel y correo. Sin control de qué facturas
                estaban cobradas, sin proceso para los gastos de los técnicos, sin reportes para
                los clientes.
              </p>
            </div>
            <div
              className="p-6 rounded-sm"
              style={{ background: "#252930", borderLeft: "4px solid var(--safety)" }}
            >
              <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--safety)" }}>
                La solución
              </p>
              <p className="leading-relaxed" style={{ color: "var(--smoke)" }}>
                Sistema completo de gestión administrativa construido a medida. Desplegado y en
                uso real desde el primer día — no una demo, no un prototipo.
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px mb-12" style={{ background: "#2E333D" }}>
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 flex flex-col gap-3"
              style={{ background: "#1C1F26" }}
            >
              <h3
                className="font-[family-name:var(--font-bebas)] text-xl"
                style={{ color: "var(--safety)" }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--smoke)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stack + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8"
          style={{ borderTop: "1px solid #2E333D" }}
        >
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--smoke)" }}>Stack</p>
            <p className="text-sm font-semibold" style={{ color: "var(--concrete)" }}>
              Python · Streamlit · SQLite · IA (OCR + extracción de datos)
            </p>
          </div>
          <Btn href="#contacto" className="shrink-0">
            Quiero algo así para mi empresa →
          </Btn>
        </div>
      </div>
    </section>
  );
}
