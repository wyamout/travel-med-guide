import { AlertTriangle } from "lucide-react";

interface MedicalDisclaimerProps {
  procedureName?: string;
}

const MedicalDisclaimer = ({ procedureName }: MedicalDisclaimerProps) => {
  return (
    <aside
      className="bg-muted/50 border border-border p-6 text-sm text-muted-foreground"
      role="note"
      aria-label="Medical disclaimer"
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="font-medium text-foreground text-xs tracking-widest uppercase">
            Medical Disclaimer
          </p>
          <p className="leading-relaxed">
            The information provided on this page
            {procedureName ? ` about ${procedureName}` : ""} is for educational
            purposes only and does not constitute medical advice. Individual
            results may vary. All surgical procedures carry risks including but
            not limited to infection, scarring, and adverse reactions to
            anesthesia. A qualified, board-certified plastic surgeon will assess
            your suitability during a personal consultation. Always seek
            professional medical advice before making decisions about cosmetic
            surgery.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Content medically reviewed by board-certified plastic surgeons
            affiliated with Cosmetic Surgery Thailand's partner hospitals.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default MedicalDisclaimer;
