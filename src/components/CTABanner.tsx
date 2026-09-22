import { PrimaryButton } from "@/components/Button";

export function CTABanner({
  title = "¿Listo para automatizar tu empresa con IA?",
  text = "Agenda una demo gratuita y descubre cómo nuestros agentes pueden transformar tu operación.",
  cta = "Agenda tu demo",
  href = "/contacto",
}: {
  title?: string;
  text?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="border-t border-white/10">
      <div className="container-gnexis flex flex-col items-start gap-8 py-24 md:py-32">
        <h2 className="max-w-2xl text-[42px] font-normal leading-[1.1] tracking-[-1.68px] text-white md:text-[48px]">
          {title}
        </h2>
        <p className="max-w-md text-[18px] font-extralight leading-[1.5] text-silver-mist">
          {text}
        </p>
        <PrimaryButton href={href}>{cta}</PrimaryButton>
      </div>
    </section>
  );
}
