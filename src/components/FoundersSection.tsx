

const FoundersSection = () => {
  const founders = [
    {
      name: "AI & Software Engineering Leader",
      experience: "15+ years experience",
    },
    {
      name: "Tech Innovator & Business Automation Expert",
      experience: "15+ years experience",
    },
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
