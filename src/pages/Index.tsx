import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProceduresSection from "@/components/sections/ProceduresSection";
import WhyThailandSection from "@/components/sections/WhyThailandSection";
import HospitalsSection from "@/components/sections/HospitalsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import { MedicalBusinessSchema } from "@/components/seo/JsonLd";

const CURRENT_YEAR = new Date().getFullYear();

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{`Cosmetic Surgery Thailand | Best Plastic Surgery Bangkok ${CURRENT_YEAR}`}</title>
        <meta
          name="description"
          content={`Top-rated cosmetic surgery in Thailand. Expert surgeons, world-class hospitals in Bangkok, Phuket, Samui. Free consultation. Best prices ${CURRENT_YEAR}. Book now!`}
        />
        <meta name="keywords" content="cosmetic surgery thailand, plastic surgery bangkok, rhinoplasty thailand, breast implants thailand, liposuction thailand" />
        <link rel="canonical" href="https://cosmeticsurgerythailand.com" />

        {/* Open Graph */}
        <meta property="og:title" content={`Cosmetic Surgery Thailand | Best Plastic Surgery Bangkok ${CURRENT_YEAR}`} />
        <meta property="og:description" content="Top-rated cosmetic surgery in Thailand. Expert surgeons, world-class hospitals. Free consultation available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cosmeticsurgerythailand.com" />
        <meta property="og:image" content="https://cosmeticsurgerythailand.com/og-image.png" />
        <meta property="og:site_name" content="Cosmetic Surgery Thailand" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Cosmetic Surgery Thailand | Best Plastic Surgery Bangkok ${CURRENT_YEAR}`} />
        <meta name="twitter:description" content="Top-rated cosmetic surgery in Thailand. Expert surgeons, world-class hospitals." />
        <meta name="twitter:image" content="https://cosmeticsurgerythailand.com/og-image.png" />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="en" href="https://cosmeticsurgerythailand.com" />
        <link rel="alternate" hrefLang="x-default" href="https://cosmeticsurgerythailand.com" />
      </Helmet>

      <MedicalBusinessSchema />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProceduresSection />
          <WhyThailandSection />
          <HospitalsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
