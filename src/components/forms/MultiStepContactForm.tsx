import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const procedures = [
  "Alarplasty", "Arms Lift", "BodyTite", "Breast Implants", "Breast Lift", 
  "Breast Reduction", "Buttocks Implants", "Buttocks Lift", "Calf Implants",
  "Cheek Implants", "Cheek Reduction", "Chin Implants", "Chin Shaving",
  "Eyelids Surgery", "Face Lift (full)", "Face Lift (mini)", "Female to Male",
  "Forehead Lift", "Hair Transplant", "Liposuction", "Male to Female",
  "Neck Lift", "Nose Implant", "Nose Reshaping", "Tip Rhinoplasty",
  "Thigh Lift", "Tummy Tuck", "Vaser Liposuction", "Other"
];

const hospitals = [
  "BANGKOK - Yanhee International",
  "BANGKOK - PAI (Dr. Preecha)",
  "BANGKOK - Naravee Clinic",
  "BANGKOK - Bangpakok Hospital",
  "BANGKOK - MTF Kamol",
  "PHUKET - Phuket International (PIAC)",
  "PATTAYA - Bangkok Pattaya Hospital",
  "HUA HIN - San Paulo Hospital",
  "Undecided"
];

const nationalities = [
  "Australia", "United Kingdom", "United States", "Canada", "New Zealand",
  "Germany", "France", "Netherlands", "Sweden", "Norway", "Denmark",
  "Singapore", "Malaysia", "Japan", "South Korea", "China", "India",
  "Thailand", "Other"
];

interface FormData {
  // Step 1: Personal Details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  
  // Step 2: Procedure Details
  procedure: string;
  otherProcedure: string;
  expectedResults: string;
  preferredHospital: string;
  preferredDate: string;
  
  // Step 3: Body Details (for relevant procedures)
  height: string;
  weight: string;
  currentBraSize: string;
  requestedSize: string;
  desiredPlacement: string;
  desiredImplant: string;
  
  // Step 4: Medical History
  isPregnant: string;
  planningPregnancy: string;
  diabetes: string;
  bloodDisorders: string;
  heartCondition: string;
  otherConditions: string;
  
  // Step 5: Additional Info
  howDidYouHear: string;
  additionalMessage: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  nationality: "",
  gender: "",
  procedure: "",
  otherProcedure: "",
  expectedResults: "",
  preferredHospital: "",
  preferredDate: "",
  height: "",
  weight: "",
  currentBraSize: "",
  requestedSize: "",
  desiredPlacement: "",
  desiredImplant: "",
  isPregnant: "",
  planningPregnancy: "",
  diabetes: "",
  bloodDisorders: "",
  heartCondition: "",
  otherConditions: "",
  howDidYouHear: "",
  additionalMessage: "",
};

const MultiStepContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (currentStep: number): boolean => {
    switch (currentStep) {
      case 1:
        if (!formData.firstName.trim() || !formData.email.trim() || !formData.phone.trim()) {
          toast({
            title: "Required Fields",
            description: "Please fill in your name, email, and phone number.",
            variant: "destructive",
          });
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          toast({
            title: "Invalid Email",
            description: "Please enter a valid email address.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      case 2:
        if (!formData.procedure) {
          toast({
            title: "Required Field",
            description: "Please select a procedure.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(step)) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke("send-consultation-email", {
        body: formData,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 24 hours with surgeon feedback.",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly at +66 92 559 0848",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <h2 className="font-serif text-3xl text-foreground mb-4">Thank You!</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Your consultation request has been submitted. Our team will review your 
          information and contact you within 24 hours with personalized surgeon feedback.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Step {step} of {totalSteps}</span>
          <span className="text-accent font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Title */}
      <div className="text-center">
        <h2 className="font-serif text-2xl text-foreground mb-2">
          {step === 1 && "Personal Details"}
          {step === 2 && "Procedure Information"}
          {step === 3 && "Body Details"}
          {step === 4 && "Medical History"}
          {step === 5 && "Additional Information"}
        </h2>
        <p className="text-sm text-muted-foreground">
          {step === 1 && "Tell us about yourself"}
          {step === 2 && "What procedure are you interested in?"}
          {step === 3 && "Help us understand your goals"}
          {step === 4 && "Important for your safety"}
          {step === 5 && "Any other details to share"}
        </p>
      </div>

      {/* Form Steps */}
      <div className="space-y-6">
        {step === 1 && (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  placeholder="As in passport"
                  className="rounded-none border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  placeholder="As in passport"
                  className="rounded-none border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="your@email.com"
                className="rounded-none border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="+1 234 567 8900"
                className="rounded-none border-border"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => updateField("dateOfBirth", e.target.value)}
                  className="rounded-none border-border"
                />
              </div>
              <div className="space-y-2">
                <Label>Nationality</Label>
                <Select value={formData.nationality} onValueChange={(v) => updateField("nationality", v)}>
                  <SelectTrigger className="rounded-none border-border">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {nationalities.map((n) => (
                      <SelectItem key={n} value={n}>{n}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Gender</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(v) => updateField("gender", v)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="font-normal">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="font-normal">Male</Label>
                </div>
              </RadioGroup>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="space-y-2">
              <Label>Procedure of Interest *</Label>
              <Select value={formData.procedure} onValueChange={(v) => updateField("procedure", v)}>
                <SelectTrigger className="rounded-none border-border">
                  <SelectValue placeholder="Select a procedure" />
                </SelectTrigger>
                <SelectContent>
                  {procedures.map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {formData.procedure === "Other" && (
              <div className="space-y-2">
                <Label htmlFor="otherProcedure">Please specify</Label>
                <Input
                  id="otherProcedure"
                  value={formData.otherProcedure}
                  onChange={(e) => updateField("otherProcedure", e.target.value)}
                  placeholder="e.g., liposuction + tummy tuck"
                  className="rounded-none border-border"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label>Preferred Hospital / Location</Label>
              <Select value={formData.preferredHospital} onValueChange={(v) => updateField("preferredHospital", v)}>
                <SelectTrigger className="rounded-none border-border">
                  <SelectValue placeholder="Select a hospital" />
                </SelectTrigger>
                <SelectContent>
                  {hospitals.map((h) => (
                    <SelectItem key={h} value={h}>{h}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Surgery Date</Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => updateField("preferredDate", e.target.value)}
                className="rounded-none border-border"
              />
              <p className="text-xs text-muted-foreground">Can be approximate</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="expectedResults">What results do you expect?</Label>
              <Textarea
                id="expectedResults"
                value={formData.expectedResults}
                onChange={(e) => updateField("expectedResults", e.target.value)}
                placeholder="Describe your goals and expectations..."
                rows={4}
                className="rounded-none border-border resize-none"
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  value={formData.height}
                  onChange={(e) => updateField("height", e.target.value)}
                  placeholder="e.g., 165"
                  className="rounded-none border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  value={formData.weight}
                  onChange={(e) => updateField("weight", e.target.value)}
                  placeholder="e.g., 60"
                  className="rounded-none border-border"
                />
              </div>
            </div>

            {(formData.procedure.includes("Breast") || formData.procedure === "Other") && (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentBraSize">Current Bra Size</Label>
                    <Input
                      id="currentBraSize"
                      value={formData.currentBraSize}
                      onChange={(e) => updateField("currentBraSize", e.target.value)}
                      placeholder="e.g., 34B"
                      className="rounded-none border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="requestedSize">Requested Size</Label>
                    <Input
                      id="requestedSize"
                      value={formData.requestedSize}
                      onChange={(e) => updateField("requestedSize", e.target.value)}
                      placeholder="e.g., 34D"
                      className="rounded-none border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Desired Implant Placement</Label>
                  <Select value={formData.desiredPlacement} onValueChange={(v) => updateField("desiredPlacement", v)}>
                    <SelectTrigger className="rounded-none border-border">
                      <SelectValue placeholder="Select placement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undecided">Undecided</SelectItem>
                      <SelectItem value="over">Over the muscle</SelectItem>
                      <SelectItem value="under">Under the muscle</SelectItem>
                      <SelectItem value="dual">Dual plane</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Desired Implant Shape</Label>
                  <Select value={formData.desiredImplant} onValueChange={(v) => updateField("desiredImplant", v)}>
                    <SelectTrigger className="rounded-none border-border">
                      <SelectValue placeholder="Select shape" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undecided">Undecided</SelectItem>
                      <SelectItem value="round">Round</SelectItem>
                      <SelectItem value="teardrop">Teardrop</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            {!formData.procedure.includes("Breast") && formData.procedure !== "Other" && (
              <p className="text-muted-foreground text-center py-4">
                No additional body details needed for this procedure.
              </p>
            )}
          </>
        )}

        {step === 4 && (
          <>
            {formData.gender === "female" && (
              <>
                <div className="space-y-2">
                  <Label>Are you currently pregnant?</Label>
                  <RadioGroup
                    value={formData.isPregnant}
                    onValueChange={(v) => updateField("isPregnant", v)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="notPregnant" />
                      <Label htmlFor="notPregnant" className="font-normal">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="pregnant" />
                      <Label htmlFor="pregnant" className="font-normal">Yes</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Planning any more pregnancies?</Label>
                  <RadioGroup
                    value={formData.planningPregnancy}
                    onValueChange={(v) => updateField("planningPregnancy", v)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="noPlan" />
                      <Label htmlFor="noPlan" className="font-normal">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yesPlan" />
                      <Label htmlFor="yesPlan" className="font-normal">Yes</Label>
                    </div>
                  </RadioGroup>
                </div>
              </>
            )}

            <div className="space-y-4">
              <p className="text-sm font-medium">Do you have any of the following conditions?</p>
              
              <div className="space-y-2">
                <Label>Diabetes</Label>
                <RadioGroup
                  value={formData.diabetes}
                  onValueChange={(v) => updateField("diabetes", v)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="noDiabetes" />
                    <Label htmlFor="noDiabetes" className="font-normal">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yesDiabetes" />
                    <Label htmlFor="yesDiabetes" className="font-normal">Yes</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Blood disorders</Label>
                <RadioGroup
                  value={formData.bloodDisorders}
                  onValueChange={(v) => updateField("bloodDisorders", v)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="noBlood" />
                    <Label htmlFor="noBlood" className="font-normal">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yesBlood" />
                    <Label htmlFor="yesBlood" className="font-normal">Yes</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Heart condition</Label>
                <RadioGroup
                  value={formData.heartCondition}
                  onValueChange={(v) => updateField("heartCondition", v)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="noHeart" />
                    <Label htmlFor="noHeart" className="font-normal">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yesHeart" />
                    <Label htmlFor="yesHeart" className="font-normal">Yes</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="otherConditions">Other medical conditions or allergies</Label>
              <Textarea
                id="otherConditions"
                value={formData.otherConditions}
                onChange={(e) => updateField("otherConditions", e.target.value)}
                placeholder="Please list any other conditions, allergies, or medications..."
                rows={3}
                className="rounded-none border-border resize-none"
              />
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <div className="space-y-2">
              <Label>How did you hear about us?</Label>
              <Select value={formData.howDidYouHear} onValueChange={(v) => updateField("howDidYouHear", v)}>
                <SelectTrigger className="rounded-none border-border">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">Google Search</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="friend">Friend / Family</SelectItem>
                  <SelectItem value="returning">Returning Patient</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalMessage">Additional Message</Label>
              <Textarea
                id="additionalMessage"
                value={formData.additionalMessage}
                onChange={(e) => updateField("additionalMessage", e.target.value)}
                placeholder="Any other questions or information you'd like to share..."
                rows={4}
                className="rounded-none border-border resize-none"
              />
            </div>

            <div className="bg-muted/50 p-4 rounded-sm text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-2">What happens next?</p>
              <ul className="space-y-1">
                <li>• Our team will review your information within 24 hours</li>
                <li>• A surgeon will provide personalized feedback</li>
                <li>• We'll help you choose the best hospital and surgeon</li>
                <li>• Our service is completely free - you pay the hospital directly</li>
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        {step > 1 ? (
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            className="rounded-none border-border"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
        ) : (
          <div />
        )}

        {step < totalSteps ? (
          <Button
            type="button"
            onClick={nextStep}
            className="cta-button"
          >
            Next Step
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="cta-button"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Request
                <Check className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default MultiStepContactForm;