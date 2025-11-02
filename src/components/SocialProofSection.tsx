import { Star } from "lucide-react";

const SocialProofSection = () => {
  const testimonials = [
    {
      text: "The automation solution saved us 20+ hours per week and significantly improved our conversion rates.",
      author: "Tech Startup CEO",
      rating: 5,
    },
    {
      text: "Professional, responsive, and delivered exactly what we needed. Highly recommend their services.",
      author: "Marketing Director",
      rating: 5,
    },
    {
      text: "Their AI automation transformed our workflow. ROI was visible within the first month.",
      author: "Operations Manager",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Trusted by{" "}
            <span className="gradient-text">Innovators and Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join the businesses that have transformed their operations with our
            automation solutions
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 space-y-4"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground italic">"{testimonial.text}"</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-sm">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
