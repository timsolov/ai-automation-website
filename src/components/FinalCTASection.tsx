import ContactForm from "./ContactForm";
import { Sparkles } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="contact-form" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Ready to Transform Your Business?</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Let's{" "}
              <span className="gradient-text">Automate Your Success</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Submit your request today and receive a personalized automation
              solution within 24 hours. Transform your operations and scale
              faster with proven expertise.
            </p>
          </div>

          <ContactForm variant="full" />

          <div className="mt-12 text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                ✓ No credit card required
              </span>
              <span className="flex items-center gap-2">
                ✓ Free consultation included
              </span>
              <span className="flex items-center gap-2">
                ✓ Tailored to your needs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
