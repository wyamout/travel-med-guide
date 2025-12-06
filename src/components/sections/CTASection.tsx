import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

const CTASection = () => {
  const benefits = [
    { icon: CheckCircle, text: "Free, no-obligation consultation" },
    { icon: Clock, text: "Response within 24 hours" },
    { icon: Shield, text: "Your information is 100% secure" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Start Your Transformation Journey?
            </h2>
            <p className="text-xl text-primary-foreground/80 mt-6 leading-relaxed">
              Get a free, personalized consultation with our expert team. 
              We'll answer all your questions and help you plan your perfect procedure.
            </p>

            <div className="space-y-4 mt-8">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-3">
                  <benefit.icon className="w-5 h-5 text-secondary" />
                  <span className="text-primary-foreground/90">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="secondary" 
                size="xl" 
                className="bg-card text-primary hover:bg-card/90"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Get Your Free Quote
            </h3>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Interested In *
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option value="">Select a procedure</option>
                  <option value="rhinoplasty">Rhinoplasty</option>
                  <option value="breast-implants">Breast Implants</option>
                  <option value="facelift">Facelift</option>
                  <option value="liposuction">Liposuction</option>
                  <option value="tummy-tuck">Tummy Tuck</option>
                  <option value="other">Other / Multiple Procedures</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your goals or questions..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              <Button variant="cta" size="xl" className="w-full">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our Privacy Policy. 
                Your information is secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
