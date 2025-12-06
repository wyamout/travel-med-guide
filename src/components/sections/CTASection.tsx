import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <AnimatedSection animation="fade-up">
              <p className="gold-accent flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-accent" />
                Begin Your Journey
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <h2 className="section-title text-foreground mb-6">
                Request Your
                <span className="block text-accent italic">Consultation</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="section-subtitle mb-8">
                Take the first step toward your transformation. Our team will provide 
                personalized surgeon recommendations and detailed information about your 
                desired procedure.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={300}>
              <div className="space-y-4 text-sm text-muted-foreground mb-8">
                <p className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-accent" />
                  Complimentary, no-obligation consultation
                </p>
                <p className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-accent" />
                  Response within 24 hours
                </p>
                <p className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-accent" />
                  Your information is confidential and secure
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="p-8 bg-muted/50 border border-border/50">
                <p className="font-serif text-2xl text-foreground leading-relaxed italic">
                  "You pay nothing to us. Our service is entirely complimentary. 
                  You pay only the hospital directly for your procedure."
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="bg-white border border-border p-10 shadow-lg">
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Get Your Free Quote
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                Complete the form below and we'll respond within 24 hours.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                      First Name *
                    </label>
                    <Input 
                      type="text" 
                      placeholder="John" 
                      className="rounded-none border-border bg-muted/30 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                      Last Name *
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Doe" 
                      className="rounded-none border-border bg-muted/30 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="rounded-none border-border bg-muted/30 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    Phone (with country code)
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+1 234 567 8900" 
                    className="rounded-none border-border bg-muted/30 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    Procedure of Interest
                  </label>
                  <select className="w-full px-4 py-2.5 border border-border bg-muted/30 text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:bg-white transition-all text-sm">
                    <option value="">Select a procedure</option>
                    <option value="rhinoplasty">Rhinoplasty</option>
                    <option value="breast-augmentation">Breast Augmentation</option>
                    <option value="facelift">Facelift</option>
                    <option value="liposuction">Liposuction</option>
                    <option value="tummy-tuck">Tummy Tuck</option>
                    <option value="other">Other / Multiple Procedures</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    rows={3}
                    placeholder="Tell us about your goals..."
                    className="rounded-none border-border bg-muted/30 focus:bg-white resize-none"
                  />
                </div>

                <Button className="w-full cta-button py-6">
                  Request Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  By submitting, you agree to our{" "}
                  <Link to="/privacy" className="underline hover:text-foreground">
                    Privacy Policy
                  </Link>
                  . Your information is secure and never shared.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
