import { Award, Users, Sparkles } from "lucide-react";

const FoundersSection = () => {
  const founders = [
    {
      name: "AI & Software Engineering Leader",
      experience: "15+ years experience",
      description: "Led international teams in Big Tech, specializing in AI systems and enterprise automation solutions.",
    },
    {
      name: "Tech Innovator & Business Automation Expert",
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
    <section className="py-20 md:py-32 bg-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Proven Expertise in Global Tech & Automation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our founders bring decades of experience from leading positions in Big Tech, delivering automation solutions that transform businesses worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-6 text-center"
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">
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
              className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm text-primary font-medium">
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
