import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive tasks and free up your team to focus on high-value activities that drive innovation and growth."
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description: "Cut operational expenses by up to 40% through intelligent automation and optimized resource allocation."
  },
  {
    icon: TrendingUp,
    title: "Scale Faster",
    description: "Handle increased workload without proportional cost increases. Automation scales with your business seamlessly."
  },
  {
    icon: Zap,
    title: "Boost Efficiency",
    description: "Eliminate bottlenecks and streamline workflows for faster delivery and improved customer satisfaction."
  },
  {
    icon: Shield,
    title: "Reduce Errors",
    description: "Minimize human error and ensure consistent quality across all automated processes and operations."
  },
  {
    icon: Users,
    title: "Empower Teams",
    description: "Give your employees the tools to work smarter, not harder, and focus on strategic decision-making."
  }
];

const stats = [
  { value: "40%", label: "Average Cost Reduction" },
  { value: "60%", label: "Time Saved" },
  { value: "85%", label: "Error Reduction" },
  { value: "3x", label: "Faster Scaling" }
];

const WhyAutomation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Why Automation Matters
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                In today's fast-paced business environment, automation isn't just an advantage—it's essential for survival and growth. Discover how intelligent automation transforms businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                The Automation Advantage
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic automation delivers measurable results across every aspect of your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Real-World Impact
                </h2>
              </div>

              <Card className="border-border">
                <CardContent className="pt-8 pb-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">
                        E-commerce Transformation
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        A mid-sized e-commerce company struggled with order processing delays and customer service bottlenecks. By implementing our AI automation solution:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-border">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-1">75%</div>
                        <div className="text-sm text-muted-foreground">Faster Order Processing</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-1">50%</div>
                        <div className="text-sm text-muted-foreground">Cost Reduction</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-1">95%</div>
                        <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground">
                      The automated system handles routine inquiries, processes orders in real-time, and provides predictive inventory management—allowing the team to focus on strategic growth initiatives.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of businesses leveraging automation to drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyAutomation;
