import HeroSection from "@/components/home/HeroSection";
import ImpactBridge from "@/components/home/ImpactBridge";
import BenefitsSection from "@/components/home/BenefitsSection";
import ProcessInfographic from "@/components/home/ProcessInfographic";
import FeaturedAgent from "@/components/home/FeaturedAgent";
import AgentCatalog from "@/components/home/AgentCatalog";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactBridge />
      <BenefitsSection />
      <ProcessInfographic />
      <FeaturedAgent />
      <AgentCatalog />
    </>
  );
}
