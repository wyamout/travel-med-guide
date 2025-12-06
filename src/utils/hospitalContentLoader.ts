// Hospital content from JSON files
interface HospitalContent {
  metaTitle: string;
  metaDescription: string;
  h1Title: string;
  paragraphs: string[];
  image?: string;
}

const hospitalContent: Record<string, HospitalContent> = {
  "yanhee-international-hospital": {
    metaTitle: "Yanhee Hospital Bangkok | Cosmetic Surgery Thailand 2025",
    metaDescription: "Yanhee International Hospital Bangkok - JCI accredited cosmetic surgery. Expert surgeons, comprehensive care. Free consultation. Best prices Thailand.",
    h1Title: "Yanhee International Hospital",
    paragraphs: [
      "Yanhee Hospital is a world-renowned hospital with comprehensive cosmetic services and is one of the largest private hospitals in Thailand.",
      "With over 400 beds and a dedicated team of board-certified plastic surgeons, Yanhee Hospital has earned its reputation as a leading destination for medical tourism.",
      "The hospital's plastic surgery department offers a full range of procedures including rhinoplasty, breast augmentation, liposuction, and facial rejuvenation.",
      "All cosmetic surgeons at Yanhee are highly experienced and specialize in meeting international patient expectations with personalized care."
    ],
    image: "https://cosmetic.gumlet.io/wp-content/uploads/2015/05/Yanhee-Hospital.jpg"
  },
  "pai-clinic": {
    metaTitle: "PAI Clinic Bangkok | Dr. Preecha Gender Surgery Thailand 2025",
    metaDescription: "Preecha Aesthetic Institute (PAI) Bangkok - pioneering gender surgery clinic. Expert MTF/FTM procedures. ISO certified. Free consultation available.",
    h1Title: "Preecha Aesthetic Institute (PAI)",
    paragraphs: [
      "Preecha Aesthetic Institute, commonly known as PAI, is a pioneering clinic specializing in gender confirmation surgery and aesthetic procedures.",
      "Founded by Dr. Preecha Tiewtranon, a world-renowned surgeon in the field of gender reassignment surgery, PAI has helped thousands of patients from around the globe.",
      "The clinic offers comprehensive MTF and FTM surgical services, as well as facial feminization surgery and other aesthetic procedures.",
      "PAI's experienced team provides compassionate, personalized care in a discreet and comfortable environment."
    ],
    image: "https://cosmetic.gumlet.io/wp-content/uploads/2015/05/PAI-Clinic.jpg"
  },
  "naravee-clinic": {
    metaTitle: "Naravee Clinic Bangkok | Boutique Cosmetic Surgery Thailand 2025",
    metaDescription: "Naravee Clinic Bangkok - boutique cosmetic surgery with personalized care. Expert surgeons, intimate setting. Free consultation. Premium results.",
    h1Title: "Naravee Clinic Bangkok",
    paragraphs: [
      "Naravee Clinic is a boutique aesthetic center in Bangkok offering personalized cosmetic surgery and non-surgical treatments.",
      "The clinic provides an intimate setting where patients receive individualized attention from experienced plastic surgeons.",
      "Specializing in facial procedures, breast surgery, and body contouring, Naravee combines Thai hospitality with world-class medical care.",
      "The clinic's modern facilities and dedicated patient coordinators ensure a comfortable experience from consultation to recovery."
    ],
    image: "https://cosmetic.gumlet.io/wp-content/uploads/2015/05/Naravee-Clinic.jpg"
  },
  "kamol-hospital": {
    metaTitle: "Kamol Hospital Bangkok | MTF FTM Surgery Thailand 2025",
    metaDescription: "Dr. Kamol Cosmetic Hospital Bangkok - leading gender surgery center. JCI accredited, expert MTF/FTM procedures. Free consultation available.",
    h1Title: "Dr. Kamol Cosmetic Hospital",
    paragraphs: [
      "Dr. Kamol Cosmetic Hospital is a leading center for gender confirmation surgery and facial feminization in Bangkok.",
      "Led by Dr. Kamol Pansritum, a pioneer in the field, the hospital has performed thousands of successful gender surgeries.",
      "The JCI-accredited facility offers comprehensive MTF and FTM surgical packages with dedicated international patient services.",
      "Patients receive personalized care from consultation through recovery, with multilingual staff available 24/7."
    ],
    image: "https://cosmetic.gumlet.io/wp-content/uploads/2015/05/Kamol-Hospital.jpg"
  },
  "bangpakok-hospital": {
    metaTitle: "Bangpakok 9 Hospital Bangkok | Cosmetic Surgery Thailand 2025",
    metaDescription: "Bangpakok 9 International Hospital Bangkok - JCI accredited full-service hospital. Expert cosmetic surgeons. Free consultation. Affordable prices.",
    h1Title: "Bangpakok 9 International Hospital",
    paragraphs: [
      "Bangpakok 9 International Hospital is a JCI-accredited full-service hospital offering comprehensive cosmetic surgery services.",
      "The hospital's plastic surgery department features experienced surgeons specializing in facial, breast, and body procedures.",
      "With modern facilities and international patient coordinators, Bangpakok provides seamless care for medical tourists.",
      "The hospital offers competitive pricing and comprehensive packages including accommodation and airport transfers."
    ],
    image: "https://cosmetic.gumlet.io/wp-content/uploads/2015/05/Bangpakok-Hospital.jpg"
  },
  "phuket-hospital": {
    metaTitle: "Phuket Hospital PIAC | Cosmetic Surgery Phuket Thailand 2025",
    metaDescription: "Phuket International Hospital (PIAC) - premier cosmetic surgery in tropical Phuket. JCI accredited, expert surgeons. Free consultation available.",
    h1Title: "Phuket International Hospital (PIAC)",
    paragraphs: [
      "Phuket Hospital is one of the first accredited hospitals in the region and one of the largest hospitals in the tropical island of Phuket.",
      "Phuket Hospital offers you a range of medical and aesthetic services for in-patient and out-patient care.",
      "The plastic surgery center in Phuket's International Hospital, also known as PIAC, is considered one of the most advanced and state-of-the-art plastic surgery centers in Thailand.",
      "It is headed by some of the finest cosmetic surgeons in Thailand who are highly experienced and skilled. All plastic surgeons at Phuket International Hospital are board certified and specialized to meet your expectations."
    ],
    image: "https://cosmetic.gumlet.io/wp-content/uploads/2015/05/Phuket-Hospital.jpg"
  },
  "bangkok-hospital-samui": {
    metaTitle: "Bangkok Hospital Samui | Cosmetic Surgery Koh Samui 2025",
    metaDescription: "Bangkok Hospital Samui - JCI accredited world-class care on the island paradise. Expert cosmetic surgeons. Free consultation. Recovery in paradise.",
    h1Title: "Bangkok Hospital Samui",
    paragraphs: [
      "Bangkok Hospital Samui is part of the prestigious Bangkok Hospital Group, offering world-class medical care on the beautiful island of Koh Samui.",
      "The hospital's cosmetic surgery department provides comprehensive aesthetic services with experienced plastic surgeons.",
      "Patients can combine their surgical journey with recovery in one of Thailand's most stunning tropical destinations.",
      "The JCI-accredited facility features modern equipment and international patient services for seamless care."
    ],
    image: "https://cosmetic.gumlet.io/wp-content/uploads/2015/05/Bangkok-Hospital-Samui.jpg"
  },
  "bangkok-hospital-pattaya": {
    metaTitle: "Bangkok Hospital Pattaya | Cosmetic Surgery Pattaya Thailand 2025",
    metaDescription: "Bangkok Hospital Pattaya - JCI accredited international-standard care. Expert cosmetic surgeons. Free consultation. Beach recovery destination.",
    h1Title: "Bangkok Hospital Pattaya",
    paragraphs: [
      "Bangkok Hospital Pattaya is a JCI-accredited international hospital offering comprehensive cosmetic surgery services.",
      "Part of the Bangkok Hospital Group, the facility features state-of-the-art equipment and board-certified plastic surgeons.",
      "The hospital serves as a premier destination for medical tourists seeking quality care in a convenient beach location.",
      "International patient services include multilingual staff, airport transfers, and accommodation arrangements."
    ],
    image: "https://cosmetic.gumlet.io/wp-content/uploads/2015/05/Bangkok-Hospital-Pattaya.jpg"
  },
  "san-paulo-hospital": {
    metaTitle: "San Paulo Hospital Hua Hin | Cosmetic Surgery Thailand 2025",
    metaDescription: "San Paulo Hospital Hua Hin - quality cosmetic surgery in the royal beach resort town. Expert surgeons. Free consultation. Peaceful recovery.",
    h1Title: "San Paulo Hospital Hua Hin",
    paragraphs: [
      "San Paulo Hospital is located in Hua Hin, Thailand's beloved royal beach resort town known for its peaceful atmosphere.",
      "The hospital offers quality cosmetic surgery services with experienced surgeons at competitive prices.",
      "Patients enjoy the relaxed coastal environment perfect for post-operative recovery.",
      "The hospital provides personalized care with English-speaking staff to assist international patients."
    ],
    image: "https://cosmetic.gumlet.io/wp-content/uploads/2015/05/San-Paulo-Hospital.jpg"
  }
};

export const getHospitalContent = (slug: string): HospitalContent | undefined => {
  return hospitalContent[slug];
};

export default hospitalContent;
