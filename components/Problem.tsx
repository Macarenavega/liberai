export default function Problem() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="t-heading-lg text-center mb-16">
          <span className="block text-[#040101]">La mayoría del software</span>
          <span className="block text-[#f53900]">no está hecho para tu equipo.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {[
            { num: "01", title: "Pensado para la oficina", text: "Los sistemas digitales están hechos para gente sentada en una oficina." },
            { num: "02", title: "Tu equipo está en la obra", text: "Tus técnicos están en una escalera. Tus encargados, en la obra." },
            { num: "03", title: "Hecho para ellos", text: "Lo que construyo funciona para ellos — no para el que nunca sale de la pantalla." },
          ].map(({ num, title, text }) => (
            <div key={num} className="flex flex-col gap-3">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold bg-[#ffe0d6] text-[#f53900]"
                aria-hidden="true"
              >
                {num}
              </span>
              <h3 className="text-lg font-medium text-[#f53900]">{title}</h3>
              <p className="t-body text-[#040101]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
