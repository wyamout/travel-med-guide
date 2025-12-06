import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Procedures", href: "/procedures" },
    { name: "Hospitals", href: "/hospitals" },
    { name: "Before & After", href: "/before-after" },
    { name: "Surgeons", href: "/surgeons" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/30">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2.5">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a 
              href="tel:+6626533880" 
              className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs tracking-widest font-light">+66 2 653 3880</span>
            </a>
          </div>
          <div className="hidden sm:block">
            <span className="text-xs tracking-widest font-light uppercase">
              Complimentary Consultation
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-medium text-foreground tracking-tight">
                Cosmetic Surgery
              </span>
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
                Thailand
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/prices">
              <Button variant="ghost" size="sm" className="text-xs tracking-wider uppercase font-medium">
                Pricing
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm" className="cta-button px-6">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pt-6 pb-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground/80 hover:text-foreground hover:bg-muted px-4 py-3 text-sm tracking-wider uppercase font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="elegant-divider my-4" />
              <div className="flex flex-col gap-3 px-4">
                <Link to="/prices">
                  <Button variant="outline" className="w-full cta-button-outline">
                    View Pricing
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="w-full cta-button">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
