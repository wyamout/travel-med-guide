import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { getHospitalBySlug } from "@/data/locations";
import { getHospitalSurgeons, Surgeon } from "@/utils/surgeonsLoader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin, 
  Award, 
  GraduationCap,
  Stethoscope,
  Globe,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const SurgeonCard = ({ surgeon }: { surgeon: Surgeon }) => (
  <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
    <div className="aspect-[3/4] bg-muted relative overflow-hidden">
      <img 
        src={surgeon.image} 
        alt={surgeon.fullName}
        className="w-full h-full object-cover object-top"
        onError={(e) => {
          e.currentTarget.src = "https://cosmetic.gumlet.io/wp-content/uploads/2015/05/blank.png";
        }}
      />
    </div>
    <div className="p-6 space-y-4">
      <div>
        <h3 className="text-xl font-semibold">{surgeon.fullName}</h3>
        <p className="text-accent font-medium">{surgeon.specialties}</p>
      </div>
      
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <Globe className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
          <span className="text-muted-foreground">{surgeon.languages}</span>
        </div>
        
        <div className="flex items-start gap-2">
          <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
          <span className="text-muted-foreground line-clamp-2">{surgeon.education}</span>
        </div>
        
        <div className="flex items-start gap-2">
          <Award className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
          <span className="text-muted-foreground line-clamp-2">{surgeon.credentials}</span>
        </div>
        
        <div className="flex items-start gap-2">
          <Stethoscope className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
          <span className="text-muted-foreground line-clamp-2">{surgeon.casesPerformed}</span>
        </div>
      </div>
      
      <Link to="/contact">
        <Button className="w-full cta-button mt-4">
          Book Consultation
        </Button>
      </Link>
    </div>
  </div>
);

const HospitalSurgeonsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const hospital = slug ? getHospitalBySlug(slug) : null;
  const surgeonsData = slug ? getHospitalSurgeons(slug) : null;

  if (!hospital || !surgeonsData) {
    return (
      <PageLayout
        title="Surgeons Not Found"
        description="The requested hospital surgeons could not be found."
      >
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Surgeons Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The surgeons page you're looking for doesn't exist.
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
      title={surgeonsData.metaTitle}
      description={surgeonsData.metaDescription}
      keywords={`${hospital.name.toLowerCase()} surgeons, cosmetic surgeons ${hospital.location}, plastic surgeons thailand`}
      canonicalUrl={`https://cosmeticsurgerythailand.com/${hospital.location}/${hospital.slug}/surgeons`}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
        <div className="container">
          <Link 
            to={`/${hospital.location}/${hospital.slug}`} 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {hospital.name}
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
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

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Cosmetic Surgeons at {hospital.name}
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl">
            {surgeonsData.introduction}
          </p>
        </div>
      </section>

      {/* Surgeons Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {surgeonsData.surgeons.map((surgeon, index) => (
              <SurgeonCard key={index} surgeon={surgeon} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Expert Surgeon Feedback
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Submit your consultation request and receive personalized feedback 
            from our board-certified surgeons within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                <Phone className="w-5 h-5 mr-2" />
                Free Consultation
              </Button>
            </Link>
            <Link to={`/${hospital.location}/${hospital.slug}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Hospital
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HospitalSurgeonsPage;
