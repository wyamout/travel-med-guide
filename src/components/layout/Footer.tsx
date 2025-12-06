import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const procedures = [
    "Rhinoplasty",
    "Breast Implants",
    "Facelift",
    "Liposuction",
    "Tummy Tuck",
    "Eyelid Surgery",
  ];

  const locations = [
    "Bangkok Hospitals",
    "Phuket Hospitals",
    "Koh Samui Clinics",
    "Pattaya Hospitals",
  ];

  const resources = [
    "Before & After Gallery",
    "Patient Testimonials",
    "Pricing Guide",
    "FAQs",
    "Medical Questionnaire",
    "Travel Information",
  ];

  return (
    <footer className="bg-foreground text-background/90">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">CS</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-card">Cosmetic Surgery</h3>
                <p className="text-sm text-card/60">Thailand</p>
              </div>
            </div>
            <p className="text-card/70 leading-relaxed">
              Thailand's premier cosmetic surgery destination. World-class surgeons, 
              JCI-accredited hospitals, and exceptional care at affordable prices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Procedures */}
          <div>
            <h4 className="font-bold text-card mb-6">Popular Procedures</h4>
            <ul className="space-y-3">
              {procedures.map((item) => (
                <li key={item}>
                  <a href="#" className="text-card/70 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-card mb-6">Our Locations</h4>
            <ul className="space-y-3">
              {locations.map((item) => (
                <li key={item}>
                  <a href="#" className="text-card/70 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-card mt-8 mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.slice(0, 3).map((item) => (
                <li key={item}>
                  <a href="#" className="text-card/70 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-card mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-card/70">Thailand</p>
                  <a href="tel:+6626533880" className="text-card hover:text-primary transition-colors font-medium">
                    +66 2 653 3880
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-card/70">Australia</p>
                  <a href="tel:+0280050056" className="text-card hover:text-primary transition-colors font-medium">
                    +02 800 500 56
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href="mailto:info@cosmeticsurgerythailand.com" className="text-card hover:text-primary transition-colors break-all">
                  info@cosmeticsurgerythailand.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-card/70">
                  One Pacific Place, Unit 1708,<br />
                  140 Sukhumvit Rd., Klongtoey,<br />
                  Bangkok 10110, Thailand
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-card/60 text-sm text-center md:text-left">
            © 2024 Cosmetic Surgery Thailand. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-card/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-card/60 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-card/60 hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
