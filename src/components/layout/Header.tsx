import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import MegaMenu from "@/components/navigation/MegaMenu";
import MobileMenu from "@/components/navigation/MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md shadow-md"
          : "bg-background/95 backdrop-blur-md"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`bg-primary text-primary-foreground transition-all duration-500 overflow-hidden ${
          isScrolled ? "max-h-0 py-0" : "max-h-20 py-2.5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a
              href="tel:+66925590848"
              className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs tracking-widest font-light">
                +66 92 559 0848
              </span>
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
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-medium text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                Cosmetic Surgery
              </span>
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
                Thailand
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Mega Menu */}
          <MegaMenu />

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/prices">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs tracking-wider uppercase font-medium hover:text-accent"
              >
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
            className="lg:hidden p-2 hover:bg-muted rounded-sm transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
