import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProceduresSection from "@/components/sections/ProceduresSection";
import WhyThailandSection from "@/components/sections/WhyThailandSection";
import HospitalsSection from "@/components/sections/HospitalsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cosmetic Surgery Thailand | Best Plastic Surgery Bangkok 2024</title>
        <meta 
          name="description" 
          content="Top-rated cosmetic surgery in Thailand. Expert surgeons, world-class hospitals in Bangkok, Phuket, Samui. Free consultation. Best prices. Book now!" 
        />
        <meta name="keywords" content="cosmetic surgery thailand, plastic surgery bangkok, rhinoplasty thailand, breast implants thailand, liposuction thailand" />
        <link rel="canonical" href="https://cosmeticsurgerythailand.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cosmetic Surgery Thailand | Best Plastic Surgery Bangkok 2024" />
        <meta property="og:description" content="Top-rated cosmetic surgery in Thailand. Expert surgeons, world-class hospitals. Free consultation available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cosmeticsurgerythailand.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cosmetic Surgery Thailand | Best Plastic Surgery Bangkok 2024" />
        <meta name="twitter:description" content="Top-rated cosmetic surgery in Thailand. Expert surgeons, world-class hospitals." />
      </Helmet>

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
