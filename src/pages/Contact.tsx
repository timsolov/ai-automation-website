import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Let's Build Something Great
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Tell us about your project and we'll get back to you within 24 hours with a tailored proposal
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Contact Form */}
                <div>
                  <ContactForm variant="full" />
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-muted-foreground mb-8">
                      We're here to answer your questions and discuss how automation can transform your business. Reach out through any channel that works best for you.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <div className="text-muted-foreground">contact@aiautomation.com</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Phone</div>
                        <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Response Time</div>
                        <div className="text-muted-foreground">Within 24 hours</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Languages</div>
                        <div className="text-muted-foreground">English & Russian</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <h3 className="font-semibold mb-3">What Happens Next?</h3>
                    <ol className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">1</span>
                        <span>We review your request and schedule a discovery call</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">2</span>
                        <span>Our team analyzes your needs and prepares a tailored proposal</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">3</span>
                        <span>We present solutions and timeline, then launch your project</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
