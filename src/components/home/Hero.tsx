import { PrimaryButton, GhostButton } from "@/components/Button";
import { BrainVisual } from "@/components/BrainVisual";

export function Hero() {
  return (
    <section className="container-gnexis pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
            Automatización impulsada por IA Agéntica
          </p>
          <h1 className="mt-6 text-[42px] font-normal leading-[1.1] tracking-[-1.68px] text-white sm:text-[56px] sm:tracking-[-2.2px] lg:text-[64px] lg:tracking-[-2.6px]">
            Automatiza tu empresa con agentes de IA que trabajan por ti, 24/7
          </h1>
          <p className="mt-6 max-w-[480px] text-[18px] font-extralight leading-[1.5] text-silver-mist">
            Diseñamos soluciones de automatización personalizadas basadas en
            IA agéntica y modelo SaaS para que tu equipo se enfoque en lo
            importante mientras nuestros agentes ejecutan el resto.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <PrimaryButton href="/contacto">
              Agenda una demo gratuita
            </PrimaryButton>
            <GhostButton href="/#como-funciona">Ver cómo funciona</GhostButton>
          </div>
          <p className="mt-14 text-[12px] uppercase tracking-[0.025em] text-ash-gray">
            Empresas que ya automatizan con nosotros
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-[18px] font-extralight text-ash-gray">
            <span>Nimbus Retail</span>
            <span>Vertex Logistics</span>
            <span>Alto Capital</span>
            <span>Clara Salud</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <BrainVisual />
        </div>
      </div>
    </section>
  );
}
