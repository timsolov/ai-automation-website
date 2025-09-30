import { FileText, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Submit Your Request",
      description: "Tell us about your automation needs and business goals through our simple form.",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Get Your Proposal",
      description: "Receive a customized solution and timeline within 24 hours of submission.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Launch Automation",
      description: "We build, test, and deploy your automation solution for immediate impact.",
    },
  ];

  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            From Idea to Automation{" "}
            <span className="gradient-text">in 3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures you get results fast without the
            complexity
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary" />
            
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                  {step.number}
                </div>

                <div className="text-center space-y-4 mt-4">
                  <div className="inline-flex p-4 bg-primary/10 rounded-xl">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="xl" onClick={scrollToForm}>
              Submit Your Request Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
