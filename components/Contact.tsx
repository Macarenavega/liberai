import Btn from "@/components/Btn";
import Rays from "@/components/Rays";

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 sm:py-32 px-4 sm:px-6 border-t border-[#e5e5e5]">
      <Rays originY={900} />
      <div className="relative max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <p className="pill mb-8"><span aria-hidden="true">✦</span> Contacto</p>
        <h2 className="t-display max-w-[18ch] mb-6">
          <span className="block text-[#040101]">¿Tu empresa de obras necesita</span>
          <span className="block text-[#f53900]">alguna de estas cosas?</span>
        </h2>
        <p className="t-subheading text-[#040101] max-w-[560px] mb-10">
          Cuéntame qué proceso te está robando tiempo. Sin formularios largos, sin demo de 45 minutos.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Btn href="https://wa.me/34603449845" large>
            WhatsApp <span aria-hidden="true">→</span>
          </Btn>
          <Btn href="mailto:hola@liberai.es" variant="ghost" large>
            hola@liberai.es <span aria-hidden="true">→</span>
          </Btn>
        </div>
      </div>
    </section>
  );
}
