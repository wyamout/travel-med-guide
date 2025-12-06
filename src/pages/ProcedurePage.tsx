import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { getProcedureBySlug, allProcedures } from "@/data/procedures";
import { getProcedureContent } from "@/utils/contentLoader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Phone, Clock, Shield, Award, ArrowRight, Calendar, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const ProcedurePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const procedure = slug ? getProcedureBySlug(slug) : null;
  const content = slug ? getProcedureContent(slug) : null;

  if (!procedure) {
    return (
      <PageLayout
        title="Procedure Not Found"
        description="The requested procedure could not be found."
      >
        <div className="container py-32 text-center">
          <h1 className="section-title mb-4">Procedure Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The procedure you're looking for doesn't exist.
          </p>
          <Link to="/procedures">
            <Button className="cta-button">View All Procedures</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  const categoryLabels = {
    face: "Face Surgery",
    breast: "Breast Surgery",
    body: "Body Surgery",
    other: "Specialized Surgery",
  };

  const relatedProcedures = allProcedures
    .filter((p) => p.category === procedure.category && p.id !== procedure.id)
    .slice(0, 3);

  return (
    <PageLayout
      title={`${procedure.name} Thailand | Bangkok & Phuket`}
      description={content?.metaDescription || `Expert ${procedure.name.toLowerCase()} in Thailand. Board-certified surgeons, JCI hospitals. Save 60-70%. Free consultation.`}
      keywords={`${procedure.name.toLowerCase()} thailand, ${procedure.name.toLowerCase()} bangkok, cosmetic surgery thailand`}
      canonicalUrl={`https://cosmeticsurgerythailand.com/${procedure.category}/${procedure.slug}`}
    >
      {/* Hero Section with Sticky Form */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Content - 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              <AnimatedSection animation="fade-up">
                <p className="text-accent text-xs tracking-widest uppercase flex items-center gap-3">
                  <span className="w-12 h-px bg-accent" />
                  {categoryLabels[procedure.category]}
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                  {procedure.name}
                  <span className="block text-accent italic">in Thailand</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-xl">
                  {procedure.shortDescription}. Expert surgeons at JCI-accredited 
                  hospitals in Bangkok, Phuket, and Samui.
                </p>
              </AnimatedSection>

              {/* Quick Stats */}
              {content && (
                <AnimatedSection animation="fade-up" delay={250}>
                  <div className="flex flex-wrap gap-6 pt-2">
                    {content.hospitalNights && (
                      <div className="flex items-center gap-2 text-sm">
                        <Building2 className="w-4 h-4 text-accent" />
                        <span className="text-primary-foreground/70">
                          Hospital Stay: <span className="text-primary-foreground">{content.hospitalNights} night(s)</span>
                        </span>
                      </div>
                    )}
                    {content.duration && (
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-primary-foreground/70">
                          Duration: <span className="text-primary-foreground">{content.duration}</span>
                        </span>
                      </div>
                    )}
                    {content.stayDays && (
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-primary-foreground/70">
                          Stay in Thailand: <span className="text-primary-foreground">{content.stayDays}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              )}

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                    <Shield className="w-5 h-5 text-accent" />
                    <span>JCI Accredited</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                    <Award className="w-5 h-5 text-accent" />
                    <span>Board-Certified Surgeons</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                    <Clock className="w-5 h-5 text-accent" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <div className="pt-6">
                  <a href="tel:+66925590848">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: +66 92 559 0848
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Sticky Consultation Form - 2 columns */}
            <AnimatedSection animation="fade-left" delay={200} className="lg:col-span-2">
              <div className="bg-background text-foreground p-8 shadow-xl sticky top-32">
                <div className="text-center mb-6">
                  <h2 className="font-serif text-2xl text-foreground mb-2">
                    Get Your Free Quote
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Receive surgeon feedback within 24 hours
                  </p>
                </div>

                <form className="space-y-4">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Your Name *" 
                      className="rounded-none border-border bg-muted/30 focus:bg-white"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email Address *" 
                      className="rounded-none border-border bg-muted/30 focus:bg-white"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Phone (with country code)" 
                      className="rounded-none border-border bg-muted/30 focus:bg-white"
                    />
                  </div>
                  <div>
                    <Textarea
                      rows={3}
                      placeholder="Tell us about your goals..."
                      className="rounded-none border-border bg-muted/30 focus:bg-white resize-none"
                    />
                  </div>
                  <input type="hidden" name="procedure" value={procedure.name} />
                  <Button type="submit" className="w-full cta-button py-6">
                    Request Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    100% Free • No Obligation • Confidential
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      {content && content.paragraphs.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Article Content */}
              <div className="lg:col-span-2">
                <AnimatedSection animation="fade-up">
                  <article className="prose prose-lg max-w-none">
                    <h2 className="font-serif text-3xl text-foreground mb-8">
                      About {procedure.name} in Thailand
                    </h2>
                    <div className="space-y-6">
                      {content.paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                </AnimatedSection>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <AnimatedSection animation="fade-left" delay={100}>
                  <div className="bg-muted/30 border border-border p-6 sticky top-32">
                    <h3 className="font-serif text-xl text-foreground mb-4">
                      Quick Facts
                    </h3>
                    <ul className="space-y-4">
                      {content.hospitalNights && (
                        <li className="flex items-start gap-3">
                          <Building2 className="w-5 h-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Hospital Stay</p>
                            <p className="text-sm text-muted-foreground">{content.hospitalNights} night(s)</p>
                          </div>
                        </li>
                      )}
                      {content.duration && (
                        <li className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Surgery Duration</p>
                            <p className="text-sm text-muted-foreground">{content.duration}</p>
                          </div>
                        </li>
                      )}
                      {content.stayDays && (
                        <li className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Recommended Stay</p>
                            <p className="text-sm text-muted-foreground">At least {content.stayDays} in Thailand</p>
                          </div>
                        </li>
                      )}
                    </ul>

                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="text-sm font-medium text-foreground mb-3">Available Locations</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Bangkok</li>
                        <li>• Phuket</li>
                        <li>• Koh Samui</li>
                        <li>• Pattaya</li>
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="gold-accent mb-4">The Advantages</p>
              <h2 className="section-title text-foreground mb-4">
                Why Choose Thailand for {procedure.name}?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "World-Class Surgeons",
                description: "Board-certified specialists with international training and decades of experience.",
              },
              {
                title: "Save 60-70%",
                description: "Premium procedures at a fraction of Western prices without compromise.",
              },
              {
                title: "JCI Hospitals",
                description: "International gold-standard facilities with the latest technology.",
              },
              {
                title: "Personalized Care",
                description: "Dedicated English-speaking coordinators guide your entire journey.",
              },
              {
                title: "Recovery in Paradise",
                description: "Heal in beautiful Thailand with world-class hospitality.",
              },
              {
                title: "No Wait Times",
                description: "Schedule your procedure when it's convenient for you.",
              },
            ].map((benefit, index) => (
              <AnimatedSection key={benefit.title} animation="fade-up" delay={100 + index * 50}>
                <div className="bg-background border border-border p-6 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 bg-accent/10 flex items-center justify-center mb-4">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile CTA */}
      <section className="py-12 bg-accent lg:hidden">
        <div className="container text-center">
          <h2 className="font-serif text-2xl text-accent-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-accent-foreground/80 mb-6">
            Get your free consultation today
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground px-8 py-6">
              Request Free Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Related Procedures */}
      {relatedProcedures.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-foreground mb-8">Related Procedures</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProcedures.map((related, index) => (
                <AnimatedSection key={related.id} animation="fade-up" delay={100 + index * 100}>
                  <Link
                    to={`/procedures/${related.slug}`}
                    className="bg-muted/30 border border-border p-6 block hover:border-accent/30 transition-colors group"
                  >
                    <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {related.shortDescription}
                    </p>
                    <span className="text-accent text-sm font-medium inline-flex items-center gap-1">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Start Your {procedure.name} Journey Today
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation consultation with our expert team. 
              We'll match you with the perfect surgeon for your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+66925590848">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6">
                  Request Quote Online
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProcedurePage;