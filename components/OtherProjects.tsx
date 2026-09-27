const projects = [
  { type: "Empresa de trabajos en altura", items: ["Gestor de facturas + presupuestos", "Captura de tickets por IA", "Informes de conformidad PDF", "Envío automático a gestoría"] },
  { type: "Empresa de seguridad contra incendios", items: ["App de diagnóstico (69 preguntas)", "Optimizador de rutas de servicio", "Web + manual de marca"] },
  { type: "Máster universitario en IA", items: ["Rediseño curricular completo", "NPS +45.9 sobre 974 respuestas"] },
];

export default function OtherProjects() {
  return (
    <section id="trabajos" className="py-20 sm:py-28 px-4 sm:px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="t-heading-lg text-center mb-4">
          <span className="text-[#040101]">Trabajos </span>
          <span className="text-[#f53900]">realizados.</span>
        </h2>
        <p className="t-body text-[#827e7e] text-center mb-14">
          Proyectos reales, en empresas que trabajan sobre el terreno.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(({ type, items }) => (
            <article key={type} className="p-8 sm:p-10 flex flex-col gap-5 rounded-[8px] border border-[#e5e5e5]">
              <h3 className="text-lg font-medium text-[#f53900]">{type}</h3>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 t-body-sm text-[#040101]">
                    <span aria-hidden="true" className="text-[#f53900]">→</span>
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
