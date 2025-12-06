// Route configuration for all pages

export interface RouteConfig {
  path: string;
  title: string;
  component: string;
}

// Face Surgery Routes
export const faceSurgeryRoutes: RouteConfig[] = [
  { path: "/face/alarplasty-thailand", title: "Alarplasty Thailand", component: "ProcedurePage" },
  { path: "/face/cheek-reduction-thailand", title: "Cheek Reduction Thailand", component: "ProcedurePage" },
  { path: "/face/chin-augmentation-thailand", title: "Chin Augmentation Thailand", component: "ProcedurePage" },
  { path: "/face/chin-shaving-thailand", title: "Chin Shaving Thailand", component: "ProcedurePage" },
  { path: "/face/forehead-lift-thailand", title: "Forehead Lift Thailand", component: "ProcedurePage" },
  { path: "/face/full-facelift-thailand", title: "Full Face Lift Thailand", component: "ProcedurePage" },
  { path: "/face/mini-facelift-thailand", title: "Mini Facelift Thailand", component: "ProcedurePage" },
  { path: "/face/nose-implant-thailand", title: "Nose Implant Thailand", component: "ProcedurePage" },
  { path: "/face/nose-surgery-thailand", title: "Nose Surgery Thailand", component: "ProcedurePage" },
  { path: "/face/tip-rhinoplasty-thailand", title: "Tip Rhinoplasty Thailand", component: "ProcedurePage" },
  { path: "/face/upper-eyelid-thailand", title: "Upper Eyelid Surgery Thailand", component: "ProcedurePage" },
  { path: "/face/lower-eyelid-thailand", title: "Lower Eyelid Surgery Thailand", component: "ProcedurePage" },
];

// Breast Surgery Routes
export const breastSurgeryRoutes: RouteConfig[] = [
  { path: "/breast/breast-implants-thailand", title: "Breast Implants Thailand", component: "ProcedurePage" },
  { path: "/breast/breast-lift-thailand", title: "Breast Lift Thailand", component: "ProcedurePage" },
  { path: "/breast/breast-reduction-thailand", title: "Breast Reduction Thailand", component: "ProcedurePage" },
];

// Body Surgery Routes
export const bodySurgeryRoutes: RouteConfig[] = [
  { path: "/body/liposuction-thailand", title: "Liposuction Thailand", component: "ProcedurePage" },
  { path: "/body/lipoplasty-thailand", title: "Lipoplasty Thailand", component: "ProcedurePage" },
  { path: "/body/tummy-tuck-thailand", title: "Tummy Tuck Thailand", component: "ProcedurePage" },
  { path: "/body/buttock-lift-thailand", title: "Buttock Lift Thailand", component: "ProcedurePage" },
  { path: "/body/buttocks-implant-thailand", title: "Buttocks Implant Thailand", component: "ProcedurePage" },
  { path: "/body/hair-transplant-thailand", title: "Hair Transplant Thailand", component: "ProcedurePage" },
];

// Other Surgery Routes
export const otherSurgeryRoutes: RouteConfig[] = [
  { path: "/srs/mtf-thailand", title: "Male to Female (MTF) Thailand", component: "ProcedurePage" },
  { path: "/srs/ftm-thailand", title: "Female to Male (FTM) Thailand", component: "ProcedurePage" },
  { path: "/srs/srs-thailand", title: "Sex Reassignment Surgery Thailand", component: "ProcedurePage" },
];

// Hospital Routes
export const hospitalRoutes: RouteConfig[] = [
  { path: "/hospitals", title: "Hospitals in Thailand", component: "HospitalsListPage" },
  { path: "/bangkok", title: "Cosmetic Surgery Bangkok", component: "LocationPage" },
  { path: "/bangkok/yanhee-international-hospital", title: "Yanhee International Hospital", component: "HospitalPage" },
  { path: "/bangkok/yanhee-international-hospital/surgeons", title: "Yanhee Hospital Surgeons", component: "HospitalSurgeonsPage" },
  { path: "/bangkok/pai-clinic", title: "Preecha Aesthetic Institute", component: "HospitalPage" },
  { path: "/bangkok/pai-clinic/surgeons", title: "PAI Clinic Surgeons", component: "HospitalSurgeonsPage" },
  { path: "/bangkok/naravee-clinic", title: "Naravee Clinic Thailand", component: "HospitalPage" },
  { path: "/bangkok/naravee-clinic/surgeons", title: "Naravee Clinic Surgeons", component: "HospitalSurgeonsPage" },
  { path: "/bangkok/kamol-hospital", title: "Dr. Kamol Hospital", component: "HospitalPage" },
  { path: "/bangkok/kamol-hospital/surgeons", title: "Kamol Hospital Surgeons", component: "HospitalSurgeonsPage" },
  { path: "/bangkok/bangpakok-hospital", title: "Bangpakok 9 International Hospital", component: "HospitalPage" },
  { path: "/bangkok/bangpakok-hospital/surgeons", title: "Bangpakok Hospital Surgeons", component: "HospitalSurgeonsPage" },
  { path: "/phuket", title: "Cosmetic Surgery Phuket", component: "LocationPage" },
  { path: "/phuket/phuket-hospital", title: "Phuket International Hospital", component: "HospitalPage" },
  { path: "/phuket/phuket-hospital/surgeons", title: "Phuket Hospital Surgeons", component: "HospitalSurgeonsPage" },
  { path: "/samui", title: "Cosmetic Surgery Koh Samui", component: "LocationPage" },
  { path: "/samui/bangkok-hospital-samui", title: "Bangkok Hospital Samui", component: "HospitalPage" },
  { path: "/samui/bangkok-hospital-samui/surgeons", title: "Bangkok Hospital Samui Surgeons", component: "HospitalSurgeonsPage" },
  { path: "/pattaya", title: "Cosmetic Surgery Pattaya", component: "LocationPage" },
  { path: "/pattaya/bangkok-hospital-pattaya", title: "Bangkok Hospital Pattaya", component: "HospitalPage" },
  { path: "/pattaya/bangkok-hospital-pattaya/surgeons", title: "Bangkok Hospital Pattaya Surgeons", component: "HospitalSurgeonsPage" },
];

// Main Page Routes
export const mainPageRoutes: RouteConfig[] = [
  { path: "/procedures", title: "Medical Procedures", component: "ProceduresListPage" },
  { path: "/face", title: "Face Surgery Thailand", component: "CategoryPage" },
  { path: "/breast", title: "Breast Surgery Thailand", component: "CategoryPage" },
  { path: "/body", title: "Body Surgery Thailand", component: "CategoryPage" },
  { path: "/srs", title: "Gender Surgery Thailand", component: "CategoryPage" },
  { path: "/surgeons", title: "Cosmetic Surgeons Thailand", component: "SurgeonsPage" },
  { path: "/prices", title: "Cosmetic Surgery Prices Thailand", component: "PricingPage" },
  { path: "/about", title: "About Us - Testimonials", component: "AboutPage" },
  { path: "/contact", title: "Contact - Free Consultation", component: "ContactPage" },
  { path: "/faq", title: "Frequently Asked Questions", component: "FAQPage" },
];

// All routes combined
export const allRoutes: RouteConfig[] = [
  ...faceSurgeryRoutes,
  ...breastSurgeryRoutes,
  ...bodySurgeryRoutes,
  ...otherSurgeryRoutes,
  ...hospitalRoutes,
  ...mainPageRoutes,
];
