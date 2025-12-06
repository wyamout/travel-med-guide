import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const elasticEmailApiKey = Deno.env.get("ELASTIC_EMAIL_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ConsultationRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  procedure: string;
  otherProcedure: string;
  expectedResults: string;
  preferredHospital: string;
  preferredDate: string;
  height: string;
  weight: string;
  currentBraSize: string;
  requestedSize: string;
  desiredPlacement: string;
  desiredImplant: string;
  desiredIncision: string;
  isPregnant: string;
  planningPregnancy: string;
  birthControl: string;
  lastDelivery: string;
  lastBreastfeed: string;
  diabetes: string;
  bloodDisorders: string;
  heartCondition: string;
  bloodPressure: string;
  thyroid: string;
  lung: string;
  kidneyLiver: string;
  cancer: string;
  hivAids: string;
  depression: string;
  neurologic: string;
  anesthesia: string;
  dvt: string;
  medicalConditionsDetails: string;
  otherMedicalConditions: string;
  hospitalizedPast12Months: string;
  hospitalizedDetails: string;
  implantsMetal: string;
  implantsMetalDetails: string;
  healingDifficulty: string;
  allergies: string;
  allergiesDetails: string;
  medications: string;
  vitamins: string;
  maoInhibitor: string;
  maoLastDose: string;
  anticoagulant: string;
  anticoagulantLastDose: string;
  smoke: string;
  smokeAmount: string;
  alcohol: string;
  alcoholAmount: string;
  emergencyName: string;
  emergencyEmail: string;
  emergencyPhone: string;
  emergencyAddress: string;
  questionsToSurgeon: string;
  otherConditions: string;
  howDidYouHear: string;
  additionalMessage: string;
}

