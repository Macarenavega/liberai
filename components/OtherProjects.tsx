const projects = [
  { type: "Empresa de trabajos en altura", items: ["Gestor de facturas + presupuestos", "Captura de tickets por IA", "Informes de conformidad PDF", "Envío automático a gestoría"] },
  { type: "Empresa de seguridad contra incendios", items: ["App de diagnóstico (69 preguntas)", "Optimizador de rutas de servicio", "Web + manual de marca"] },
  { type: "Máster universitario en IA", items: ["Rediseño curricular completo", "NPS +45.9 sobre 974 respuestas"] },
];

export default function OtherProjects() {
  return (
    <section id="trabajos" className="py-20 sm:py-32 px-4 sm:px-6" style={{ background: "var(--sandstone)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="t-heading-lg text-black max-w-[14ch]">Trabajos realizados.</h2>
          <p className="t-body text-[#4a4545] max-w-sm">
            Proyectos reales, en empresas que trabajan sobre el terreno.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map(({ type, items }) => (
            <article key={type} className="p-6 sm:p-8 flex flex-col gap-6 rounded-2xl bg-white border border-[#e1dad9]">
              <h3 className="t-heading-sm text-black">{type}</h3>
              <ul className="flex flex-col gap-2.5 border-t border-[#e1dad9] pt-5">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 t-body-sm text-black">
                    <span aria-hidden="true" className="text-[#afaeae]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
