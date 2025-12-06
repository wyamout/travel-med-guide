// Surgeon data loader from JSON content

export interface Surgeon {
  name: string;
  fullName: string;
  image: string | null; // null means no image available
  specialties: string;
  languages: string;
  education: string;
  credentials: string;
  training: string;
  experience: string;
  casesPerformed: string;
}

export interface HospitalSurgeons {
  hospitalName: string;
  hospitalSlug: string;
  metaTitle: string;
  metaDescription: string;
  introduction: string;
  surgeons: Surgeon[];
}

// Mapping from surgeon names to local image filenames in /public/images/surgeons/
const surgeonImageMap: Record<string, string> = {
  // Yanhee Hospital
  "Dr. Pitch": "/images/surgeons/dr-pitch.jpg",
  // PAI Clinic
  "Dr. Preecha": "/images/surgeons/dr-preecha.jpg",
  // Phuket Hospital
  "Dr. Sanguan": "/images/surgeons/dr-sanguan.jpg",
  // Naravee Clinic
  "Dr. Ronnachai": "/images/surgeons/dr-ronnachai.png",
};

const hospitalSurgeonsData: Record<string, HospitalSurgeons> = {
  "yanhee-international-hospital": {
    hospitalName: "Yanhee International Hospital",
    hospitalSlug: "yanhee-international-hospital",
    metaTitle: "Yanhee Hospital Surgeons | Cosmetic Surgeons Bangkok 2025",
    metaDescription: "Meet our board-certified cosmetic surgeons at Yanhee Hospital Bangkok. 15+ expert plastic surgeons with thousands of successful procedures. Free consultation.",
    introduction: "Our cosmetic surgeons at Yanhee International Hospital are among the most qualified plastic surgeons in Thailand, each with decades of experience and thousands of successful procedures.",
    surgeons: [
      {
        name: "Dr. Pitch",
        fullName: "Dr. Pitch Paiboonkasemsutthi",
        image: surgeonImageMap["Dr. Pitch"] || null,
        specialties: "Plastic Surgery",
        languages: "Thai, English",
        education: "Doctor of Medicine, Chulalongkorn University, Thailand, 1985",
        credentials: "Board of Plastic & Cosmetic Surgery of Thailand",
        training: "General Surgery, King Chulalongkorn Memorial Hospital, 1991. Plastic Surgery, Siriraj Hospital, 1996",
        experience: "Yanhee International Hospital, 1999 – present",
        casesPerformed: "Rhinoplasty: 7,300+ | Double Eyelid: 6,300+ | Breast Augmentation: 2,400+ | Liposuction: 1,400+"
      },
      {
        name: "Dr. Pramote",
        fullName: "Dr. Pramote Manurangsee",
        image: null,
        specialties: "Plastic Surgery, Microsurgery",
        languages: "Thai, English",
        education: "Doctor of Medicine, Chulalongkorn University, Thailand, 1987",
        credentials: "Society of Plastic Surgeons of Thailand, Society of Hand Surgeons of Thailand",
        training: "Plastic Surgery, Siriraj Hospital, 1993. Craniofacial & Cosmetic Surgery, UCLA Medical Center, USA, 1994",
        experience: "Yanhee International Hospital, 2002 – present",
        casesPerformed: "Rhinoplasty: 1,000+ | Breast Augmentation: 1,000+ | Tummy Tuck: 500+"
      },
      {
        name: "Dr. Sanit",
        fullName: "Dr. Sanit Pongkapanakai",
        image: null,
        specialties: "Plastic Surgery",
        languages: "Thai, English, Mandarin",
        education: "Doctor of Medicine, Virgin Milagrosa University, Philippines, 1988",
        credentials: "Fellow, Reconstructive & Cosmetic Surgery of Thailand",
        training: "General Surgery, Police General Hospital, 1993. Plastic Surgery, Ramathibodi Hospital, 1995",
        experience: "Yanhee International Hospital, 1998 – present",
        casesPerformed: "Rhinoplasty: 10,000+ | Double Eyelid: 6,000+ | Breast Augmentation: 2,000+"
      },
      {
        name: "Dr. Somboon",
        fullName: "Dr. Somboon Waiprib",
        image: null,
        specialties: "Plastic Surgery",
        languages: "Thai, English",
        education: "Doctor of Medicine, Chulalongkorn University, Thailand, 1989",
        credentials: "Society of Plastic & Reconstructive Surgeons of Thailand",
        training: "Plastic & Reconstructive Surgery, Pramongkutklao Army Hospital, 1995",
        experience: "Yanhee International Hospital, 1998 – present",
        casesPerformed: "Rhinoplasty: 5,000+ | Double Eyelid: 2,000+ | Breast Augmentation: 700+"
      },
      {
        name: "Dr. Greechart",
        fullName: "Dr. Greechart Rungsinaporn",
        image: null,
        specialties: "Plastic Surgery",
        languages: "Thai, English",
        education: "Doctor of Medicine, Chulalongkorn University, Thailand, 1985",
        credentials: "Board of Plastic & Cosmetic Surgery of Thailand",
        training: "Plastic Surgery, Chulalongkorn Hospital, 1994. Microsurgery, Singapore General Hospital",
        experience: "Yanhee International Hospital, 1998 – present",
        casesPerformed: "Rhinoplasty: 10,000+ | Double Eyelid: 5,000+ | SRS Male to Female: 500+"
      },
      {
        name: "Dr. Wichian",
        fullName: "Dr. Wichian Sitthicharoenchai",
        image: null,
        specialties: "Plastic Surgery",
        languages: "Thai, English",
        education: "Doctor of Medicine, Khon Kaen University, Thailand, 1986",
        credentials: "Society of Aesthetic Plastic Surgeons of Thailand",
        training: "Plastic & Reconstructive Surgery, Siriraj Hospital, 1998",
        experience: "Yanhee International Hospital, 2000 – present",
        casesPerformed: "Rhinoplasty: 2,500+ | Double Eyelid: 1,500+ | Facelift: 500+"
      }
    ]
  },
  "pai-clinic": {
    hospitalName: "Preecha Aesthetic Institute (PAI)",
    hospitalSlug: "pai-clinic",
    metaTitle: "PAI Clinic Surgeons | Dr. Preecha Bangkok Surgeons 2025",
    metaDescription: "Meet the expert surgeons at PAI Clinic Bangkok. Led by Dr. Preecha, pioneers in gender surgery with 30+ years experience. Free consultation.",
    introduction: "Our cosmetic surgeons at Preecha Aesthetic Institute constitute 6 of the most qualified plastic surgeons in the country and are the most experienced board certified cosmetic surgeons in their specialized fields.",
    surgeons: [
      {
        name: "Dr. Preecha",
        fullName: "Dr. Preecha Tiewtranon",
        image: surgeonImageMap["Dr. Preecha"] || null,
        specialties: "Plastic Surgery, Gender Reassignment Surgery",
        languages: "Thai, English",
        education: "M.D. Chulalongkorn University, Surgery Resident New York Hospital, Roswell Park Memorial Institute USA",
        credentials: "Diplomat American Board of Surgery, Thai Board of Plastic Surgery, Past President Society of Plastic Surgeons of Thailand",
        training: "Cosmetic Surgery, Albany Cosmetic Surgery USA. Victorian Cosmetic Surgery Unit, Melbourne Australia",
        experience: "30+ years since 1978. Over 3,500 SRS and facial feminization surgeries",
        casesPerformed: "SRS Male to Female: 3,600+ | Breast Implants: 3,600+ | All cosmetic procedures: 30,000+"
      },
      {
        name: "Dr. Apichai",
        fullName: "Dr. Apichai Angspatt",
        image: null,
        specialties: "Plastic Surgery",
        languages: "Thai, English",
        education: "Medical Doctor, Faculty of Medicine, Chulalongkorn University, 1987",
        credentials: "Diploma Thai Board of Cosmetic Surgery, Member of Royal College of Surgeons of Thailand",
        training: "King Chulalongkorn Memorial Hospital 1993, Associate Professor of Cosmetic Surgery",
        experience: "Instructor, Division of Plastic and Reconstructive Surgery, Chulalongkorn University",
        casesPerformed: "Extensive experience in facial cosmetic surgery and body contouring"
      },
      {
        name: "Dr. Burin",
        fullName: "Dr. Burin Wangjiraniran",
        image: null,
        specialties: "Plastic Surgery, Burns",
        languages: "Thai, English",
        education: "MD Faculty of Medicine Chulalongkorn University 1994",
        credentials: "Board of General Surgery, Board of Plastic Surgery Royal College of Surgeon Thailand",
        training: "General Surgery Resident & Cosmetic Surgery Resident Chulalongkorn Hospital",
        experience: "Head of Burns Center Nopparatrajathanee Hospital, Lecturer Thammasart University",
        casesPerformed: "Specializes in complex reconstructive and cosmetic procedures"
      },
      {
        name: "Dr. Prayuth",
        fullName: "Dr. Prayuth Chokrungvaranont",
        image: null,
        specialties: "Plastic Surgery, Sex Reassignment Surgery",
        languages: "Thai, English",
        education: "Chulalongkorn University Medical School 1982",
        credentials: "Board of Cosmetic Surgery 1988, Associate Professor Chulalongkorn University",
        training: "Research Fellow Southern Illinois University USA, Visiting Doctor Chang Gung Memorial Hospital Taiwan",
        experience: "Faculty Member Division of Plastic Surgery Chulalongkorn University since 1993",
        casesPerformed: "Pioneer in SRS techniques, published researcher in transgender surgery"
      },
      {
        name: "Dr. Prapat",
        fullName: "Dr. Prapat Visalyaputra",
        image: null,
        specialties: "Plastic Surgery, Craniofacial Surgery",
        languages: "Thai, English",
        education: "Doctor of Medicine, Chiangmai University 1973-1979",
        credentials: "Diplomat Thai Board of Cosmetic Surgery 1985, Royal College of Surgeon Thailand",
        training: "Visiting doctor in craniofacial surgery Royal Adelaide Hospital Australia",
        experience: "Director of Nongchok Hospital, Head of Emergency Department Central Hospital",
        casesPerformed: "35+ years experience in plastic and reconstructive surgery"
      }
    ]
  },
  "phuket-hospital": {
    hospitalName: "Phuket International Hospital (PIAC)",
    hospitalSlug: "phuket-hospital",
    metaTitle: "Phuket Hospital Surgeons | PIAC Cosmetic Surgeons 2025",
    metaDescription: "Meet the expert plastic surgeons at Phuket International Aesthetic Center. Board-certified surgeons with international training. Free consultation.",
    introduction: "Our cosmetic surgeons at Phuket International Aesthetic Center (PIAC) are board-certified plastic surgeons with extensive international training and experience.",
    surgeons: [
      {
        name: "Dr. Sanguan",
        fullName: "Dr. Sanguan Kunaporn",
        image: surgeonImageMap["Dr. Sanguan"] || null,
        specialties: "Plastic Surgery, Gender Reassignment Surgery, Breast Surgery",
        languages: "Thai, English",
        education: "Chulalongkorn University Medical School 1978-1984",
        credentials: "Thai Certified Board of Plastic and Reconstructive Surgery, ISAPS Member",
        training: "Fellowship Tampa Craniofacial Center Florida USA 1991",
        experience: "Founding Plastic Surgeon PIAC, Full Time Plastic Surgeon since 1991",
        casesPerformed: "Specialist in Transsexual Surgery and Breast Surgery"
      },
      {
        name: "Dr. Veerawat",
        fullName: "Dr. Veerawat Tirananmongkol",
        image: null,
        specialties: "Facial Surgery, Breast Surgery, Body Contouring",
        languages: "Thai, English",
        education: "Chulalongkorn University Medical School 1988-1994 (2nd Class Honors)",
        credentials: "Board of General Surgery, Board of Plastic Surgery",
        training: "Rhinoplasty training San Francisco USA, HBIDA conference Bologna Italy",
        experience: "Head of Plastic Unit Vachira Hospital, Founding Surgeon PIAC 2006",
        casesPerformed: "Specialist in Facial Surgery and Body Contouring"
      },
      {
        name: "Dr. Songyos",
        fullName: "Dr. Songyos Chantajitr",
        image: null,
        specialties: "Breast Surgery, Liposuction, Rhinoplasty, Face Lift",
        languages: "Thai, English",
        education: "Medical School, Srinakarinwirot University 1993-1999",
        credentials: "Board of General Surgery, Board of Plastic Surgery, ISAPS Member",
        training: "Seoul Rhinoplasty Forum Korea, Advance Tip graft Rhinoplasty Korea",
        experience: "Director Banphaeo Cosmetic Center, PIAC since 2012",
        casesPerformed: "Specialist in Rhinoplasty and Breast Surgery"
      },
      {
        name: "Dr. Thanakom",
        fullName: "Dr. Thanakom Laisakul",
        image: null,
        specialties: "Breast Surgery, Body Contouring, Face Lift",
        languages: "Thai, English",
        education: "Medical School, Ramathibodi Hospital, Mahidol University 1988-1994",
        credentials: "Board of General Surgery, Board of Plastic Surgery, ISAPS Member",
        training: "49th Art of Rhinoplasty San Francisco, 1 month visit Dr. Guyuron Cleveland USA",
        experience: "Head of Plastic Surgery Unit Trang Hospital, PIAC since 2012",
        casesPerformed: "Expert in Face Lift and Body Contouring procedures"
      },
      {
        name: "Dr. Rushapol",
        fullName: "Dr. Rushapol Sdawat",
        image: null,
        specialties: "Plastic Surgery, Laser Surgery",
        languages: "Thai, English",
        education: "Siriraj Medical School, Mahidol University 1985-1992",
        credentials: "Board of General Surgery, Board of Plastic Surgery",
        training: "Visiting Scholar Chang Gung Memorial Hospital Taiwan, Laser Surgery Ramathibodi",
        experience: "University Instructor Mahidol & Naresuan University, PIAC since 2008",
        casesPerformed: "Specializes in reconstructive and aesthetic procedures"
      }
    ]
  },
  "naravee-clinic": {
    hospitalName: "Naravee Clinic",
    hospitalSlug: "naravee-clinic",
    metaTitle: "Naravee Clinic Surgeons | Bangkok Cosmetic Surgeons 2025",
    metaDescription: "Meet the expert cosmetic surgeons at Naravee Clinic Bangkok. Personalized care with board-certified plastic surgeons. Free consultation.",
    introduction: "Our surgeons at Naravee Clinic provide personalized aesthetic care with decades of combined experience in cosmetic surgery.",
    surgeons: [
      {
        name: "Dr. Ronnachai",
        fullName: "Dr. Ronnachai Komolvanich",
        image: surgeonImageMap["Dr. Ronnachai"] || null,
        specialties: "Vaser Liposuction, Body Contouring, Facial Surgery",
        languages: "Thai, English",
        education: "Ramathibodi Hospital, Mahidol University",
        credentials: "Diplomate Thai Board of Surgery, Diplomate Thai Board of Plastic Surgery",
        training: "Fellowship in Plastic Surgery USA, UK, Singapore, Thailand",
        experience: "Founder of Naravee Clinic, Pioneer of Vaser in Thailand",
        casesPerformed: "Thousands of successful Vaser and cosmetic procedures"
      }
    ]
  },
  "kamol-hospital": {
    hospitalName: "Dr. Kamol Cosmetic Hospital",
    hospitalSlug: "kamol-hospital",
    metaTitle: "Kamol Hospital Surgeons | MTF FTM Surgeons Bangkok 2025",
    metaDescription: "Meet Dr. Kamol and the expert surgeons at Kamol Cosmetic Hospital. Pioneers in gender surgery and facial feminization. Free consultation.",
    introduction: "Dr. Kamol Cosmetic Hospital is led by Dr. Kamol Pansritum, a pioneer in gender confirmation surgery with thousands of successful procedures.",
    surgeons: [
      {
        name: "Dr. Kamol",
        fullName: "Dr. Kamol Pansritum",
        image: null,
        specialties: "Gender Reassignment Surgery, Facial Feminization, Plastic Surgery",
        languages: "Thai, English",
        education: "Board Certified Plastic Surgeon",
        credentials: "JCI Accredited, International recognition in gender surgery",
        training: "Pioneer in MTF and FTM surgical techniques",
        experience: "Founder of Kamol Cosmetic Hospital, 20+ years experience",
        casesPerformed: "Thousands of successful gender confirmation surgeries"
      }
    ]
  },
  "bangpakok-hospital": {
    hospitalName: "Bangpakok 9 International Hospital",
    hospitalSlug: "bangpakok-hospital",
    metaTitle: "Bangpakok Hospital Surgeons | Bangkok Cosmetic Surgeons 2025",
    metaDescription: "Meet the expert cosmetic surgeons at Bangpakok 9 International Hospital. JCI accredited with board-certified surgeons. Free consultation.",
    introduction: "Bangpakok 9 International Hospital features experienced plastic surgeons specializing in facial, breast, and body procedures.",
    surgeons: [
      {
        name: "Bangpakok Surgeons",
        fullName: "Board Certified Plastic Surgeons",
        image: null,
        specialties: "Facial Surgery, Breast Surgery, Body Contouring",
        languages: "Thai, English",
        education: "Board Certified Plastic Surgeons",
        credentials: "JCI Accredited Hospital",
        training: "Comprehensive training in aesthetic surgery",
        experience: "Full-service international hospital",
        casesPerformed: "Thousands of successful procedures across all specialties"
      }
    ]
  },
  "bangkok-hospital-samui": {
    hospitalName: "Bangkok Hospital Samui",
    hospitalSlug: "bangkok-hospital-samui",
    metaTitle: "Bangkok Hospital Samui Surgeons | Koh Samui Cosmetic Surgeons 2025",
    metaDescription: "Meet the cosmetic surgeons at Bangkok Hospital Samui. JCI accredited care on the island paradise. Free consultation.",
    introduction: "Bangkok Hospital Samui features qualified plastic surgeons providing world-class cosmetic surgery on the beautiful island of Koh Samui.",
    surgeons: [
      {
        name: "Samui Surgeons",
        fullName: "Board Certified Plastic Surgeons",
        image: null,
        specialties: "Facial Surgery, Breast Surgery, Body Contouring",
        languages: "Thai, English",
        education: "Board Certified Plastic Surgeons",
        credentials: "JCI Accredited Hospital",
        training: "Comprehensive training in aesthetic surgery",
        experience: "Part of Bangkok Hospital Group",
        casesPerformed: "Experienced in all major cosmetic procedures"
      }
    ]
  },
  "samui-clinic": {
    hospitalName: "Samui Clinic (Bandon Hospital)",
    hospitalSlug: "samui-clinic",
    metaTitle: "Samui Clinic Surgeons | Koh Samui Cosmetic Surgeons 2025",
    metaDescription: "Meet the cosmetic surgeons at Samui Clinic. Boutique cosmetic surgery on Koh Samui. Free consultation.",
    introduction: "Samui Clinic at Bandon Hospital provides personalized cosmetic surgery with experienced surgeons on Koh Samui.",
    surgeons: [
      {
        name: "Samui Clinic Surgeons",
        fullName: "Board Certified Plastic Surgeons",
        image: null,
        specialties: "Facial Surgery, Breast Surgery, Body Contouring",
        languages: "Thai, English",
        education: "Board Certified Plastic Surgeons",
        credentials: "Experienced Cosmetic Surgery Team",
        training: "Specialized training in aesthetic procedures",
        experience: "Boutique clinic with personalized care",
        casesPerformed: "Experienced in cosmetic surgery procedures"
      }
    ]
  },
  "bangkok-hospital-pattaya": {
    hospitalName: "Bangkok Hospital Pattaya",
    hospitalSlug: "bangkok-hospital-pattaya",
    metaTitle: "Bangkok Hospital Pattaya Surgeons | Pattaya Cosmetic Surgeons 2025",
    metaDescription: "Meet the cosmetic surgeons at Bangkok Hospital Pattaya. JCI accredited care in Pattaya. Free consultation.",
    introduction: "Bangkok Hospital Pattaya features board-certified plastic surgeons providing international-standard cosmetic surgery.",
    surgeons: [
      {
        name: "Pattaya Surgeons",
        fullName: "Board Certified Plastic Surgeons",
        image: null,
        specialties: "Facial Surgery, Breast Surgery, Body Contouring",
        languages: "Thai, English",
        education: "Board Certified Plastic Surgeons",
        credentials: "JCI Accredited Hospital",
        training: "Comprehensive training in aesthetic surgery",
        experience: "Part of Bangkok Hospital Group",
        casesPerformed: "Experienced in all major cosmetic procedures"
      }
    ]
  }
};

export const getHospitalSurgeons = (slug: string): HospitalSurgeons | undefined => {
  return hospitalSurgeonsData[slug];
};

export const getAllHospitalSurgeons = (): Record<string, HospitalSurgeons> => {
  return hospitalSurgeonsData;
};

export default hospitalSurgeonsData;
