import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Code, TrendingUp, Blocks, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Optimize workflows and scale operations with intelligent automation systems tailored to your business needs.",
    link: "/services/ai-automation",
    features: [
      "Process automation",
      "Intelligent decision-making",
      "Cost reduction",
      "Scalable solutions"
    ]
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Full-stack development with cutting-edge technologies for optimal performance, maintainability, and efficiency.",
    link: "/services/software",
    features: [
      "Web applications",
      "API development",
      "Cloud solutions",
      "Quality assurance"
    ]
  },
  {
    icon: TrendingUp,
    title: "SEO & Marketing Automation",
    description: "Data-driven marketing strategies and automation tools that boost visibility, engagement, and conversions.",
    link: "/services/seo-marketing",
    features: [
      "SEO optimization",
      "Campaign automation",
      "Analytics & reporting",
      "Growth strategies"
    ]
  },
  {
    icon: Blocks,
    title: "System Integration",
    description: "Seamlessly connect your tools, platforms, and data sources for unified operations and enhanced productivity.",
    link: "/services/integration",
    features: [
      "API integration",
      "Data synchronization",
      "Legacy modernization",
      "Ongoing support"
    ]
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Automation Solutions for Modern Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end services designed to transform your operations and accelerate growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="group">
                  <Link to={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
