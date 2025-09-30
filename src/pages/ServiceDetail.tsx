import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";

const servicesData = {
  "ai-automation": {
    title: "AI Automation",
    subtitle: "Intelligent Systems That Work for You",
    description: "Leverage cutting-edge artificial intelligence to automate complex workflows, make data-driven decisions, and scale your operations efficiently.",
    benefits: [
      "Reduce operational costs by up to 40%",
      "Process data 100x faster than manual methods",
      "Scale operations without proportional cost increases",
      "Improve accuracy and reduce human error",
      "Free teams to focus on strategic initiatives"
    ],
    features: [
      {
        title: "Process Analysis",
        description: "Comprehensive evaluation of your current workflows to identify automation opportunities and optimization potential."
      },
      {
        title: "AI Implementation",
        description: "Deploy machine learning models and intelligent algorithms tailored to your specific business requirements."
      },
      {
        title: "System Integration",
        description: "Seamlessly connect AI solutions with your existing tools and platforms for unified operations."
      },
      {
        title: "Continuous Optimization",
        description: "Ongoing monitoring and refinement to ensure maximum efficiency and ROI from your AI systems."
      }
    ],
    useCases: [
      "Customer service automation",
      "Predictive maintenance",
      "Inventory optimization",
      "Quality control",
      "Demand forecasting"
    ]
  },
  "software": {
    title: "Custom Software Development",
    subtitle: "Tailored Solutions for Unique Challenges",
    description: "Full-stack development with modern technologies, designed for performance, scalability, and long-term maintainability.",
    benefits: [
      "Built specifically for your business needs",
      "Scalable architecture that grows with you",
      "Modern tech stack for optimal performance",
      "Complete ownership and control",
      "Ongoing support and maintenance"
    ],
    features: [
      {
        title: "Requirements Engineering",
        description: "Collaborative discovery process to define project scope, goals, and technical requirements with precision."
      },
      {
        title: "Design & Architecture",
        description: "Create robust, scalable software architecture with intuitive user interfaces and seamless user experiences."
      },
      {
        title: "Development & Testing",
        description: "Agile development with continuous integration, comprehensive testing, and quality assurance at every stage."
      },
      {
        title: "Deployment & Support",
        description: "Smooth deployment to production with ongoing maintenance, updates, and technical support."
      }
    ],
    useCases: [
      "Web applications",
      "Mobile apps",
      "API development",
      "Database design",
      "Cloud solutions"
    ]
  },
  "seo-marketing": {
    title: "SEO & Marketing Automation",
    subtitle: "Data-Driven Growth Strategies",
    description: "Combine technical SEO expertise with marketing automation to boost your online visibility, drive qualified traffic, and increase conversions.",
    benefits: [
      "Increase organic traffic by up to 200%",
      "Improve search engine rankings",
      "Automate repetitive marketing tasks",
      "Better ROI through data-driven decisions",
      "Track and optimize campaign performance"
    ],
    features: [
      {
        title: "SEO Audit & Strategy",
        description: "Comprehensive analysis of your current SEO performance with actionable recommendations for improvement."
      },
      {
        title: "Technical Optimization",
        description: "Enhance site speed, mobile responsiveness, and technical SEO factors for better search rankings."
      },
      {
        title: "Marketing Automation",
        description: "Set up automated workflows for email campaigns, social media, and lead nurturing sequences."
      },
      {
        title: "Analytics & Reporting",
        description: "Track KPIs, measure ROI, and gain insights with custom dashboards and detailed performance reports."
      }
    ],
    useCases: [
      "SEO optimization",
      "Email marketing automation",
      "Social media management",
      "Lead generation",
      "Campaign analytics"
    ]
  },
  "integration": {
    title: "System Integration",
    subtitle: "Connect Everything, Streamline Operations",
    description: "Unify your business tools, automate data flows, and create a seamless technology ecosystem that enhances productivity.",
    benefits: [
      "Eliminate data silos and manual transfers",
      "Real-time synchronization across platforms",
      "Reduce errors from manual data entry",
      "Improve team collaboration and efficiency",
      "Single source of truth for business data"
    ],
    features: [
      {
        title: "System Assessment",
        description: "Evaluate your current technology stack to identify integration opportunities and compatibility requirements."
      },
      {
        title: "API Development",
        description: "Build custom APIs and connectors to enable communication between disparate systems and platforms."
      },
      {
        title: "Data Migration",
        description: "Safely transfer and synchronize data across systems with validation and integrity checks."
      },
      {
        title: "Monitoring & Support",
        description: "Continuous monitoring of integrations with proactive issue resolution and performance optimization."
      }
    ],
    useCases: [
      "CRM integration",
      "Payment gateway connection",
      "ERP synchronization",
      "Marketing tool integration",
      "Legacy system modernization"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-8">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                {service.subtitle}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                How We Deliver
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.features.map((feature, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Common Use Cases
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {service.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-background border border-border rounded-full text-sm"
                  >
                    {useCase}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-form" className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Start Your Project
                </h2>
                <p className="text-lg text-muted-foreground">
                  Tell us about your needs and receive a customized proposal within 24 hours
                </p>
              </div>
              <ContactForm variant="full" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
