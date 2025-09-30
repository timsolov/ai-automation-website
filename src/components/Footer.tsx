import { Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold gradient-text">
                AI Automation
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Expert AI-driven automation, SEO, and marketing systems. Helping
              businesses cut costs, save time, and scale faster.
            </p>
          </div>

          <div className="space-y-4 md:text-right">
            <h3 className="font-semibold">Language Support</h3>
            <p className="text-muted-foreground">
              🇬🇧 English | 🇷🇺 Russian
            </p>
            <p className="text-sm text-muted-foreground">
              Response within 24 hours for all inquiries
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} AI Automation Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
