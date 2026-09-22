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

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProblemSection />
      <ServicesOverview />
      <HowItWorks />
      <UseCases />
      <FeaturesBento />
      <IntegrationsStrip />
      <Testimonials />
      <PricingSummary />
      <WhyUs />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
