import { Hospital, Location } from "@/types/content";

export const bangkokHospitals: Hospital[] = [
  {
    id: "yanhee",
    name: "Yanhee International Hospital",
    slug: "yanhee-international-hospital",
    location: "bangkok",
    shortDescription: "World-renowned hospital with comprehensive cosmetic services",
    jsonFile: "Yanhee International Hospital_a597167f.json",
    accreditations: ["JCI Accredited", "ISO Certified"],
  },
  {
    id: "pai",
    name: "Preecha Aesthetic Institute (PAI)",
    slug: "pai-clinic",
    location: "bangkok",
    shortDescription: "Pioneering clinic specializing in gender surgery",
    jsonFile: "Preecha's Aesthetic Institute - Cosmetic Surgery Clinic in Thailand_3ee62f76.json",
    accreditations: ["ISO Certified"],
  },
  {
    id: "naravee",
    name: "Naravee Clinic",
    slug: "naravee-clinic",
    location: "bangkok",
    shortDescription: "Boutique clinic with personalized aesthetic care",
    jsonFile: "Naravee Clinic Thailand_872f5fd5.json",
  },
  {
    id: "kamol",
    name: "Dr. Kamol Hospital",
    slug: "kamol-hospital",
    location: "bangkok",
    shortDescription: "Leading MTF and FTM surgery center",
    jsonFile: "Kamol Cosmetic Hospital_d3968409.json",
    accreditations: ["JCI Accredited"],
  },
  {
    id: "bangpakok",
    name: "Bangpakok 9 International Hospital",
    slug: "bangpakok-hospital",
    location: "bangkok",
    shortDescription: "Full-service international hospital",
    jsonFile: "Bangpakok 9 International Hospital_9f49ec4a.json",
    accreditations: ["JCI Accredited"],
  },
];

export const phuketHospitals: Hospital[] = [
  {
    id: "phuket-international",
    name: "Phuket International Hospital (PIAC)",
    slug: "phuket-hospital",
    location: "phuket",
    shortDescription: "Premier cosmetic surgery in tropical Phuket",
    jsonFile: "Phuket Hospital_30d9608a.json",
    accreditations: ["JCI Accredited"],
  },
];

export const samuiHospitals: Hospital[] = [
  {
    id: "bangkok-samui",
    name: "Bangkok Hospital Samui",
    slug: "bangkok-hospital-samui",
    location: "samui",
    shortDescription: "World-class care on the island paradise",
    jsonFile: "Bangkok Hospital Samui_5589cfc7.json",
    accreditations: ["JCI Accredited"],
  },
  {
    id: "samui-clinic",
    name: "Samui Clinic (Bandon Hospital)",
    slug: "samui-clinic",
    location: "samui",
    shortDescription: "Boutique cosmetic surgery on Koh Samui",
    jsonFile: "Samui Clinic - Samui Hospital - Bandon Hospital_a7d363dc.json",
  },
];

export const pattayaHospitals: Hospital[] = [
  {
    id: "bangkok-pattaya",
    name: "Bangkok Hospital Pattaya",
    slug: "bangkok-hospital-pattaya",
    location: "pattaya",
    shortDescription: "International-standard care in Pattaya",
    jsonFile: "Bangkok Hospital Pattaya - Pattaya International Hospital_a7a6c3c9.json",
    accreditations: ["JCI Accredited"],
  },
];

export const huaHinHospitals: Hospital[] = [
  {
    id: "san-paulo",
    name: "San Paulo Hospital",
    slug: "san-paulo-hospital",
    location: "hua-hin",
    shortDescription: "Quality care in the royal beach resort town",
    jsonFile: "San Paulo Hospital Hua Hin_9c1954a1.json",
  },
];

export const allHospitals: Hospital[] = [
  ...bangkokHospitals,
  ...phuketHospitals,
  ...samuiHospitals,
  ...pattayaHospitals,
  ...huaHinHospitals,
];

export const locations: Location[] = [
  {
    id: "bangkok",
    name: "Bangkok",
    slug: "bangkok",
    hospitals: bangkokHospitals,
  },
  {
    id: "phuket",
    name: "Phuket",
    slug: "phuket",
    hospitals: phuketHospitals,
  },
  {
    id: "samui",
    name: "Koh Samui",
    slug: "samui",
    hospitals: samuiHospitals,
  },
  {
    id: "pattaya",
    name: "Pattaya",
    slug: "pattaya",
    hospitals: pattayaHospitals,
  },
  {
    id: "hua-hin",
    name: "Hua Hin",
    slug: "hua-hin",
    hospitals: huaHinHospitals,
  },
];

export const getHospitalBySlug = (slug: string): Hospital | undefined => {
  return allHospitals.find((h) => h.slug === slug);
};

export const getHospitalsByLocation = (location: Hospital["location"]): Hospital[] => {
  return allHospitals.filter((h) => h.location === location);
};

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find((l) => l.slug === slug);
};
