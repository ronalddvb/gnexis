import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda una demo gratuita con Gnexis y descubre cómo automatizar tu empresa con agentes de IA.",
};

export default function ContactoPage() {
  return (
    <section className="container-gnexis py-20 md:py-28">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
            Contacto
          </p>
          <h1 className="mt-4 text-[42px] font-normal leading-[1.1] tracking-[-1.68px] text-white">
            Agenda tu demo gratuita
          </h1>
          <p className="mt-6 max-w-sm text-[18px] font-extralight leading-[1.5] text-silver-mist">
            Cuéntanos sobre tu empresa y en menos de 24 horas te contactamos
            para mostrarte cómo un agente de IA puede transformar tu
            operación.
          </p>

          <div className="mt-14 flex flex-col gap-4 text-[15px] font-extralight text-silver-mist">
            <p>
              <span className="text-ash-gray">Email </span>
              <a
                href="mailto:hola@gnexis.com"
                className="text-white hover:text-electric-iris"
              >
                hola@gnexis.com
              </a>
            </p>
            <p>
              <span className="text-ash-gray">Teléfono </span>
              <a
                href="tel:+10000000000"
                className="text-white hover:text-electric-iris"
              >
                +1 (000) 000-0000
              </a>
            </p>
            <p>
              <span className="text-ash-gray">WhatsApp </span>
              <a
                href="https://wa.me/10000000000"
                className="text-white hover:text-electric-iris"
              >
                Escríbenos
              </a>
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
