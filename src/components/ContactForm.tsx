import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Clock, Globe } from "lucide-react";

interface ContactFormProps {
  variant?: "hero" | "full";
}

const ContactForm = ({ variant = "hero" }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request Submitted Successfully!",
        description: "We'll contact you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", description: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const trustBadges = [
    { icon: Clock, text: "Response within 24 hours" },
    { icon: CheckCircle2, text: "Confidential & secure" },
    { icon: Globe, text: "English & Russian support" },
  ];

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8"
      >
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-input border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-input border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className="bg-input border-border"
          />
        </div>

        {variant === "full" && (
          <div className="space-y-2">
            <Label htmlFor="description">Project Description *</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Tell us about your automation needs..."
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="bg-input border-border resize-none"
            />
          </div>
        )}

        <Button
          type="submit"
          variant="hero"
          size="xl"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "✅ Submit My Request"}
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-border/50">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <badge.icon className="h-4 w-4 text-primary" />
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
