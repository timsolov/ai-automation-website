import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FoundersSection from "@/components/FoundersSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofSection from "@/components/SocialProofSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import NeuralNoiseBackground from "@/components/NeuralNoiseBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <NeuralNoiseBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <FoundersSection />
          <ServicesSection />
          <HowItWorksSection />
          <SocialProofSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
