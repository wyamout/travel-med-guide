import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
  isPregnant: string;
  planningPregnancy: string;
  diabetes: string;
  bloodDisorders: string;
  heartCondition: string;
  otherConditions: string;
  howDidYouHear: string;
  additionalMessage: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ConsultationRequest = await req.json();

    // Validate required fields
    if (!data.firstName || !data.email || !data.phone) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const procedureDisplay = data.procedure === "Other" ? data.otherProcedure : data.procedure;

    // Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Cosmetic Surgery Thailand <noreply@cosmeticsurgerythailand.com>",
      to: ["hilary@cosmedasia.com"],
      subject: `New Consultation Request: ${procedureDisplay} - ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e3a5f; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Consultation Request</h1>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="color: #1e3a5f; border-bottom: 2px solid #c9a961; padding-bottom: 10px;">Personal Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${data.firstName} ${data.lastName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Date of Birth:</td><td>${data.dateOfBirth || "Not provided"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Nationality:</td><td>${data.nationality || "Not provided"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Gender:</td><td>${data.gender || "Not provided"}</td></tr>
            </table>

            <h2 style="color: #1e3a5f; border-bottom: 2px solid #c9a961; padding-bottom: 10px; margin-top: 30px;">Procedure Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold;">Procedure:</td><td>${procedureDisplay}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Preferred Hospital:</td><td>${data.preferredHospital || "Not specified"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Preferred Date:</td><td>${data.preferredDate || "Not specified"}</td></tr>
            </table>
            
            ${data.expectedResults ? `
            <div style="margin-top: 20px; padding: 15px; background: white; border-left: 4px solid #c9a961;">
              <strong>Expected Results:</strong><br>
              ${data.expectedResults}
            </div>
            ` : ""}

            ${data.height || data.weight ? `
            <h2 style="color: #1e3a5f; border-bottom: 2px solid #c9a961; padding-bottom: 10px; margin-top: 30px;">Body Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold;">Height:</td><td>${data.height || "Not provided"} cm</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Weight:</td><td>${data.weight || "Not provided"} kg</td></tr>
              ${data.currentBraSize ? `<tr><td style="padding: 8px 0; font-weight: bold;">Current Bra Size:</td><td>${data.currentBraSize}</td></tr>` : ""}
              ${data.requestedSize ? `<tr><td style="padding: 8px 0; font-weight: bold;">Requested Size:</td><td>${data.requestedSize}</td></tr>` : ""}
              ${data.desiredPlacement ? `<tr><td style="padding: 8px 0; font-weight: bold;">Desired Placement:</td><td>${data.desiredPlacement}</td></tr>` : ""}
              ${data.desiredImplant ? `<tr><td style="padding: 8px 0; font-weight: bold;">Desired Implant:</td><td>${data.desiredImplant}</td></tr>` : ""}
            </table>
            ` : ""}

            <h2 style="color: #1e3a5f; border-bottom: 2px solid #c9a961; padding-bottom: 10px; margin-top: 30px;">Medical History</h2>
            <table style="width: 100%; border-collapse: collapse;">
              ${data.gender === "female" ? `
              <tr><td style="padding: 8px 0; font-weight: bold;">Currently Pregnant:</td><td>${data.isPregnant || "Not answered"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Planning Pregnancy:</td><td>${data.planningPregnancy || "Not answered"}</td></tr>
              ` : ""}
              <tr><td style="padding: 8px 0; font-weight: bold;">Diabetes:</td><td>${data.diabetes || "Not answered"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Blood Disorders:</td><td>${data.bloodDisorders || "Not answered"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Heart Condition:</td><td>${data.heartCondition || "Not answered"}</td></tr>
            </table>
            
            ${data.otherConditions ? `
            <div style="margin-top: 20px; padding: 15px; background: white; border-left: 4px solid #c9a961;">
              <strong>Other Conditions/Allergies:</strong><br>
              ${data.otherConditions}
            </div>
            ` : ""}

            ${data.howDidYouHear || data.additionalMessage ? `
            <h2 style="color: #1e3a5f; border-bottom: 2px solid #c9a961; padding-bottom: 10px; margin-top: 30px;">Additional Information</h2>
            ${data.howDidYouHear ? `<p><strong>How they heard about us:</strong> ${data.howDidYouHear}</p>` : ""}
            ${data.additionalMessage ? `
            <div style="margin-top: 10px; padding: 15px; background: white; border-left: 4px solid #c9a961;">
              <strong>Additional Message:</strong><br>
              ${data.additionalMessage}
            </div>
            ` : ""}
            ` : ""}
          </div>
          
          <div style="background: #1e3a5f; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the Cosmetic Surgery Thailand website contact form.</p>
          </div>
        </div>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);

    // Send confirmation email to patient
    const patientEmailResponse = await resend.emails.send({
      from: "Cosmetic Surgery Thailand <noreply@cosmeticsurgerythailand.com>",
      to: [data.email],
      subject: "We've received your consultation request!",
      html: `
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
      `,
    });

    console.log("Patient confirmation email sent:", patientEmailResponse);

    return new Response(
      JSON.stringify({ success: true, adminEmail: adminEmailResponse, patientEmail: patientEmailResponse }),
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