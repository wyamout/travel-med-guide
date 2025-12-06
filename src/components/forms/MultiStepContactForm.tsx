import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
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

const nationalities = [
  "Australia", "United Kingdom", "United States", "Canada", "New Zealand",
  "Germany", "France", "Netherlands", "Sweden", "Norway", "Denmark",
  "Singapore", "Malaysia", "Japan", "South Korea", "China", "India",
  "Thailand", "Other"
];

interface FormData {
  // Step 1: General Information
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  height: string;
  weight: string;
  gender: string;
  passportNumber: string;
  email: string;
  phone: string;
  address: string;
  nationality: string;
  
  // Emergency Contact
  emergencyName: string;
  emergencyEmail: string;
  emergencyPhone: string;
  emergencyAddress: string;
  
  // Step 2: Surgery Details
  preferredSurgeryDate: string;
  flyingHomeDate: string;
  procedure: string;
  otherProcedure: string;
  expectedResults: string;
  questionsToSurgeon: string;
  
  // Step 3: Medical Conditions
  diabetes: boolean;
  thyroid: boolean;
  heart: boolean;
  lung: boolean;
  bloodPressure: boolean;
  kidneyLiver: boolean;
  bloodDisorders: boolean;
  cancer: boolean;
  hivAids: boolean;
  depression: boolean;
  neurological: boolean;
  anesthesia: boolean;
  dvtPulmonary: boolean;
  medicalConditionsDetails: string;
  otherMedicalConditions: string;
  
  // Step 4: For Women
  birthControl: string;
  isPregnant: string;
  planningPregnancy: string;
  lastDelivery: string;
  lastBreastfeed: string;
  
  // Step 5: Medical History
  recentSurgery: string;
  recentSurgeryDetails: string;
  implants: string;
  implantsDetails: string;
  healingDifficulty: string;
  allergies: string;
  allergiesDetails: string;
  currentMedications: string;
  vitaminsSupplements: string;
  maoInhibitor: string;
  maoLastDose: string;
  anticoagulant: string;
  anticoagulantLastDose: string;
  smoke: string;
  smokeAmount: string;
  alcohol: string;
  alcoholAmount: string;
  
  // Step 6: Breast Surgery Details
  currentBraSize: string;
  requestedSize: string;
  desiredPlacement: string;
  desiredImplant: string;
  desiredIncision: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  height: "",
  weight: "",
  gender: "",
  passportNumber: "",
  email: "",
  phone: "",
  address: "",
  nationality: "",
  emergencyName: "",
  emergencyEmail: "",
  emergencyPhone: "",
  emergencyAddress: "",
  preferredSurgeryDate: "",
  flyingHomeDate: "",
  procedure: "",
  otherProcedure: "",
  expectedResults: "",
  questionsToSurgeon: "",
  diabetes: false,
  thyroid: false,
  heart: false,
  lung: false,
  bloodPressure: false,
  kidneyLiver: false,
  bloodDisorders: false,
  cancer: false,
  hivAids: false,
  depression: false,
  neurological: false,
  anesthesia: false,
  dvtPulmonary: false,
  medicalConditionsDetails: "",
  otherMedicalConditions: "",
  birthControl: "",
  isPregnant: "",
  planningPregnancy: "",
  lastDelivery: "",
  lastBreastfeed: "",
  recentSurgery: "",
  recentSurgeryDetails: "",
  implants: "",
  implantsDetails: "",
  healingDifficulty: "",
  allergies: "",
  allergiesDetails: "",
  currentMedications: "",
  vitaminsSupplements: "",
  maoInhibitor: "",
  maoLastDose: "",
  anticoagulant: "",
  anticoagulantLastDose: "",
  smoke: "",
  smokeAmount: "",
  alcohol: "",
  alcoholAmount: "",
  currentBraSize: "",
  requestedSize: "",
  desiredPlacement: "",
  desiredImplant: "",
  desiredIncision: "",
};

const MultiStepContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  const updateField = (field: keyof FormData, value: string | boolean) => {
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

  const SectionHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-accent/10 border border-accent/20 px-4 py-2 -mx-2 mb-4">
      <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">{children}</h3>
    </div>
  );

  const YesNoRadio = ({ 
    label, 
    field, 
    value 
  }: { 
    label: string; 
    field: keyof FormData; 
    value: string;
  }) => (
    <div className="space-y-2">
      <Label className="text-sm">{label}</Label>
      <RadioGroup
        value={value}
        onValueChange={(v) => updateField(field, v)}
        className="flex gap-6"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id={`${field}-no`} />
          <Label htmlFor={`${field}-no`} className="font-normal text-sm">No</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id={`${field}-yes`} />
          <Label htmlFor={`${field}-yes`} className="font-normal text-sm">Yes</Label>
        </div>
      </RadioGroup>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Step {step} of {totalSteps}</span>
          <span className="text-accent font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Title */}
      <div className="text-center pb-2">
        <h2 className="font-serif text-xl text-foreground mb-1">
          {step === 1 && "General Information"}
          {step === 2 && "Surgery Details"}
          {step === 3 && "Medical Conditions"}
          {step === 4 && "For Women & Medical History"}
          {step === 5 && "Lifestyle & Medications"}
          {step === 6 && "Breast Surgery Details"}
        </h2>
      </div>

      {/* Form Steps */}
      <div className="space-y-4">
        {step === 1 && (
          <>
            <SectionHeader>General Information</SectionHeader>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="firstName" className="text-sm">First Name * (As in Passport)</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="lastName" className="text-sm">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="dateOfBirth" className="text-sm">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => updateField("dateOfBirth", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <Label htmlFor="height" className="text-sm">Height (cm)</Label>
                  <Input
                    id="height"
                    value={formData.height}
                    onChange={(e) => updateField("height", e.target.value)}
                    className="rounded-none border-border h-9"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="weight" className="text-sm">Weight (kg)</Label>
                  <Input
                    id="weight"
                    value={formData.weight}
                    onChange={(e) => updateField("weight", e.target.value)}
                    className="rounded-none border-border h-9"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-sm">Gender</Label>
                <Select value={formData.gender} onValueChange={(v) => updateField("gender", v)}>
                  <SelectTrigger className="rounded-none border-border h-9">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="passportNumber" className="text-sm">Passport Number</Label>
                <Input
                  id="passportNumber"
                  value={formData.passportNumber}
                  onChange={(e) => updateField("passportNumber", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="email" className="text-sm">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone" className="text-sm">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="address" className="text-sm">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => updateField("address", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-sm">Nationality</Label>
                <Select value={formData.nationality} onValueChange={(v) => updateField("nationality", v)}>
                  <SelectTrigger className="rounded-none border-border h-9">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {nationalities.map((n) => (
                      <SelectItem key={n} value={n}>{n}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <SectionHeader>Emergency Contact</SectionHeader>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label htmlFor="emergencyName" className="text-sm">Name</Label>
                <Input
                  id="emergencyName"
                  value={formData.emergencyName}
                  onChange={(e) => updateField("emergencyName", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="emergencyEmail" className="text-sm">Email</Label>
                <Input
                  id="emergencyEmail"
                  type="email"
                  value={formData.emergencyEmail}
                  onChange={(e) => updateField("emergencyEmail", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="emergencyPhone" className="text-sm">Phone</Label>
                <Input
                  id="emergencyPhone"
                  type="tel"
                  value={formData.emergencyPhone}
                  onChange={(e) => updateField("emergencyPhone", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="emergencyAddress" className="text-sm">Emergency Contact Address</Label>
              <Input
                id="emergencyAddress"
                value={formData.emergencyAddress}
                onChange={(e) => updateField("emergencyAddress", e.target.value)}
                className="rounded-none border-border h-9"
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <SectionHeader>Surgery Details</SectionHeader>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="preferredSurgeryDate" className="text-sm">Planned Date of Surgery</Label>
                <Input
                  id="preferredSurgeryDate"
                  type="date"
                  value={formData.preferredSurgeryDate}
                  onChange={(e) => updateField("preferredSurgeryDate", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="flyingHomeDate" className="text-sm">Flying Home On (Date)</Label>
                <Input
                  id="flyingHomeDate"
                  type="date"
                  value={formData.flyingHomeDate}
                  onChange={(e) => updateField("flyingHomeDate", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label className="text-sm">What procedures do you require? *</Label>
              <Select value={formData.procedure} onValueChange={(v) => updateField("procedure", v)}>
                <SelectTrigger className="rounded-none border-border h-9">
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
              <div className="space-y-1">
                <Label htmlFor="otherProcedure" className="text-sm">Please specify</Label>
                <Input
                  id="otherProcedure"
                  value={formData.otherProcedure}
                  onChange={(e) => updateField("otherProcedure", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
            )}

            <div className="space-y-1">
              <Label htmlFor="expectedResults" className="text-sm">What results do you expect? (Please be as specific as possible)</Label>
              <Textarea
                id="expectedResults"
                value={formData.expectedResults}
                onChange={(e) => updateField("expectedResults", e.target.value)}
                rows={3}
                className="rounded-none border-border resize-none"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="questionsToSurgeon" className="text-sm">Questions to Surgeon</Label>
              <Textarea
                id="questionsToSurgeon"
                value={formData.questionsToSurgeon}
                onChange={(e) => updateField("questionsToSurgeon", e.target.value)}
                rows={3}
                className="rounded-none border-border resize-none"
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <SectionHeader>Medical Conditions (Please specify yes or no)</SectionHeader>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Diabetes or blood sugar problems</Label>
                <Checkbox 
                  checked={formData.diabetes}
                  onCheckedChange={(c) => updateField("diabetes", !!c)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Thyroid problems</Label>
                <Checkbox 
                  checked={formData.thyroid}
                  onCheckedChange={(c) => updateField("thyroid", !!c)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Heart problems</Label>
                <Checkbox 
                  checked={formData.heart}
                  onCheckedChange={(c) => updateField("heart", !!c)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Lung problems</Label>
                <Checkbox 
                  checked={formData.lung}
                  onCheckedChange={(c) => updateField("lung", !!c)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Blood pressure problems</Label>
                <Checkbox 
                  checked={formData.bloodPressure}
                  onCheckedChange={(c) => updateField("bloodPressure", !!c)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Kidney or Liver problems</Label>
                <Checkbox 
                  checked={formData.kidneyLiver}
                  onCheckedChange={(c) => updateField("kidneyLiver", !!c)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Blood disorders</Label>
                <Checkbox 
                  checked={formData.bloodDisorders}
                  onCheckedChange={(c) => updateField("bloodDisorders", !!c)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Previous/current history of cancer</Label>
                <Checkbox 
                  checked={formData.cancer}
                  onCheckedChange={(c) => updateField("cancer", !!c)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">HIV or AIDS</Label>
                <Checkbox 
                  checked={formData.hivAids}
                  onCheckedChange={(c) => updateField("hivAids", !!c)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Depression</Label>
                <Checkbox 
                  checked={formData.depression}
                  onCheckedChange={(c) => updateField("depression", !!c)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Neurologic problems</Label>
                <Checkbox 
                  checked={formData.neurological}
                  onCheckedChange={(c) => updateField("neurological", !!c)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Anesthesia problems</Label>
                <Checkbox 
                  checked={formData.anesthesia}
                  onCheckedChange={(c) => updateField("anesthesia", !!c)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">DVT and Pulmonary embolism</Label>
                <Checkbox 
                  checked={formData.dvtPulmonary}
                  onCheckedChange={(c) => updateField("dvtPulmonary", !!c)}
                />
              </div>
            </div>

            <div className="space-y-1 pt-2">
              <Label htmlFor="medicalConditionsDetails" className="text-sm font-medium">
                If you have answered YES to any of the above, please specify:
              </Label>
              <Textarea
                id="medicalConditionsDetails"
                value={formData.medicalConditionsDetails}
                onChange={(e) => updateField("medicalConditionsDetails", e.target.value)}
                rows={2}
                className="rounded-none border-border resize-none"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="otherMedicalConditions" className="text-sm font-medium">
                Have you had or do you have any medical conditions not mentioned above?
              </Label>
              <Textarea
                id="otherMedicalConditions"
                value={formData.otherMedicalConditions}
                onChange={(e) => updateField("otherMedicalConditions", e.target.value)}
                rows={2}
                className="rounded-none border-border resize-none"
              />
            </div>
          </>
        )}

        {step === 4 && (
          <>
            {formData.gender === "female" && (
              <>
                <SectionHeader>For Women</SectionHeader>

                <YesNoRadio 
                  label="Do you take birth control pills, hormone replacement medication, or wear a hormone patch?"
                  field="birthControl"
                  value={formData.birthControl}
                />

                <YesNoRadio 
                  label="Are you pregnant now?"
                  field="isPregnant"
                  value={formData.isPregnant}
                />

                <YesNoRadio 
                  label="Are you planning any more pregnancies?"
                  field="planningPregnancy"
                  value={formData.planningPregnancy}
                />

                <div className="space-y-1">
                  <Label htmlFor="lastDelivery" className="text-sm">When did you last deliver a baby? (Month & Year)</Label>
                  <Input
                    id="lastDelivery"
                    value={formData.lastDelivery}
                    onChange={(e) => updateField("lastDelivery", e.target.value)}
                    placeholder="e.g., March 2022"
                    className="rounded-none border-border h-9"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="lastBreastfeed" className="text-sm">When did you last breastfeed? (Month & Year)</Label>
                  <Input
                    id="lastBreastfeed"
                    value={formData.lastBreastfeed}
                    onChange={(e) => updateField("lastBreastfeed", e.target.value)}
                    placeholder="e.g., June 2022"
                    className="rounded-none border-border h-9"
                  />
                </div>
              </>
            )}

            <SectionHeader>Medical History</SectionHeader>

            <YesNoRadio 
              label="Have you been hospitalized, had surgery or received medical care within the past 12 months?"
              field="recentSurgery"
              value={formData.recentSurgery}
            />

            {formData.recentSurgery === "yes" && (
              <div className="space-y-1">
                <Label htmlFor="recentSurgeryDetails" className="text-sm">If yes, what was the reason for this?</Label>
                <Textarea
                  id="recentSurgeryDetails"
                  value={formData.recentSurgeryDetails}
                  onChange={(e) => updateField("recentSurgeryDetails", e.target.value)}
                  rows={2}
                  className="rounded-none border-border resize-none"
                />
              </div>
            )}

            <YesNoRadio 
              label="Do you have implants or any metal objects in your body?"
              field="implants"
              value={formData.implants}
            />

            {formData.implants === "yes" && (
              <div className="space-y-1">
                <Label htmlFor="implantsDetails" className="text-sm">If yes, please specify:</Label>
                <Input
                  id="implantsDetails"
                  value={formData.implantsDetails}
                  onChange={(e) => updateField("implantsDetails", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
            )}

            <YesNoRadio 
              label="Do you have difficulty with healing or scarring?"
              field="healingDifficulty"
              value={formData.healingDifficulty}
            />

            <YesNoRadio 
              label="Do you have any allergies to food, drugs, etc?"
              field="allergies"
              value={formData.allergies}
            />

            {formData.allergies === "yes" && (
              <div className="space-y-1">
                <Label htmlFor="allergiesDetails" className="text-sm">If yes, please specify:</Label>
                <Input
                  id="allergiesDetails"
                  value={formData.allergiesDetails}
                  onChange={(e) => updateField("allergiesDetails", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
            )}
          </>
        )}

        {step === 5 && (
          <>
            <SectionHeader>Medications</SectionHeader>

            <div className="space-y-1">
              <Label htmlFor="currentMedications" className="text-sm font-medium">
                List all medications you currently take including dosage for each:
              </Label>
              <Textarea
                id="currentMedications"
                value={formData.currentMedications}
                onChange={(e) => updateField("currentMedications", e.target.value)}
                rows={2}
                className="rounded-none border-border resize-none"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="vitaminsSupplements" className="text-sm font-medium">
                List all vitamins or food/nutritional supplements you currently take:
              </Label>
              <Textarea
                id="vitaminsSupplements"
                value={formData.vitaminsSupplements}
                onChange={(e) => updateField("vitaminsSupplements", e.target.value)}
                rows={2}
                className="rounded-none border-border resize-none"
              />
            </div>

            <YesNoRadio 
              label="Have you ever taken a MAO inhibitor such as Nardil, Marplan or Parnate?"
              field="maoInhibitor"
              value={formData.maoInhibitor}
            />

            {formData.maoInhibitor === "yes" && (
              <div className="space-y-1">
                <Label htmlFor="maoLastDose" className="text-sm">If yes, when was your last dose?</Label>
                <Input
                  id="maoLastDose"
                  value={formData.maoLastDose}
                  onChange={(e) => updateField("maoLastDose", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
            )}

            <YesNoRadio 
              label="Have you ever taken an anticoagulant such as Coumadin, Heparin, or a daily Aspirin?"
              field="anticoagulant"
              value={formData.anticoagulant}
            />

            {formData.anticoagulant === "yes" && (
              <div className="space-y-1">
                <Label htmlFor="anticoagulantLastDose" className="text-sm">If yes, when was your last dose?</Label>
                <Input
                  id="anticoagulantLastDose"
                  value={formData.anticoagulantLastDose}
                  onChange={(e) => updateField("anticoagulantLastDose", e.target.value)}
                  className="rounded-none border-border h-9"
                />
              </div>
            )}

            <SectionHeader>Lifestyle</SectionHeader>

            <YesNoRadio 
              label="Do you smoke?"
              field="smoke"
              value={formData.smoke}
            />

            {formData.smoke === "yes" && (
              <div className="space-y-1">
                <Label htmlFor="smokeAmount" className="text-sm">If yes, how much do you smoke?</Label>
                <Input
                  id="smokeAmount"
                  value={formData.smokeAmount}
                  onChange={(e) => updateField("smokeAmount", e.target.value)}
                  placeholder="e.g., 10 cigarettes/day"
                  className="rounded-none border-border h-9"
                />
              </div>
            )}

            <YesNoRadio 
              label="Do you drink alcohol?"
              field="alcohol"
              value={formData.alcohol}
            />

            {formData.alcohol === "yes" && (
              <div className="space-y-1">
                <Label htmlFor="alcoholAmount" className="text-sm">If yes, how much do you drink?</Label>
                <Input
                  id="alcoholAmount"
                  value={formData.alcoholAmount}
                  onChange={(e) => updateField("alcoholAmount", e.target.value)}
                  placeholder="e.g., 2-3 drinks/week"
                  className="rounded-none border-border h-9"
                />
              </div>
            )}
          </>
        )}

        {step === 6 && (
          <>
            <SectionHeader>Breast Surgery Details</SectionHeader>
            
            <p className="text-sm text-muted-foreground mb-4">
              Complete this section if you are interested in breast surgery procedures.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="currentBraSize" className="text-sm">Current Bra Size</Label>
                <Input
                  id="currentBraSize"
                  value={formData.currentBraSize}
                  onChange={(e) => updateField("currentBraSize", e.target.value)}
                  placeholder="e.g., 34B"
                  className="rounded-none border-border h-9"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="requestedSize" className="text-sm">Requested Size</Label>
                <Input
                  id="requestedSize"
                  value={formData.requestedSize}
                  onChange={(e) => updateField("requestedSize", e.target.value)}
                  placeholder="e.g., 34D"
                  className="rounded-none border-border h-9"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label className="text-sm">Desired Placement</Label>
              <Select value={formData.desiredPlacement} onValueChange={(v) => updateField("desiredPlacement", v)}>
                <SelectTrigger className="rounded-none border-border h-9">
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

            <div className="space-y-1">
              <Label className="text-sm">Desired Implant</Label>
              <Select value={formData.desiredImplant} onValueChange={(v) => updateField("desiredImplant", v)}>
                <SelectTrigger className="rounded-none border-border h-9">
                  <SelectValue placeholder="Select implant type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="undecided">Undecided</SelectItem>
                  <SelectItem value="silicone-round">Silicone Round</SelectItem>
                  <SelectItem value="silicone-teardrop">Silicone Teardrop</SelectItem>
                  <SelectItem value="saline">Saline</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label className="text-sm">Desired Incision</Label>
              <Select value={formData.desiredIncision} onValueChange={(v) => updateField("desiredIncision", v)}>
                <SelectTrigger className="rounded-none border-border h-9">
                  <SelectValue placeholder="Select incision type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="undecided">Undecided</SelectItem>
                  <SelectItem value="inframammary">Inframammary (under breast fold)</SelectItem>
                  <SelectItem value="periareolar">Periareolar (around nipple)</SelectItem>
                  <SelectItem value="transaxillary">Transaxillary (armpit)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-muted/50 p-4 rounded-sm text-sm text-muted-foreground mt-4">
              <p className="font-medium text-foreground mb-2">What happens next?</p>
              <ul className="space-y-1">
                <li>• Our team will review your information within 24 hours</li>
                <li>• A surgeon will provide personalized feedback</li>
                <li>• We will help you choose the best hospital and surgeon</li>
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
