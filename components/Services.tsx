const services = [
  {
    num: "01",
    title: "Web para tu empresa",
    desc: "Presencia digital que genera confianza y contactos reales. Sin relleno corporativo, sin formularios que nadie llena. Una web que un cliente potencial entiende en 10 segundos.",
    result: "Más llamadas, menos tiempo explicando quién sos.",
  },
  {
    num: "02",
    title: "Gestor de facturas",
    desc: "Crea y organiza tus facturas desde el móvil. Con tu logo, tus colores, tu numeración. Sin Excel roto, sin PDF armado a mano cada vez.",
    result: "Menos tiempo en papeleo, más control sobre lo que te deben.",
  },
  {
    num: "03",
    title: "Presupuestos",
    desc: "Genera presupuestos con tu identidad visual en minutos. El cliente recibe un PDF profesional con tu marca, no una planilla de Google Sheets.",
    result: "Transmitís seriedad desde el primer contacto.",
  },
  {
    num: "04",
    title: "Informes con tu marca",
    desc: "Reportes de obra, diagnósticos técnicos, actas de servicio — generados automáticamente con tu logo y colores, listos para entregar al cliente o a la gestoría.",
    result: "Documentación que parece de una empresa grande, sin el trabajo manual.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 px-6"
      style={{ background: "var(--concrete)" }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs font-semibold tracking-[0.14em] uppercase mb-4"
          style={{ color: "var(--safety)" }}
        >
          Qué hacemos
        </p>
        <h2
          className="font-[family-name:var(--font-bebas)] mb-14"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--steel)" }}
        >
          Cuatro herramientas, un hilo común: simplicidad radical.
        </h2>

        <div className="grid sm:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
          {services.map((s) => (
            <article
              key={s.num}
              className="p-8 flex flex-col gap-4"
              style={{
                background: "var(--chalk)",
                borderLeft: "4px solid var(--safety)",
              }}
            >
              <span
                className="font-[family-name:var(--font-bebas)] text-5xl leading-none"
                style={{ color: "var(--concrete)" }}
                aria-hidden="true"
              >
                {s.num}
              </span>
              <h3
                className="font-[family-name:var(--font-bebas)] text-2xl"
                style={{ color: "var(--steel)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--graphite)" }}>
                {s.desc}
              </p>
              <p className="text-sm font-semibold" style={{ color: "var(--steel)" }}>
                → {s.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
