import { Bot, Code2, TrendingUp, Cable } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Automation",
      description: "Optimize workflows and scale operations with intelligent automation systems.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored applications designed to solve your unique business challenges.",
      gradient: "from-accent to-secondary",
    },
    {
      icon: TrendingUp,
      title: "SEO & Marketing Automation",
      description: "Boost visibility and conversions with data-driven marketing systems.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Cable,
      title: "System Integration",
      description: "Connect tools and data seamlessly for maximum efficiency and insights.",
      gradient: "from-primary to-secondary",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Automation Solutions{" "}
            <span className="gradient-text">Designed for Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your operations with our comprehensive suite of
            AI-powered automation services
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative z-10 space-y-4">
                <div className={`inline-flex p-3 bg-gradient-to-br ${service.gradient} rounded-xl`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
