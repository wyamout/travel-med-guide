import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Shield, Check } from "lucide-react";
import { allProcedures } from "@/data/procedures";
import { locations } from "@/data/locations";

const ContactPage = () => {
  return (
    <PageLayout
      title="Free Consultation | Contact Us"
      description="Get a free cosmetic surgery consultation in Thailand. Expert surgeon feedback, no obligation. Contact us today for personalized advice."
      keywords="free consultation cosmetic surgery thailand, contact cosmetic surgery bangkok"
      canonicalUrl="https://cosmeticsurgerythailand.com/contact"
    >
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              <h1 className="text-3xl font-bold mb-2">
                Get Your Free Consultation
              </h1>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will contact you within 24
                hours with expert surgeon feedback.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (with country code)</Label>
                  <Input id="phone" placeholder="+1 234 567 8900" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="procedure">Procedure of Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a procedure" />
                    </SelectTrigger>
                    <SelectContent>
                      {allProcedures.map((procedure) => (
                        <SelectItem key={procedure.id} value={procedure.id}>
                          {procedure.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Preferred Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.id} value={location.id}>
                          {location.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals and any questions you have..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full cta-button" size="lg">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Your information is secure and confidential. We never share
                  your data.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        Thailand: +66 2 653 3880
                      </p>
                      <p className="text-muted-foreground">
                        Australia: +02 800 500 56
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        inquire@cosmeticsurgerythailand.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-muted-foreground">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Locations</h3>
                      <p className="text-muted-foreground">
                        Bangkok, Phuket, Koh Samui, Pattaya, Hua Hin
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-secondary/5 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4">
                  What Happens Next?
                </h3>
                <ul className="space-y-3">
                  {[
                    "We review your inquiry within 24 hours",
                    "Expert surgeon provides personalized feedback",
                    "We help you choose the best hospital and surgeon",
                    "We assist with travel planning and accommodation",
                    "You only pay the hospital directly - our service is free",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
