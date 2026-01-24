import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { WhatYouGetSection } from "@/components/home/WhatYouGetSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { WhoItsForSection } from "@/components/home/WhoItsForSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { WhyAISection } from "@/components/home/WhyAISection";
import { TractionSection } from "@/components/home/TractionSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatYouGetSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <FeaturesSection />
      <WhyAISection />
      <TractionSection />
      <FAQSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
