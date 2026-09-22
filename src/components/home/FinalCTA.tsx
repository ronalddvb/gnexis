import { PrimaryButton } from "@/components/Button";

export function FinalCTA() {
  return (
    <section className="border-t border-white/10">
      <div className="container-gnexis flex flex-col items-start gap-8 py-24 md:py-32">
        <h2 className="max-w-2xl text-[48px] font-normal leading-[1.1] tracking-[-1.68px] text-white">
          ¿Listo para automatizar tu empresa con IA?
        </h2>
        <p className="max-w-md text-[18px] font-extralight leading-[1.5] text-silver-mist">
          Agenda una demo gratuita y descubre cómo nuestros agentes pueden
          transformar tu operación.
        </p>
        <PrimaryButton href="/contacto">Agenda tu demo</PrimaryButton>
      </div>
    </section>
  );
}
