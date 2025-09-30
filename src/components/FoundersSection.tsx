import { Award, Users, Sparkles } from "lucide-react";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";

const FoundersSection = () => {
  const founders = [
    {
      name: "AI & Software Engineering Leader",
      image: founder1,
      experience: "15+ years experience",
      description: "Led international teams in Big Tech, specializing in AI systems and enterprise automation solutions.",
    },
    {
      name: "Tech Innovator & Business Automation Expert",
      image: founder2,
      experience: "15+ years experience",
      description: "Global automation expert with proven track record in scaling business operations through technology.",
    },
  ];

  const stats = [
    { icon: Award, label: "Big Tech Experience", value: "15+ Years" },
    { icon: Users, label: "International Teams Led", value: "50+" },
    { icon: Sparkles, label: "Automation Projects", value: "200+" },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Proven Expertise in{" "}
            <span className="gradient-text">Global Tech & Automation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our founders bring decades of experience from leading positions in
            Big Tech, delivering automation solutions that transform businesses
            worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">
                  {founder.experience}
                </div>
                <h3 className="text-xl font-bold">{founder.name}</h3>
                <p className="text-muted-foreground">{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
