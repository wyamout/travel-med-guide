import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { faceProcedures, breastProcedures, bodyProcedures, otherProcedures } from "@/data/procedures";
import { locations } from "@/data/locations";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
    setExpandedCategory(null);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const procedureCategories = [
    { name: "Face", procedures: faceProcedures },
    { name: "Breast", procedures: breastProcedures },
    { name: "Body", procedures: bodyProcedures },
    { name: "Gender Affirming", procedures: otherProcedures },
  ];

  return (
    <div className="lg:hidden pt-6 pb-4 animate-fade-in border-t border-border/30 mt-4">
      <nav className="flex flex-col">
        {/* Procedures Accordion */}
        <div className="border-b border-border/30">
          <button
            onClick={() => toggleSection("procedures")}
            className="flex items-center justify-between w-full py-4 px-4 text-foreground/80 hover:text-foreground text-sm tracking-wider uppercase font-medium transition-colors"
          >
            Procedures
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                expandedSection === "procedures" ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSection === "procedures" && (
            <div className="pb-4 animate-fade-in">
              {procedureCategories.map((category) => (
                <div key={category.name} className="px-4">
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="flex items-center justify-between w-full py-2.5 text-accent text-xs uppercase tracking-widest font-semibold"
                  >
                    {category.name}
                    <ChevronRight
                      className={`w-3 h-3 transition-transform duration-200 ${
                        expandedCategory === category.name ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory === category.name && (
                    <div className="pl-4 pb-3 space-y-2 animate-fade-in">
                      {category.procedures.map((procedure) => (
                        <Link
                          key={procedure.id}
                          to={`/procedures/${procedure.slug}`}
                          onClick={onClose}
                          className="block text-sm text-muted-foreground hover:text-foreground py-1.5 transition-colors"
                        >
                          {procedure.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/procedures"
                onClick={onClose}
                className="block px-4 py-2 text-accent text-sm font-medium mt-2"
              >
                View All Procedures →
              </Link>
            </div>
          )}
        </div>

        {/* Hospitals Accordion */}
        <div className="border-b border-border/30">
          <button
            onClick={() => toggleSection("hospitals")}
            className="flex items-center justify-between w-full py-4 px-4 text-foreground/80 hover:text-foreground text-sm tracking-wider uppercase font-medium transition-colors"
          >
            Hospitals
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                expandedSection === "hospitals" ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSection === "hospitals" && (
            <div className="pb-4 animate-fade-in">
              {locations.map((location) => (
                <div key={location.id} className="px-4">
                  <button
                    onClick={() => toggleCategory(location.name)}
                    className="flex items-center justify-between w-full py-2.5 text-accent text-xs uppercase tracking-widest font-semibold"
                  >
                    {location.name}
                    <ChevronRight
                      className={`w-3 h-3 transition-transform duration-200 ${
                        expandedCategory === location.name ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory === location.name && (
                    <div className="pl-4 pb-3 space-y-2 animate-fade-in">
                      {location.hospitals.map((hospital) => (
                        <Link
                          key={hospital.id}
                          to={`/hospitals/${hospital.slug}`}
                          onClick={onClose}
                          className="block text-sm text-muted-foreground hover:text-foreground py-1.5 transition-colors"
                        >
                          {hospital.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/hospitals"
                onClick={onClose}
                className="block px-4 py-2 text-accent text-sm font-medium mt-2"
              >
                View All Locations →
              </Link>
            </div>
          )}
        </div>

        {/* Simple Links */}
        <Link
          to="/surgeons"
          onClick={onClose}
          className="py-4 px-4 text-foreground/80 hover:text-foreground text-sm tracking-wider uppercase font-medium transition-colors border-b border-border/30"
        >
          Surgeons
        </Link>
        <Link
          to="/prices"
          onClick={onClose}
          className="py-4 px-4 text-foreground/80 hover:text-foreground text-sm tracking-wider uppercase font-medium transition-colors border-b border-border/30"
        >
          Prices
        </Link>
        <Link
          to="/about"
          onClick={onClose}
          className="py-4 px-4 text-foreground/80 hover:text-foreground text-sm tracking-wider uppercase font-medium transition-colors border-b border-border/30"
        >
          About
        </Link>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 px-4 mt-6">
          <Link to="/prices" onClick={onClose}>
            <Button variant="outline" className="w-full cta-button-outline">
              View Pricing
            </Button>
          </Link>
          <Link to="/contact" onClick={onClose}>
            <Button className="w-full cta-button">Book Consultation</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
