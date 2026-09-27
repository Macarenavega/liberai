export default function OtherProjects() {
  return (
    <section className="py-16 px-6" style={{ background: "var(--concrete)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase mb-8" style={{ color: "var(--safety)" }}>
          Trabajos realizados
        </p>
        <div className="grid sm:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {[
            { type: "Empresa de trabajos en altura", items: ["Gestor de facturas + presupuestos", "Captura de tickets por IA", "Informes de conformidad PDF", "Envío automático a gestoría"] },
            { type: "Empresa de seguridad contra incendios", items: ["App de diagnóstico (69 preguntas)", "Optimizador de rutas de servicio", "Web + manual de marca"] },
            { type: "Máster universitario en IA", items: ["Rediseño curricular completo", "NPS +45.9 sobre 974 respuestas"] },
          ].map(({ type, items }) => (
            <div key={type} className="p-6 flex flex-col gap-3" style={{ background: "var(--chalk)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider leading-tight" style={{ color: "var(--graphite)" }}>{type}</p>
              <ul className="flex flex-col gap-1.5">
                {items.map(item => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "var(--graphite)" }}>
                    <span style={{ color: "var(--safety)", marginTop: "1px" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
