import PageLayout from "@/components/layout/PageLayout";
import { Phone, Clock, Shield, Check } from "lucide-react";
import MultiStepContactForm from "@/components/forms/MultiStepContactForm";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

const ContactPage = () => {
  return (
    <PageLayout
      title="Free Consultation | Cosmetic Surgery Thailand"
      description="Get a free cosmetic surgery consultation in Thailand. Expert surgeon feedback within 24 hours, no obligation. Request your personalized quote today."
      keywords="free consultation cosmetic surgery thailand, contact cosmetic surgery bangkok, medical questionnaire"
      canonicalUrl="https://cosmeticsurgerythailand.com/contact"
    >
      {/* Hero */}
      <section className="pt-32 pb-8 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mb-8">
            <Breadcrumbs
              items={[{ name: "Contact", href: "/contact" }]}
              className="text-primary-foreground/60 [&_a]:text-primary-foreground/60 [&_a:hover]:text-accent [&_span.font-medium]:text-primary-foreground [&_svg]:text-primary-foreground/40"
            />
          </div>
          <div className="text-center">
          <AnimatedSection animation="fade-up">
            <p className="text-accent text-xs tracking-widest uppercase mb-4">Free Consultation</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
              Get Your Personalized Quote
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Surgeon will carefully review your case and prepare an initial evaluation, 
              including a price quote for procedure(s).
            </p>
          </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Multi-Step Form */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-up">
                <div className="bg-card border border-border p-8 md:p-10">
                  <MultiStepContactForm />
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <AnimatedSection animation="fade-left" delay={100}>
                <div className="bg-muted/30 border border-border p-6 sticky top-32">
                  <h3 className="font-serif text-xl text-foreground mb-4">
                    Why Contact Us?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Expert surgeon feedback within 24 hours",
                      "Personalized treatment recommendations",
                      "Transparent pricing with no hidden costs",
                      "Help choosing the best hospital & surgeon",
                      "Assistance with travel & accommodation",
                      "Our service is 100% free to you",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-foreground font-medium mb-3">
                      Prefer to Call?
                    </p>
                    <a
                      href="tel:+66925590848"
                      className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">+66 92 559 0848</span>
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                      <Shield className="w-4 h-4" />
                      <span>Your information is secure</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;