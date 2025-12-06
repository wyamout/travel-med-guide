import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const procedures = [
    { name: "Rhinoplasty", href: "/face/nose-surgery-thailand" },
    { name: "Breast Augmentation", href: "/breast/breast-implants-thailand" },
    { name: "Facelift", href: "/face/full-facelift-thailand" },
    { name: "Liposuction", href: "/body/liposuction-thailand" },
    { name: "Tummy Tuck", href: "/body/tummy-tuck-thailand" },
  ];

  const locations = [
    { name: "Bangkok", href: "/hospitals" },
    { name: "Phuket", href: "/hospitals" },
    { name: "Koh Samui", href: "/hospitals" },
    { name: "Pattaya", href: "/hospitals" },
  ];

  const resources = [
    { name: "About Us", href: "/about" },
    { name: "Surgeons", href: "/surgeons" },
    { name: "Pricing", href: "/prices" },
    { name: "FAQs", href: "/faq" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <span className="font-serif text-2xl font-medium">
                Cosmetic Surgery
              </span>
              <span className="block text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mt-1">
                Thailand
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed font-light">
              Thailand's premier destination for world-class cosmetic surgery. 
              Expert surgeons, accredited hospitals, exceptional care.
            </p>
          </div>

          {/* Procedures */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-primary-foreground/80">
              Procedures
            </h4>
            <ul className="space-y-3">
              {procedures.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Resources */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-primary-foreground/80">
              Locations
            </h4>
            <ul className="space-y-3 mb-8">
              {locations.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-primary-foreground/80">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-primary-foreground/80">
              Contact
            </h4>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-accent mt-1 shrink-0" />
              <div>
                <p className="text-primary-foreground/50 text-xs mb-1">Thailand</p>
                <a 
                  href="tel:+66925590848" 
                  className="text-primary-foreground hover:text-accent transition-colors text-sm"
                >
                  +66 92 559 0848
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs tracking-wider">
            © {new Date().getFullYear()} Cosmetic Surgery Thailand. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs tracking-wider">
            <Link 
              to="/privacy" 
              className="text-primary-foreground/40 hover:text-accent transition-colors"
            >
              Privacy
            </Link>
            <Link 
              to="/faq" 
              className="text-primary-foreground/40 hover:text-accent transition-colors"
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="text-primary-foreground/40 hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;