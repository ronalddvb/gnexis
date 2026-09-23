import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { PricingTable } from "@/components/pricing/PricingTable";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Planes Starter, Growth y Enterprise para automatizar tu empresa con agentes de IA. Facturación mensual o anual, con soporte incluido.",
};

export default function PreciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Precios"
        title="Un plan para cada etapa de tu automatización"
        text="Elige el plan que se ajusta a tu operación hoy y escálalo a medida que sumas más agentes."
      />
      <Reveal>
        <PricingTable />
      </Reveal>
      <Reveal>
        <PricingFAQ />
      </Reveal>
      <Reveal>
        <CTABanner
          title="¿No estás seguro qué plan elegir?"
          text="Cuéntanos sobre tu operación y te recomendamos el plan correcto."
          cta="Habla con ventas"
        />
      </Reveal>
    </>
  );
}
