import { FileText, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      number: "1",
      title: "Submit Your Request",
      description: "Tell us about your automation needs and business goals through our simple form.",
    },
    {
      icon: Lightbulb,
      number: "2",
      title: "Get Your Proposal",
      description: "Receive a customized solution and timeline within 24 hours of submission.",
    },
    {
      icon: Rocket,
      number: "3",
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
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            From Idea to Automation in 3 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures you get results fast without the complexity
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl mb-6">
                  {step.number}
                </div>

                <div className="space-y-4">
                  <div className="inline-flex p-4 bg-primary/10 rounded-lg">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={scrollToForm}>
              Submit Your Request Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
