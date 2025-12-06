import PageLayout from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const procedures = [
    {
      category: "Face Surgery",
      items: [
        { name: "Rhinoplasty", price: "$2,500 - $4,500", savings: "60%" },
        { name: "Facelift", price: "$4,000 - $7,000", savings: "65%" },
        { name: "Eyelid Surgery", price: "$1,200 - $2,500", savings: "55%" },
        { name: "Chin Augmentation", price: "$1,500 - $2,800", savings: "60%" },
        { name: "Forehead Lift", price: "$2,500 - $4,000", savings: "60%" },
      ],
    },
    {
      category: "Breast Surgery",
      items: [
        { name: "Breast Augmentation", price: "$3,500 - $5,500", savings: "65%" },
        { name: "Breast Lift", price: "$3,000 - $5,000", savings: "60%" },
        { name: "Breast Reduction", price: "$3,500 - $6,000", savings: "65%" },
      ],
    },
    {
      category: "Body Surgery",
      items: [
        { name: "Liposuction", price: "$2,000 - $4,500", savings: "70%" },
        { name: "Tummy Tuck", price: "$4,000 - $6,500", savings: "65%" },
        { name: "Body Lift", price: "$6,000 - $10,000", savings: "60%" },
        { name: "Buttock Lift", price: "$3,500 - $5,500", savings: "60%" },
      ],
    },
  ];

  return (
    <PageLayout
      title="Cosmetic Surgery Prices Thailand | Save Up to 70%"
      description="Compare cosmetic surgery prices in Thailand. Save 50-70% vs Western prices. All-inclusive packages at JCI-accredited hospitals."
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-up">
              <p className="text-accent text-xs tracking-widest uppercase mb-6 flex items-center gap-3">
                <span className="w-12 h-px bg-accent" />
                Transparent Pricing
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
                World-Class Surgery at
                <span className="block text-accent italic">Exceptional Value</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl">
                Save 50-70% compared to Western prices without compromising on quality. 
                Our prices include surgeon fees, hospital costs, and post-operative care.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-wrap justify-center gap-8">
              {[
                "Surgeon Fees",
                "Hospital Stay",
                "Anesthesia",
                "Post-Op Care",
                "Medications",
                "Follow-Up Visits",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="space-y-12">
            {procedures.map((category, catIndex) => (
              <AnimatedSection key={category.category} animation="fade-up" delay={catIndex * 100}>
                <div className="bg-card border border-border overflow-hidden">
                  <div className="bg-primary text-primary-foreground px-8 py-4">
                    <h2 className="font-serif text-2xl">{category.category}</h2>
                  </div>
                  <div className="divide-y divide-border">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="px-8 py-5 flex items-center justify-between hover:bg-muted/30 transition-colors"
                      >
                        <div>
                          <h3 className="font-medium text-foreground">{item.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            Save up to {item.savings} vs Western prices
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-serif text-xl text-foreground">{item.price}</div>
                          <Link
                            to="/contact"
                            className="text-xs text-accent hover:underline inline-flex items-center gap-1 mt-1"
                          >
                            Get Quote <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important:</strong> Prices shown are estimates 
                and may vary based on individual requirements, complexity, and hospital choice. 
                Final pricing will be provided after consultation with your surgeon. 
                All prices are in USD and include standard hospital package.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="bg-primary text-primary-foreground p-12 text-center">
              <h2 className="font-serif text-3xl mb-4">Get Your Personalized Quote</h2>
              <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                Receive a detailed, no-obligation quote tailored to your specific needs. 
                Our service is completely free.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-6">
                  Request Free Quote
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default PricingPage;
