import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { CaseStudiesGrid } from "@/components/CaseStudiesGrid";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description:
    "Empresas de retail, logística, finanzas y salud que automatizaron sus operaciones con agentes de IA de Gnexis.",
};

export default function CasosDeExitoPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos de éxito"
        title="Empresas que ya automatizaron con Gnexis"
        text="Resultados reales de equipos que reemplazaron procesos manuales por agentes de IA agéntica."
      />
      <Reveal>
        <CaseStudiesGrid />
      </Reveal>
      <Reveal>
        <CTABanner />
      </Reveal>
    </>
  );
}
