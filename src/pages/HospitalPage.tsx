import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { getHospitalBySlug } from "@/data/locations";
import { getHospitalContent } from "@/utils/hospitalContentLoader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Award, 
  ArrowRight,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

const HospitalPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const hospital = slug ? getHospitalBySlug(slug) : null;
  const content = slug ? getHospitalContent(slug) : null;

  if (!hospital) {
    return (
      <PageLayout
        title="Hospital Not Found"
        description="The requested hospital could not be found."
      >
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Hospital Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The hospital you're looking for doesn't exist.
          </p>
          <Link to="/hospitals">
            <Button>View All Hospitals</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  const locationLabels: Record<string, string> = {
    bangkok: "Bangkok",
    phuket: "Phuket",
    samui: "Koh Samui",
    pattaya: "Pattaya",
    "hua-hin": "Hua Hin",
  };

  return (
    <PageLayout
      title={content?.metaTitle || `${hospital.name} | Cosmetic Surgery Thailand`}
      description={content?.metaDescription || `${hospital.shortDescription} Expert cosmetic surgeons in ${locationLabels[hospital.location]}. Free consultation available.`}
      keywords={`${hospital.name.toLowerCase()}, cosmetic surgery ${hospital.location}, plastic surgery ${hospital.location}`}
      canonicalUrl={`https://cosmeticsurgerythailand.com/${hospital.location}/${hospital.slug}`}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="secondary" className="text-sm">
                  <MapPin className="w-3 h-3 mr-1" />
                  {locationLabels[hospital.location]}
                </Badge>
                {hospital.accreditations?.map((acc) => (
                  <Badge key={acc} variant="outline" className="text-sm">
                    <Award className="w-3 h-3 mr-1" />
                    {acc}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {content?.h1Title || hospital.name}
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl">
                {hospital.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="cta-button">
                    <Phone className="w-5 h-5 mr-2" />
                    Free Consultation
                  </Button>
                </Link>
                <Link to={`/${hospital.location}/${hospital.slug}/surgeons`}>
                  <Button size="lg" variant="outline">
                    View Surgeons
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span>International Standards</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Hospital Image */}
            <div className="relative">
              {content?.image ? (
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={content.image} 
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Shield className="w-20 h-20 mx-auto mb-4 text-primary/50" />
                    <p className="text-muted-foreground">{hospital.name}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      {content?.paragraphs && content.paragraphs.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title mb-8">
                About {hospital.name}
              </h2>
              <div className="prose prose-lg max-w-none">
                {content.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="section-title mb-12 text-center">
            Why Choose {hospital.name}?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Board-certified plastic surgeons",
              "State-of-the-art medical facilities",
              "International patient coordinators",
              "Comprehensive aftercare support",
              "Transparent pricing",
              "Airport transfers available",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-secondary" />
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact {hospital.name} for a free consultation. Our team will
            help you plan every detail.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                <Phone className="w-5 h-5 mr-2" />
                Free Consultation
              </Button>
            </Link>
            <Link to="/prices">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Prices
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HospitalPage;
