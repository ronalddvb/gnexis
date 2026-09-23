import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { UseCases } from "@/components/home/UseCases";
import { FeaturesBento } from "@/components/home/FeaturesBento";
import { IntegrationsStrip } from "@/components/home/IntegrationsStrip";
import { Testimonials } from "@/components/home/Testimonials";
import { PricingSummary } from "@/components/home/PricingSummary";
import { WhyUs } from "@/components/home/WhyUs";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <StatsBar />
      </Reveal>
      <Reveal>
        <ProblemSection />
      </Reveal>
      <Reveal>
        <ServicesOverview />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <UseCases />
      </Reveal>
      <Reveal>
        <FeaturesBento />
      </Reveal>
      <Reveal>
        <IntegrationsStrip />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <PricingSummary />
      </Reveal>
      <Reveal>
        <WhyUs />
      </Reveal>
      <Reveal>
        <FAQSection />
      </Reveal>
      <Reveal>
        <FinalCTA />
      </Reveal>
    </>
  );
}
