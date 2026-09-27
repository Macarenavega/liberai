import Btn from "@/components/Btn";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 sm:py-40 px-4 sm:px-6"
      style={{ background: "var(--deep-teal)" }}
    >
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <p className="badge mb-8 text-white" style={{ background: "var(--slate-teal)" }}>
          Contacto
        </p>
        <h2 className="t-display text-white mb-8 max-w-[18ch]">
          ¿Tu empresa de obras necesita <span className="italic">alguna de estas cosas?</span>
        </h2>
        <p className="t-body max-w-lg mb-12" style={{ color: "var(--paper-muted)" }}>
          Cuéntame qué proceso te está robando tiempo. Sin formularios largos, sin demo de 45 minutos.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Btn href="https://wa.me/34603449845" variant="light" large>
            WhatsApp <span aria-hidden="true">→</span>
          </Btn>
          <Btn href="mailto:hola@liberai.es" variant="outline-light" large>
            hola@liberai.es <span aria-hidden="true">→</span>
          </Btn>
        </div>
      </div>
    </section>
  );
}