function calculateAge(dateOfBirth: string): string {
  if (!dateOfBirth) return "";
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age.toString();
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

async function sendElasticEmail(to: string, subject: string, htmlBody: string, replyTo?: string): Promise<any> {
  const response = await fetch("https://api.elasticemail.com/v2/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      apikey: elasticEmailApiKey!,
      from: "hello@cosmeticsurgerythailand.com",
      fromName: "Cosmetic Surgery Thailand",
      to: to,
      replyTo: replyTo || "hilary@cosmedasia.com",
      subject: subject,
      bodyHtml: htmlBody,
      isTransactional: "true",
    }),
  });

  const result = await response.json();
  console.log("Elastic Email response:", result);
  
  if (!result.success) {
    throw new Error(result.error || "Failed to send email");
  }
  
  return result;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ConsultationRequest = await req.json();
    console.log("Received consultation request:", data);

    if (!data.firstName || !data.email || !data.phone) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const procedureDisplay = data.procedure === "Other" ? data.otherProcedure : data.procedure;
    const age = calculateAge(data.dateOfBirth);
    const formattedDOB = formatDate(data.dateOfBirth);
    const formattedSurgeryDate = formatDate(data.preferredDate);

    // Admin email with medical questionnaire format
    const adminEmailBody = `
<table border="1" width="616" cellspacing="0" align="center" style="font-family: Arial, sans-serif; font-size: 12px; border-collapse: collapse;">
<tbody>
<tr valign="top">
<td colspan="24" bgcolor="#daeef3" height="13" style="padding: 8px;"><b>GENERAL INFORMATION</b></td>
</tr>
<tr valign="top">
<td colspan="2" height="22" style="padding: 8px;"><b>First Name</b> (As Appears In Passport):</td>
<td colspan="10" style="padding: 8px;">${data.firstName || ""}</td>
<td colspan="5" style="padding: 8px;"><b>Last Name</b></td>
<td colspan="7" style="padding: 8px;">${data.lastName || ""}</td>
</tr>
<tr valign="top">
<td colspan="2" height="19" style="padding: 8px;"><b>Age:</b></td>
<td colspan="10" style="padding: 8px;">${age}</td>
<td colspan="4" style="padding: 8px;"><b>Date of Birth:</b></td>
<td colspan="8" style="padding: 8px;">${formattedDOB}<br><small>day/month/year</small></td>
</tr>
<tr valign="top">
<td colspan="2" height="17" style="padding: 8px;"><b>Height (cm):</b></td>
<td colspan="10" style="padding: 8px;">${data.height || ""}</td>
<td colspan="4" style="padding: 8px;"><b>Weight (kg):</b></td>
<td colspan="8" style="padding: 8px;">${data.weight || ""}</td>
</tr>
<tr valign="top">
<td colspan="2" height="17" style="padding: 8px;"><b>Gender:</b></td>
<td colspan="10" style="padding: 8px;">${data.gender || ""}</td>
<td colspan="4" style="padding: 8px;"><b>Passport Number:</b></td>
<td colspan="8" style="padding: 8px;"></td>
</tr>
<tr valign="top">
<td colspan="2" height="19" style="padding: 8px;"><b>E-mail:</b></td>
<td colspan="10" style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td>
<td colspan="4" style="padding: 8px;"><b>Phone:</b></td>
<td colspan="8" style="padding: 8px;"><a href="tel:${data.phone}">${data.phone}</a></td>
</tr>
<tr valign="top">
<td colspan="2" height="24" style="padding: 8px;"><b>Address:</b></td>
<td colspan="10" style="padding: 8px;"></td>
<td colspan="4" style="padding: 8px;"><b>Nationality:</b></td>
<td colspan="8" style="padding: 8px;">${data.nationality || ""}</td>
</tr>
<tr valign="top">
<td colspan="24" bgcolor="#daeef3" height="14" style="padding: 8px;"><b>PERSON TO CONTACT IN CASE OF EMERGENCIES</b></td>
</tr>
<tr valign="top">
<td style="padding: 8px;">Name:</td>
<td colspan="7" style="padding: 8px;">${data.emergencyName || ""}</td>
<td colspan="2" style="padding: 8px;">E-mail:</td>
<td colspan="9" style="padding: 8px;">${data.emergencyEmail || ""}</td>
<td colspan="2" style="padding: 8px;">Phone:</td>
<td colspan="3" style="padding: 8px;">${data.emergencyPhone || ""}</td>
</tr>
<tr valign="top">
<td style="padding: 8px;">Address:</td>
<td colspan="23" style="padding: 8px;">${data.emergencyAddress || ""}</td>
</tr>
<tr valign="top">
<td colspan="24" bgcolor="#daeef3" height="11" style="padding: 8px;"><b>SURGERY DETAILS</b></td>
</tr>
<tr valign="top">
<td colspan="3" height="19" style="padding: 8px;"><b>Planned Date of Surgery:</b></td>
<td colspan="8" style="padding: 8px;">${formattedSurgeryDate}<br><small>day/month/year</small></td>
<td colspan="9" style="padding: 8px;"><b>Flying home on (Date):</b></td>
<td colspan="4" style="padding: 8px;"></td>
</tr>
<tr valign="top">
<td colspan="6" height="24" style="padding: 8px;"><b>What procedures do you require?</b></td>
<td colspan="18" style="padding: 8px;">${procedureDisplay} ${data.otherProcedure && data.procedure !== "Other" ? data.otherProcedure : ""}</td>
</tr>
<tr valign="top">
<td colspan="6" height="24" style="padding: 8px;"><b>What results do you expect?</b> (Please be as specific as possible)</td>
<td colspan="18" style="padding: 8px;">${data.expectedResults || ""}</td>
</tr>
<tr valign="top">
<td colspan="6" height="24" style="padding: 8px;"><b>Questions to surgeon:</b></td>
<td colspan="18" style="padding: 8px;">${data.questionsToSurgeon || ""}</td>
</tr>
<tr valign="top">
<td colspan="24" bgcolor="#daeef3" height="14" style="padding: 8px;"><b>MEDICAL CONDITIONS</b> (Please specify <b>yes</b> or <b>no</b>)</td>
</tr>
<tr valign="top">
<td colspan="5" height="19" style="padding: 8px;">Diabetes or blood sugar problems</td>
<td colspan="2" style="padding: 8px;">${data.diabetes || ""}</td>
<td colspan="4" style="padding: 8px;"></td>
<td colspan="9" style="padding: 8px;">Thyroid problems</td>
<td colspan="4" style="padding: 8px;">${data.thyroid || ""}</td>
</tr>
<tr valign="top">
<td colspan="5" height="19" style="padding: 8px;">Heart problems</td>
<td colspan="2" style="padding: 8px;">${data.heartCondition || ""}</td>
<td colspan="4" style="padding: 8px;"></td>
<td colspan="9" style="padding: 8px;">Lung problems</td>
<td colspan="4" style="padding: 8px;">${data.lung || ""}</td>
</tr>
<tr valign="top">
<td colspan="5" height="19" style="padding: 8px;">Blood pressure problems</td>
<td colspan="2" style="padding: 8px;">${data.bloodPressure || ""}</td>
<td colspan="4" style="padding: 8px;"></td>
<td colspan="9" style="padding: 8px;">Kidney or Liver problems</td>
<td colspan="4" style="padding: 8px;">${data.kidneyLiver || ""}</td>
</tr>
<tr valign="top">
<td colspan="5" height="19" style="padding: 8px;">Blood disorders</td>
<td colspan="2" style="padding: 8px;">${data.bloodDisorders || ""}</td>
<td colspan="4" style="padding: 8px;"></td>
<td colspan="9" style="padding: 8px;">Previous/current history of cancer</td>
<td colspan="4" style="padding: 8px;">${data.cancer || ""}</td>
</tr>
<tr valign="top">
<td colspan="5" height="19" style="padding: 8px;">HIV or AIDS</td>
<td colspan="2" style="padding: 8px;">${data.hivAids || ""}</td>
<td colspan="4" style="padding: 8px;"></td>
<td colspan="9" style="padding: 8px;">Depression</td>
<td colspan="4" style="padding: 8px;">${data.depression || ""}</td>
</tr>
<tr valign="top">
<td colspan="5" height="19" style="padding: 8px;">Neurologic problems</td>
<td colspan="2" style="padding: 8px;">${data.neurologic || ""}</td>
<td colspan="4" style="padding: 8px;"></td>
<td colspan="9" style="padding: 8px;">Anesthesia problems</td>
<td colspan="4" style="padding: 8px;">${data.anesthesia || ""}</td>
</tr>
<tr valign="top">
<td colspan="5" height="19" style="padding: 8px;">DVT and Pulmonary embolism</td>
<td colspan="2" style="padding: 8px;">${data.dvt || ""}</td>
<td colspan="17" style="padding: 8px;"></td>
</tr>
<tr valign="top">
<td colspan="15" height="19" style="padding: 8px;"><b>If you have answered YES to any of the above, please specify:</b></td>
<td colspan="9" style="padding: 8px;">${data.medicalConditionsDetails || data.otherConditions || ""}</td>
</tr>
<tr valign="top">
<td colspan="18" height="19" style="padding: 8px;"><b>Have you had or do you have any medical conditions not mentioned above?</b></td>
<td colspan="6" style="padding: 8px;">${data.otherMedicalConditions || ""}</td>
</tr>
<tr valign="top">
<td colspan="24" bgcolor="#daeef3" height="13" style="padding: 8px;"><b>FOR WOMEN</b></td>
</tr>
<tr valign="top">
<td colspan="15" height="29" style="padding: 8px;">Do you take birth control pills, hormone replacement medication, or wear a hormone patch?</td>
<td colspan="9" style="padding: 8px;">${data.birthControl || ""}</td>
</tr>
<tr valign="top">
<td colspan="15" height="19" style="padding: 8px;">Are you pregnant now?</td>
<td colspan="9" style="padding: 8px;">${data.isPregnant || ""}</td>
</tr>
<tr valign="top">
<td colspan="15" height="19" style="padding: 8px;">Are you planning any more pregnancies?</td>
<td colspan="9" style="padding: 8px;">${data.planningPregnancy || ""}</td>
</tr>
<tr valign="top">
<td colspan="15" height="19" style="padding: 8px;">When did you last deliver a baby? (Month & Year)</td>
<td colspan="9" style="padding: 8px;">${data.lastDelivery || ""}</td>
</tr>
<tr valign="top">
<td colspan="15" height="19" style="padding: 8px;">When did you last breastfeed? (Month & Year)</td>
<td colspan="9" style="padding: 8px;">${data.lastBreastfeed || ""}</td>
</tr>
<tr valign="top">
<td colspan="24" bgcolor="#daeef3" height="14" style="padding: 8px;"><b>MEDICAL HISTORY</b></td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Have you been hospitalized, had surgery or received medical care within the past 12 months?</b></td>
<td colspan="10" style="padding: 8px;">${data.hospitalizedPast12Months || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="29" style="padding: 8px;">If yes, what was the reason for this?</td>
<td colspan="10" style="padding: 8px;">${data.hospitalizedDetails || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Do you have implants or any metal objects in your body?</b></td>
<td colspan="10" style="padding: 8px;">${data.implantsMetal || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="28" style="padding: 8px;">If yes, please specify:</td>
<td colspan="10" style="padding: 8px;">${data.implantsMetalDetails || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="23" style="padding: 8px;"><b>Do you have difficulty with healing or scarring?</b></td>
<td colspan="10" style="padding: 8px;">${data.healingDifficulty || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Do you have any allergies to food, drugs, etc?</b></td>
<td colspan="10" style="padding: 8px;">${data.allergies || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="30" style="padding: 8px;">If yes, please specify:</td>
<td colspan="10" style="padding: 8px;">${data.allergiesDetails || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="30" style="padding: 8px;"><b>List all medications you currently take including dosage for each:</b></td>
<td colspan="10" style="padding: 8px;">${data.medications || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="40" style="padding: 8px;"><b>List all vitamins or food/nutritional supplements you currently take:</b></td>
<td colspan="10" style="padding: 8px;">${data.vitamins || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Have you ever taken a MAO inhibitor such as Nardil, Marplan or Parnate?</b></td>
<td colspan="10" style="padding: 8px;">${data.maoInhibitor || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="30" style="padding: 8px;">If yes, when was your last dose?</td>
<td colspan="10" style="padding: 8px;">${data.maoLastDose || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Have you ever taken an anticoagulant such as Coumadin, Heparin, or a daily Aspirin?</b></td>
<td colspan="10" style="padding: 8px;">${data.anticoagulant || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="26" style="padding: 8px;">If yes, when was your last dose?</td>
<td colspan="10" style="padding: 8px;">${data.anticoagulantLastDose || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Do you smoke?</b></td>
<td colspan="10" style="padding: 8px;">${data.smoke || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;">If yes, how much do you smoke?</td>
<td colspan="10" style="padding: 8px;">${data.smokeAmount || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Do you drink alcohol?</b></td>
<td colspan="10" style="padding: 8px;">${data.alcohol || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="11" style="padding: 8px;">If yes, how much do you drink?</td>
<td colspan="10" style="padding: 8px;">${data.alcoholAmount || ""}</td>
</tr>
<tr valign="top">
<td colspan="24" bgcolor="#daeef3" height="14" style="padding: 8px;"><b>BREAST SURGERY DETAILS</b></td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Current Bra Size</b></td>
<td colspan="10" style="padding: 8px;">${data.currentBraSize || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Requested Size:</b></td>
<td colspan="10" style="padding: 8px;">${data.requestedSize || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Desired Placement</b></td>
<td colspan="10" style="padding: 8px;">${data.desiredPlacement || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Desired Implant:</b></td>
<td colspan="10" style="padding: 8px;">${data.desiredImplant || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Desired Incision:</b></td>
<td colspan="10" style="padding: 8px;">${data.desiredIncision || ""}</td>
</tr>
<tr valign="top">
<td colspan="24" bgcolor="#daeef3" height="14" style="padding: 8px;"><b>ADDITIONAL INFORMATION</b></td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>How did you hear about us?</b></td>
<td colspan="10" style="padding: 8px;">${data.howDidYouHear || ""}</td>
</tr>
<tr valign="top">
<td colspan="14" height="19" style="padding: 8px;"><b>Additional Message:</b></td>
<td colspan="10" style="padding: 8px;">${data.additionalMessage || ""}</td>
</tr>
</tbody>
</table>
    `;

    const adminEmailResult = await sendElasticEmail(
      "hilary@cosmedasia.com",
      "New Medical Questionnaire from [Cosmetic Surgery Thailand]",
      adminEmailBody,
      data.email
    );

    console.log("Admin email sent:", adminEmailResult);

    // Send confirmation email to patient
    const patientEmailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1e3a5f; color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Thank You, ${data.firstName}!</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">We've received your consultation request</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Thank you for your interest in ${procedureDisplay} in Thailand. Our team of experts will carefully review your information and get back to you within 24 hours with personalized surgeon feedback.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h2 style="color: #1e3a5f; margin-top: 0; font-size: 18px;">What happens next?</h2>
            <ul style="color: #666; line-height: 1.8;">
              <li>Our medical team will review your information</li>
              <li>A surgeon will provide personalized feedback</li>
              <li>We'll contact you with options and pricing</li>
              <li>We'll help with travel planning if you proceed</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            If you have any urgent questions, please don't hesitate to call us at <a href="tel:+66925590848" style="color: #1e3a5f; font-weight: bold;">+66 92 559 0848</a>.
          </p>
          
          <p style="color: #666; margin-top: 30px;">
            Best regards,<br>
            <strong>The Cosmetic Surgery Thailand Team</strong>
          </p>
        </div>
        
        <div style="background: #1e3a5f; color: white; padding: 20px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">Cosmetic Surgery Thailand | Bangkok • Phuket • Koh Samui • Pattaya</p>
          <p style="margin: 10px 0 0; opacity: 0.7;">This is an automated confirmation. Please do not reply to this email.</p>
        </div>
      </div>
    `;

    const patientEmailResult = await sendElasticEmail(
      data.email,
      "We've received your consultation request!",
      patientEmailBody,
      "hilary@cosmedasia.com"
    );

    console.log("Patient confirmation email sent:", patientEmailResult);

    return new Response(
      JSON.stringify({ success: true, adminEmail: adminEmailResult, patientEmail: patientEmailResult }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-consultation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
