import ContactForm from "./ContactForm";
import heroBackground from "@/assets/hero-background.jpg";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Animated background image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center animate-float"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Automate Growth.{" "}
                <span className="gradient-text">Accelerate Results.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                We build AI-driven automation, SEO, and marketing systems that
                help businesses cut costs, save time, and scale faster.
              </p>
            </div>

            {/* Founder preview */}
            <div className="flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm border border-border rounded-xl">
              <div className="flex -space-x-4">
                <img
                  src={founder1}
                  alt="Founder 1"
                  className="w-12 h-12 rounded-full border-2 border-background object-cover"
                />
                <img
                  src={founder2}
                  alt="Founder 2"
                  className="w-12 h-12 rounded-full border-2 border-background object-cover"
                />
              </div>
              <div className="text-sm">
                <p className="font-semibold">Decades of experience</p>
                <p className="text-muted-foreground">
                  in AI, programming, and business automation
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:ml-auto max-w-lg w-full">
            <ContactForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
