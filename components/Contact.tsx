import Btn from "@/components/Btn";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "var(--steel)" }}
    >
      <div className="absolute top-0 right-0 w-1.5 h-full" style={{ background: "var(--safety)" }} aria-hidden="true" />

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-10">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: "var(--safety)" }}>
            Contacto
          </p>
          <h2
            className="font-[family-name:var(--font-bebas)] leading-none mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#fff" }}
          >
            ¿Tu empresa de obras<br />necesita alguna de estas cosas?
          </h2>
          <p className="text-base leading-relaxed max-w-lg" style={{ color: "var(--smoke)" }}>
            Cuéntame qué proceso te está robando tiempo. Sin formularios largos, sin demo de 45 minutos.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Btn href="https://wa.me/34603449845" large>
            WhatsApp →
          </Btn>
          <Btn href="mailto:hola@liberai.es" large>
            hola@liberai.es →
          </Btn>
        </div>
      </div>
    </section>
  );
}
