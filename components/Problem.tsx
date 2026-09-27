export default function Problem() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="t-heading-lg text-black max-w-[18ch] mb-16 sm:mb-20">
          La mayoría del software no está hecho para tu equipo.
        </h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 border-t border-[#e1dad9] pt-10">
          {[
            { num: "01", text: "Los sistemas digitales están hechos para gente sentada en una oficina." },
            { num: "02", text: "Tus técnicos están en una escalera. Tus encargados, en la obra." },
            { num: "03", text: "Lo que construyo funciona para ellos — no para el que nunca sale de la pantalla." },
          ].map(({ num, text }) => (
            <div key={num} className="flex flex-col gap-4">
              <span className="t-heading italic text-[#afaeae]" aria-hidden="true">
                {num}
              </span>
              <p className="t-body text-black max-w-[32ch]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
