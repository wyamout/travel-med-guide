import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Sparkles, Building2, MapPin } from "lucide-react";
import { faceProcedures, breastProcedures, bodyProcedures, otherProcedures } from "@/data/procedures";
import { locations } from "@/data/locations";

interface MenuSection {
  title: string;
  items: { name: string; href: string; description?: string }[];
}

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const proceduresMenu: MenuSection[] = [
    {
      title: "Face",
      items: faceProcedures.slice(0, 6).map((p) => ({
        name: p.name,
        href: `/procedures/${p.slug}`,
      })),
    },
    {
      title: "Breast",
      items: breastProcedures.map((p) => ({
        name: p.name,
        href: `/procedures/${p.slug}`,
      })),
    },
    {
      title: "Body",
      items: bodyProcedures.map((p) => ({
        name: p.name,
        href: `/procedures/${p.slug}`,
      })),
    },
    {
      title: "Gender Affirming",
      items: otherProcedures.map((p) => ({
        name: p.name,
        href: `/procedures/${p.slug}`,
      })),
    },
  ];

  const hospitalsMenu = locations.map((location) => ({
    title: location.name,
    items: location.hospitals.map((h) => ({
      name: h.name,
      href: `/hospitals/${h.slug}`,
    })),
  }));

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {/* Procedures Menu */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("procedures")}
        onMouseLeave={handleMouseLeave}
      >
        <button className="nav-link flex items-center gap-1.5 py-2">
          Procedures
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              activeMenu === "procedures" ? "rotate-180" : ""
            }`}
          />
        </button>

        {activeMenu === "procedures" && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
            <div className="bg-card border border-border/50 shadow-xl rounded-sm w-[700px] animate-fade-in overflow-hidden">
              {/* Header */}
              <div className="bg-primary px-6 py-4 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-primary-foreground font-medium text-sm tracking-wide">
                    Cosmetic Procedures
                  </p>
                  <p className="text-primary-foreground/70 text-xs mt-0.5">
                    World-class surgical excellence in Thailand
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="grid grid-cols-4 gap-6 p-6">
                {proceduresMenu.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 block"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-border/50 px-6 py-4 bg-muted/30">
                <Link
                  to="/procedures"
                  className="text-sm text-accent hover:text-accent/80 font-medium flex items-center gap-2 transition-colors"
                >
                  View All Procedures
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hospitals Menu */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("hospitals")}
        onMouseLeave={handleMouseLeave}
      >
        <button className="nav-link flex items-center gap-1.5 py-2">
          Hospitals
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              activeMenu === "hospitals" ? "rotate-180" : ""
            }`}
          />
        </button>

        {activeMenu === "hospitals" && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
            <div className="bg-card border border-border/50 shadow-xl rounded-sm w-[600px] animate-fade-in overflow-hidden">
              {/* Header */}
              <div className="bg-primary px-6 py-4 flex items-center gap-3">
                <Building2 className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-primary-foreground font-medium text-sm tracking-wide">
                    Hospitals & Clinics
                  </p>
                  <p className="text-primary-foreground/70 text-xs mt-0.5">
                    JCI-accredited facilities across Thailand
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="grid grid-cols-3 gap-6 p-6">
                {hospitalsMenu.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {section.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 block leading-snug"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-border/50 px-6 py-4 bg-muted/30">
                <Link
                  to="/hospitals"
                  className="text-sm text-accent hover:text-accent/80 font-medium flex items-center gap-2 transition-colors"
                >
                  View All Locations
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Simple Links */}
      <Link to="/before-after" className="nav-link py-2">
        Before & After
      </Link>
      <Link to="/surgeons" className="nav-link py-2">
        Surgeons
      </Link>
      <Link to="/about" className="nav-link py-2">
        About
      </Link>
    </nav>
  );
};

export default MegaMenu;
