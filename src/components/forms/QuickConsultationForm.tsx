import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2 } from "lucide-react";

interface QuickConsultationFormProps {
  procedure?: string;
  showProcedureSelect?: boolean;
  className?: string;
}

const QuickConsultationForm = ({ 
  procedure, 
  showProcedureSelect = true,
  className = ""
}: QuickConsultationFormProps) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    procedure: procedure || "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build URL params with form data
    const params = new URLSearchParams();
    if (formData.firstName) params.set("firstName", formData.firstName);
    if (formData.lastName) params.set("lastName", formData.lastName);
    if (formData.email) params.set("email", formData.email);
    if (formData.phone) params.set("phone", formData.phone);
    if (formData.procedure) params.set("procedure", formData.procedure);
    if (formData.message) params.set("message", formData.message);

    // Redirect to contact page with prefilled data
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
            First Name *
          </label>
          <Input 
            type="text" 
            placeholder="John" 
            className="rounded-none border-border bg-muted/30 focus:bg-white"
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            required
          />
        </div>
        <div>
          <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
            Last Name *
          </label>
          <Input 
            type="text" 
            placeholder="Doe" 
            className="rounded-none border-border bg-muted/30 focus:bg-white"
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
          Email Address *
        </label>
        <Input 
          type="email" 
          placeholder="john@example.com" 
          className="rounded-none border-border bg-muted/30 focus:bg-white"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
          Phone (with country code)
        </label>
        <Input 
          type="tel" 
          placeholder="+1 234 567 8900" 
          className="rounded-none border-border bg-muted/30 focus:bg-white"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
        />
      </div>

      {showProcedureSelect && !procedure && (
        <div>
          <label 
            htmlFor="procedure-select"
            className="block text-xs tracking-wider uppercase text-muted-foreground mb-2"
          >
            Procedure of Interest
          </label>
          <select 
            id="procedure-select"
            aria-label="Select a procedure"
            className="w-full px-4 py-2.5 border border-border bg-muted/30 text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:bg-white transition-all text-sm"
            value={formData.procedure}
            onChange={(e) => setFormData(prev => ({ ...prev, procedure: e.target.value }))}
          >
            <option value="">Select a procedure</option>
            <option value="Nose Reshaping">Rhinoplasty</option>
            <option value="Breast Implants">Breast Augmentation</option>
            <option value="Breast Lift">Breast Lift</option>
            <option value="Breast Reduction">Breast Reduction</option>
            <option value="Face Lift (full)">Facelift</option>
            <option value="Liposuction">Liposuction</option>
            <option value="Tummy Tuck">Tummy Tuck</option>
            <option value="Eyelids Surgery">Eyelid Surgery</option>
            <option value="Other">Other / Multiple Procedures</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
          Message (Optional)
        </label>
        <Textarea
          rows={3}
          placeholder="Tell us about your goals..."
          className="rounded-none border-border bg-muted/30 focus:bg-white resize-none"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full cta-button py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Redirecting...
          </>
        ) : (
          <>
            Request Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        100% Free • No Obligation • Your information is confidential
      </p>
    </form>
  );
};

export default QuickConsultationForm;