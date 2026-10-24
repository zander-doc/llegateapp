import { Hero } from "@/sections/Hero";
import { FeatureTicker } from "@/sections/FeatureTicker";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { ComparisonSection } from "@/sections/ComparisonSection";
import { SafetySection } from "@/sections/SafetySection";
import { RoadmapSection } from "@/sections/RoadmapSection";
import { DriverSection } from "@/sections/DriverSection";
import { TeamSection } from "@/sections/TeamSection";
import { FaqSection } from "@/sections/FaqSection";
import { FinalCallToAction } from "@/sections/FinalCallToAction";

export const Main = () => {
  return (
    <main
      aria-label="Contenido principal"
      className="box-border caret-transparent outline-[3px] no-underline"
    >
      <Hero />
      <FeatureTicker />
      <HowItWorksSection />
      <ComparisonSection />
      <SafetySection />
      <RoadmapSection />
      <DriverSection />
      <TeamSection />
      <FaqSection />
      <FinalCallToAction />
    </main>
  );
};