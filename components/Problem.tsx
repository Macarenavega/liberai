export default function Problem() {
  return (
    <section className="py-20 px-6" style={{ background: "var(--steel)" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        {[
          { num: "01", text: "Los sistemas digitales están hechos para gente sentada en una oficina." },
          { num: "02", text: "Tus técnicos están en una escalera. Tus encargados, en la obra." },
          { num: "03", text: "Lo que construyo funciona para ellos — no para el que nunca sale de la pantalla." },
        ].map(({ num, text }) => (
          <div key={num} className="flex gap-4">
            <span
              className="font-[family-name:var(--font-bebas)] text-4xl leading-none shrink-0"
              style={{ color: "rgba(244,112,15,0.25)" }}
              aria-hidden="true"
            >
              {num}
            </span>
            <p className="text-base leading-relaxed pt-1" style={{ color: "var(--smoke)" }}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
