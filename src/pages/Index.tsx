import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FoundersSection from "@/components/FoundersSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofSection from "@/components/SocialProofSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
  );
};

export default Index;
