const items = [
  {
    title: "App de diagnóstico técnico",
    desc: "69 preguntas estandarizadas para inspecciones de campo. El técnico la completa desde el móvil, en la obra. Construida con Firebase + Lovable.",
  },
  {
    title: "Optimizador de rutas",
    desc: "Planificación automática de las rutas de los técnicos de servicio para reducir tiempo de traslado entre clientes.",
  },
  {
    title: "Rediseño web + identidad visual",
    desc: "Web completa en Wix y manual de marca desde cero — para que la empresa tuviera una imagen profesional y consistente en todos sus materiales.",
  },
];

export default function CasePesse() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--chalk)" }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs font-semibold tracking-[0.14em] uppercase mb-4"
          style={{ color: "var(--safety)" }}
        >
          Segundo caso · Buenos Aires
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2
              className="font-[family-name:var(--font-bebas)] leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--steel)" }}
            >
              Matafuegos<br />
              <span style={{ color: "var(--safety)" }}>Pesse</span>
            </h2>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--smoke)" }}
            >
              Seguridad contra incendios · Buenos Aires
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--graphite)" }}>
              El mismo patrón que Verticales BCN, en otra empresa del rubro: personal de campo
              que preferiría no tocar una pantalla, pero que necesita herramientas digitales
              para funcionar bien. Trabajé directamente dentro de la empresa — no como consultor
              externo — por eso entiendo el problema desde dentro.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="p-6"
                style={{
                  background: "var(--concrete)",
                  borderLeft: "4px solid var(--safety)",
                }}
              >
                <h3
                  className="font-[family-name:var(--font-bebas)] text-xl mb-2"
                  style={{ color: "var(--steel)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--graphite)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
