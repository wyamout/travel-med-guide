const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const BOT_USER_AGENTS = [
  "googlebot", "bingbot", "slurp", "duckduckbot", "baiduspider",
  "yandexbot", "facebookexternalhit", "twitterbot", "linkedinbot",
  "whatsapp", "telegrambot", "applebot", "semrushbot", "ahrefsbot",
  "mj12bot", "ia_archiver", "sogou", "petalbot",
];

const SITE_URL = "https://cosmeticsurgerythailand.com";
const SITE_NAME = "Cosmetic Surgery Thailand";
const PHONE = "+66 92 559 0848";
const YEAR = new Date().getFullYear();

interface PageData {
  title: string;
  description: string;
  h1: string;
  body: string;
  category?: string;
  hospitalNights?: string;
  duration?: string;
  stayDays?: string;
}

const procedures: Record<string, PageData> = {
  "face/alarplasty-thailand": {
    title: `Alarplasty Thailand | Nostril Reduction Bangkok ${YEAR}`,
    description: "Alarplasty in Thailand from $800. Board-certified surgeons at JCI-accredited hospitals in Bangkok & Phuket. Narrow nostrils naturally. Free consultation.",
    h1: "Alarplasty Surgery in Thailand",
    body: "Alarplasty, also known as alar base reduction or nostril reduction surgery, is a precise cosmetic procedure that narrows the width of the nostrils and reduces the flare of the nasal base. Thailand has become one of the most sought-after destinations for this procedure, combining board-certified plastic surgeons with internationally accredited hospital facilities at a fraction of Western prices. The procedure is performed by making small, carefully placed incisions at the base of the nostrils. Ideal candidates are individuals in good overall health who are bothered by wide or flared nostrils. Alarplasty is typically performed under local anaesthesia with sedation and takes between one and two hours. Thailand's JCI-accredited hospitals maintain the same rigorous safety and hygiene standards as leading Western medical centres. Choosing Thailand typically saves international patients 60–70% compared to equivalent procedures in the United States, United Kingdom, or Australia.",
    category: "Face Surgery", hospitalNights: "0", duration: "1–2 hours", stayDays: "9 days"
  },
  "face/nose-surgery-thailand": {
    title: `Rhinoplasty Thailand | Nose Job Bangkok Price ${YEAR}`,
    description: "Rhinoplasty in Thailand from $1,500. Expert nose surgery at JCI hospitals. Natural results, save 70%. Free consultation today.",
    h1: "Rhinoplasty & Nose Surgery in Thailand",
    body: "Rhinoplasty — commonly known as a nose job — is one of the most frequently performed cosmetic procedures worldwide, and Thailand has earned an outstanding international reputation for delivering exceptional results. Whether you wish to refine the tip, straighten the bridge, reduce overall size, correct asymmetry, or improve breathing function, Thailand's board-certified plastic surgeons offer the full spectrum of rhinoplasty techniques. Two primary approaches are used: open rhinoplasty and closed rhinoplasty. Rhinoplasty is performed under general anaesthesia and typically takes two to three hours. International patients typically save 60–70% compared to prices in the US, UK, or Australia.",
    category: "Face Surgery", hospitalNights: "1–2", duration: "2–3 hours", stayDays: "10 days"
  },
  "face/cheek-reduction-thailand": {
    title: `Cheek Reduction Thailand | V-Line Surgery Bangkok ${YEAR}`,
    description: "Cheek reduction Thailand from $2,500. V-line facial contouring at JCI hospitals. Slimmer face, no visible scars. Free consultation.",
    h1: "Cheek Reduction & Facial Contouring in Thailand",
    body: "Cheek reduction surgery, also known as malar reduction or zygoma reduction, reduces the prominence of wide or protruding cheekbones to create a slimmer, more refined facial profile. The surgery is performed through incisions made inside the mouth, leaving no visible external scars. Thailand's facial contouring surgeons are among the most experienced in Asia. Cost is 60–70% less than equivalent procedures in South Korea, the US, or the UK.",
    category: "Face Surgery", hospitalNights: "1", duration: "2–3 hours", stayDays: "10 days"
  },
  "face/chin-augmentation-thailand": {
    title: `Chin Augmentation Thailand | Chin Implant Bangkok ${YEAR}`,
    description: "Chin augmentation Thailand from $1,500. Chin implants for balanced facial profile. JCI hospitals. Free consultation today.",
    h1: "Chin Augmentation Surgery in Thailand",
    body: "Chin augmentation, or mentoplasty, enhances the size and projection of the chin using a biocompatible implant. A well-proportioned chin is fundamental to facial harmony. Thailand's board-certified plastic surgeons offer high-quality silicone implants. The procedure takes one to two hours. Cost is 60–70% less than in Western countries.",
    category: "Face Surgery", hospitalNights: "0–1", duration: "1–2 hours", stayDays: "7 days"
  },
  "face/chin-shaving-thailand": {
    title: `Chin Shaving Thailand | V-Line Chin Reduction ${YEAR}`,
    description: "Chin shaving Thailand from $2,000. Reduce a prominent chin for softer contours. No visible scars. Free quote.",
    h1: "Chin Shaving & Reduction in Thailand",
    body: "Chin shaving reduces the size of an overly prominent chin to create a softer, more balanced facial appearance. The surgery is performed through an incision inside the lower lip, leaving no visible external scars. Cost is 60–70% less than in Western countries.",
    category: "Face Surgery", hospitalNights: "0–1", duration: "1–2 hours", stayDays: "7 days"
  },
  "face/forehead-lift-thailand": {
    title: `Forehead Lift Thailand | Brow Lift Bangkok Cost ${YEAR}`,
    description: "Forehead lift Thailand from $2,000. Raise brows, smooth wrinkles at JCI hospitals. Free quote.",
    h1: "Forehead & Brow Lift in Thailand",
    body: "A forehead lift elevates drooping eyebrows, smooths horizontal forehead wrinkles, and reduces frown lines. Thailand's surgeons offer endoscopic and classic brow lift techniques. Results are long-lasting, typically seven to ten years or more. Cost is 60–70% less than Western prices.",
    category: "Face Surgery", hospitalNights: "0–1", duration: "1–2 hours", stayDays: "7 days"
  },
  "face/full-facelift-thailand": {
    title: `Facelift Thailand | Full Face Lift Bangkok Cost ${YEAR}`,
    description: "Full facelift Thailand from $5,000. Comprehensive facial rejuvenation at JCI hospitals. Save 70%. Free consultation.",
    h1: "Full Facelift Surgery in Thailand",
    body: "A full facelift (rhytidectomy) addresses sagging skin, deep nasolabial folds, jowls, and loose neck skin. Thailand's surgeons perform deep-plane and SMAS facelifts for natural-looking results. The procedure takes three to five hours. A well-performed facelift can turn back the clock by 10 to 15 years. Cost is 60–70% less than in the US, UK, or Australia.",
    category: "Face Surgery", hospitalNights: "1–2", duration: "3–5 hours", stayDays: "14 days"
  },
  "face/mini-facelift-thailand": {
    title: `Mini Facelift Thailand | Weekend Facelift Bangkok ${YEAR}`,
    description: "Mini facelift Thailand from $3,000. Less invasive, faster recovery. Natural results. Free consultation today.",
    h1: "Mini Facelift Surgery in Thailand",
    body: "A mini facelift targets early to moderate signs of ageing in the lower face and jawline. It uses smaller incisions and has quicker recovery. Results can last five to ten years. Cost is 60–70% less than Western prices.",
    category: "Face Surgery", hospitalNights: "0–1", duration: "2–3 hours", stayDays: "10 days"
  },
  "face/nose-implant-thailand": {
    title: `Nose Implant Thailand | Bridge Augmentation Bangkok ${YEAR}`,
    description: "Nose implant Thailand from $1,200. Silicone or Gore-Tex implants for a defined nasal bridge. Free consultation.",
    h1: "Nose Implant Surgery in Thailand",
    body: "Nose implant surgery enhances the height and definition of the nasal bridge using biocompatible implants including medical-grade silicone and Gore-Tex. The procedure is performed through an incision inside the nose with no visible external scar. Cost is 60–70% lower than in Western countries.",
    category: "Face Surgery", hospitalNights: "0–1", duration: "1–2 hours", stayDays: "7 days"
  },
  "face/tip-rhinoplasty-thailand": {
    title: `Tip Rhinoplasty Thailand | Nose Tip Surgery Bangkok ${YEAR}`,
    description: "Tip rhinoplasty Thailand from $1,200. Refine your nasal tip. Natural results. Free consultation today.",
    h1: "Tip Rhinoplasty in Thailand",
    body: "Tip rhinoplasty specifically refines the shape, size, and projection of the nasal tip without altering the bridge. Thailand's rhinoplasty surgeons are experts in delicate cartilage reshaping techniques. Surgery takes one to two hours. Cost is 60–70% less than in Western countries.",
    category: "Face Surgery", hospitalNights: "0", duration: "1–2 hours", stayDays: "7 days"
  },
  "face/upper-eyelid-thailand": {
    title: `Upper Eyelid Surgery Thailand | Blepharoplasty Bangkok ${YEAR}`,
    description: "Upper eyelid surgery Thailand from $1,000. Remove droopy eyelids. Look younger, refreshed. Free quote.",
    h1: "Upper Eyelid Surgery (Blepharoplasty) in Thailand",
    body: "Upper blepharoplasty removes excess skin, muscle, and fat from upper eyelids. Thailand's surgeons are skilled across different ethnicities including double eyelid surgery. Results last 10 to 15 years. Cost is 60–70% less than Western prices.",
    category: "Face Surgery", hospitalNights: "0", duration: "1–2 hours", stayDays: "7 days"
  },
  "face/lower-eyelid-thailand": {
    title: `Lower Eyelid Surgery Thailand | Eye Bag Removal ${YEAR}`,
    description: "Lower eyelid surgery Thailand from $1,200. Remove under-eye bags. Look refreshed. Free consultation.",
    h1: "Lower Eyelid Surgery in Thailand",
    body: "Lower blepharoplasty addresses under-eye bags, puffiness, and excess skin. Two techniques available: transcutaneous and transconjunctival. Fat may be removed or repositioned. Results are long-lasting. Cost is 60–70% less than Western prices.",
    category: "Face Surgery", hospitalNights: "0", duration: "1–2 hours", stayDays: "7 days"
  },
  "breast/breast-implants-thailand": {
    title: `Breast Implants Thailand | Augmentation Bangkok ${YEAR}`,
    description: "Breast augmentation Thailand from $2,800. Mentor & Motiva implants at JCI hospitals. Natural results. Free quote today.",
    h1: "Breast Augmentation & Implants in Thailand",
    body: "Breast augmentation is Thailand's most popular cosmetic surgery. Surgeons use premium implants from Mentor, Motiva, and Allergan. Options include silicone gel, cohesive gel, round or anatomical shapes, and subglandular or submuscular placement. All implants are FDA-approved with manufacturer warranty. Cost is 60–70% less than in the US, UK, or Australia.",
    category: "Breast Surgery", hospitalNights: "1", duration: "2–3 hours", stayDays: "10 days"
  },
  "breast/breast-lift-thailand": {
    title: `Breast Lift Thailand | Mastopexy Bangkok Cost ${YEAR}`,
    description: "Breast lift Thailand from $2,500. Restore youthful shape at JCI hospitals. Natural results. Free consultation today.",
    h1: "Breast Lift (Mastopexy) in Thailand",
    body: "Mastopexy raises and reshapes sagging breasts by removing excess skin and tightening tissue. Techniques include crescent, periareolar, vertical (lollipop), and anchor (inverted-T) lifts. Can be combined with implants or reduction. Cost is 60–70% less than in Western countries.",
    category: "Breast Surgery", hospitalNights: "1", duration: "2–3 hours", stayDays: "10 days"
  },
  "breast/breast-reduction-thailand": {
    title: `Breast Reduction Thailand | Surgery Bangkok Cost ${YEAR}`,
    description: "Breast reduction Thailand from $3,000. Relieve back pain at JCI hospitals. Expert surgeons. Free consultation.",
    h1: "Breast Reduction Surgery in Thailand",
    body: "Breast reduction removes excess tissue, fat, and skin for proportionate breast size. Relieves chronic back, neck, and shoulder pain. The most common approach is the anchor incision (inverted-T). Surgeons employ techniques to preserve nipple sensation. Cost is 60–70% less than in the US, UK, or Australia.",
    category: "Breast Surgery", hospitalNights: "1", duration: "3–4 hours", stayDays: "10 days"
  },
  "body/liposuction-thailand": {
    title: `Liposuction Thailand | Vaser Lipo Bangkok Price ${YEAR}`,
    description: "Liposuction Thailand from $1,800. Vaser & tumescent lipo at JCI hospitals. Save 70%. Free quote today.",
    h1: "Liposuction & Body Contouring in Thailand",
    body: "Liposuction removes stubborn fat from abdomen, flanks, thighs, hips, arms, back, chin, and neck. Techniques include tumescent, Vaser ultrasound-assisted, and power-assisted liposuction. Ideal candidates are within 30% of ideal body weight. Fat cells removed do not grow back. Cost is 60–70% less than in Western countries.",
    category: "Body Surgery", hospitalNights: "0–1", duration: "1–4 hours", stayDays: "7 days"
  },
  "body/lipoplasty-thailand": {
    title: `Lipoplasty Thailand | Fat Sculpting Bangkok Cost ${YEAR}`,
    description: "Lipoplasty Thailand for precision body sculpting. Power-assisted techniques at JCI hospitals. Free consultation.",
    h1: "Lipoplasty & Precision Fat Sculpting in Thailand",
    body: "Lipoplasty uses advanced suction-assisted methods for precision fat removal. Power-assisted lipoplasty (PAL) uses a vibrating cannula for greater control, especially in fibrous areas. Cost is 60–70% lower than in Western countries.",
    category: "Body Surgery", hospitalNights: "0–1", duration: "1–3 hours", stayDays: "7 days"
  },
  "body/tummy-tuck-thailand": {
    title: `Tummy Tuck Thailand | Abdominoplasty Bangkok ${YEAR}`,
    description: "Tummy tuck Thailand from $3,500. Flat, toned abdomen at JCI hospitals. Save 70%. Free consultation today.",
    h1: "Tummy Tuck (Abdominoplasty) in Thailand",
    body: "Abdominoplasty removes excess skin and fat while repairing separated abdominal muscles (diastasis recti). Options include full, mini, and extended tummy tuck. Frequently combined with liposuction of the flanks. Cost is 60–70% less than in the US, UK, or Australia.",
    category: "Body Surgery", hospitalNights: "2", duration: "2–4 hours", stayDays: "14 days"
  },
  "body/buttock-lift-thailand": {
    title: `Buttock Lift Thailand | Butt Lift Surgery Bangkok ${YEAR}`,
    description: "Buttock lift Thailand from $3,000. Lift and reshape at JCI hospitals. Natural contours. Free consultation.",
    h1: "Buttock Lift Surgery in Thailand",
    body: "A buttock lift removes excess sagging skin and tissue for a firmer, more lifted contour. Particularly beneficial after significant weight loss. Can be combined with liposuction or fat transfer. Cost is 60–70% less than in Western countries.",
    category: "Body Surgery", hospitalNights: "1–2", duration: "2–3 hours", stayDays: "14 days"
  },
  "body/buttocks-implant-thailand": {
    title: `Buttock Implants Thailand | Gluteal Augmentation ${YEAR}`,
    description: "Buttock implants Thailand from $4,000. Silicone implants for fuller buttocks. Natural results. Free quote.",
    h1: "Buttock Implant Surgery in Thailand",
    body: "Buttock implant surgery uses solid silicone implants to enhance size, shape, and projection. Ideal for those lacking sufficient body fat for a Brazilian butt lift. Implants placed through a hidden incision. Placement options include intramuscular, subfascial, or subcutaneous. Cost is 60–70% less than in Western countries.",
    category: "Body Surgery", hospitalNights: "1–2", duration: "2–3 hours", stayDays: "14 days"
  },
  "body/hair-transplant-thailand": {
    title: `Hair Transplant Thailand | FUE Hair Restoration ${YEAR}`,
    description: "Hair transplant Thailand from $2,500. FUE & FUT techniques. Permanent, natural results. Free consultation today.",
    h1: "Hair Transplant Surgery in Thailand",
    body: "Hair transplant surgery is a permanent solution for pattern hair loss. Two techniques: FUE (no linear scar) and FUT. Sessions of 2,000 to 4,000+ grafts. New growth begins at 3–4 months, full results at 12–18 months. Transplanted hair is permanent. Cost is 60–70% less than in the UK, US, or Australia.",
    category: "Body Surgery", hospitalNights: "0", duration: "4–8 hours", stayDays: "7 days"
  },
  "other/mtf-thailand": {
    title: `MTF Surgery Thailand | Gender Confirmation Bangkok ${YEAR}`,
    description: "MTF surgery Thailand from $8,000. Vaginoplasty & facial feminisation. World-leading surgeons. Free quote.",
    h1: "Male to Female (MTF) Surgery in Thailand",
    body: "Thailand is internationally recognised for male-to-female gender confirmation surgery. Procedures include penile inversion vaginoplasty, sigmoid colon vaginoplasty, facial feminisation surgery, breast augmentation, and body contouring. Specialist hospitals provide supportive care with decades of experience. Cost is 50–70% less than in Western countries.",
    category: "Specialised Surgery", hospitalNights: "5–7", duration: "4–6 hours", stayDays: "21–30 days"
  },
  "other/ftm-thailand": {
    title: `FTM Surgery Thailand | Top Surgery Bangkok Cost ${YEAR}`,
    description: "FTM surgery Thailand from $4,000. Top surgery & masculinisation. Expert surgeons. Free consultation.",
    h1: "Female to Male (FTM) Surgery in Thailand",
    body: "Thailand offers comprehensive FTM gender confirmation surgery. Procedures include chest masculinisation (top surgery), hysterectomy, metoidioplasty, phalloplasty, and scrotoplasty. Supportive, inclusive environments. Cost is 50–70% less than in Western countries.",
    category: "Specialised Surgery", hospitalNights: "3–7", duration: "3–8 hours", stayDays: "14–30 days"
  },
  "other/srs-thailand": {
    title: `SRS Thailand | Sex Reassignment Surgery Bangkok ${YEAR}`,
    description: "Sex reassignment surgery Thailand. World-renowned surgeons, MTF & FTM procedures. Compassionate care. Free consultation.",
    h1: "Sex Reassignment Surgery (SRS) in Thailand",
    body: "Thailand is the world's premier destination for sex reassignment surgery with over three decades of pioneering experience. Comprehensive options for both MTF and FTM transitions. Care follows WPATH Standards. Cost is 50–70% less than in the US, UK, or Australia.",
    category: "Specialised Surgery", hospitalNights: "5–7", duration: "4–8 hours", stayDays: "21–30 days"
  },
};

const staticPages: Record<string, PageData> = {
  "/": {
    title: `Cosmetic Surgery Thailand | Top Surgeons & JCI Hospitals ${YEAR}`,
    description: "Cosmetic surgery in Thailand at JCI-accredited hospitals. Board-certified surgeons, 60-70% savings. Free consultation.",
    h1: "Cosmetic Surgery Thailand",
    body: "Thailand is the world's leading destination for cosmetic and plastic surgery, offering internationally accredited hospitals, board-certified surgeons, and savings of 60-70% compared to Western countries."
  },
  "/procedures": {
    title: `All Cosmetic Surgery Procedures in Thailand ${YEAR}`,
    description: "Complete list of cosmetic surgery procedures in Thailand. Face, breast, body at JCI hospitals. Free quotes.",
    h1: "Cosmetic Surgery Procedures in Thailand",
    body: "Explore our comprehensive range of cosmetic surgery procedures at JCI-accredited hospitals across Thailand."
  },
  "/face": {
    title: `Face Surgery Thailand | Facial Procedures Bangkok ${YEAR}`,
    description: "Facial cosmetic surgery Thailand. Rhinoplasty, facelift, eyelid surgery at JCI hospitals. Free consultation.",
    h1: "Face Surgery in Thailand",
    body: "Thailand offers a complete range of facial cosmetic surgery procedures performed by board-certified surgeons at JCI-accredited hospitals."
  },
  "/breast": {
    title: `Breast Surgery Thailand | Augmentation & Lift Bangkok ${YEAR}`,
    description: "Breast surgery Thailand. Implants, lift, reduction at JCI hospitals. Premium implants. Free quote.",
    h1: "Breast Surgery in Thailand",
    body: "Thailand's board-certified surgeons offer breast augmentation, lift, and reduction at JCI-accredited hospitals."
  },
  "/body": {
    title: `Body Surgery Thailand | Liposuction & Tummy Tuck Bangkok ${YEAR}`,
    description: "Body contouring Thailand. Liposuction, tummy tuck, buttock procedures at JCI hospitals. Free consultation.",
    h1: "Body Surgery in Thailand",
    body: "Transform your body with expert cosmetic surgery in Thailand at JCI-accredited hospitals."
  },
  "/contact": {
    title: `Contact Us | Free Cosmetic Surgery Consultation Thailand ${YEAR}`,
    description: "Free cosmetic surgery consultation. Quotes, surgeon matching, and travel planning to Thailand.",
    h1: "Contact Us for a Free Consultation",
    body: "Get your free, no-obligation cosmetic surgery consultation today."
  },
  "/faq": {
    title: `Cosmetic Surgery Thailand FAQ | Common Questions ${YEAR}`,
    description: "FAQ about cosmetic surgery in Thailand. Safety, costs, recovery, hospitals, surgeons.",
    h1: "Frequently Asked Questions",
    body: "Find answers to common questions about cosmetic surgery in Thailand."
  },
};

function generateHTML(path: string, data: PageData): string {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE,
    address: { "@type": "PostalAddress", addressCountry: "TH", addressLocality: "Bangkok" },
    medicalSpecialty: "PlasticSurgery",
  });

  const procedureJsonLd = data.category
    ? `<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        name: data.h1,
        description: data.description,
        url: canonicalUrl,
        procedureType: "https://schema.org/SurgicalProcedure",
        bodyLocation: data.category.replace(" Surgery", ""),
      })}</script>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${data.title} | ${SITE_NAME}</title>
<meta name="description" content="${data.description}">
<link rel="canonical" href="${canonicalUrl}">
<meta property="og:title" content="${data.title}">
<meta property="og:description" content="${data.description}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:site_name" content="${SITE_NAME}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${data.title}">
<meta name="twitter:description" content="${data.description}">
<link rel="alternate" hreflang="en" href="${canonicalUrl}">
<link rel="alternate" hreflang="x-default" href="${canonicalUrl}">
<script type="application/ld+json">${jsonLd}</script>
${procedureJsonLd}
</head>
<body>
<nav><a href="${SITE_URL}">Home</a> | <a href="${SITE_URL}/procedures">Procedures</a> | <a href="${SITE_URL}/face">Face</a> | <a href="${SITE_URL}/breast">Breast</a> | <a href="${SITE_URL}/body">Body</a> | <a href="${SITE_URL}/contact">Contact</a></nav>
<main><article>
<h1>${data.h1}</h1>
${data.category ? `<p><strong>Category:</strong> ${data.category}</p>` : ""}
${data.duration ? `<p><strong>Duration:</strong> ${data.duration}</p>` : ""}
${data.hospitalNights ? `<p><strong>Hospital Stay:</strong> ${data.hospitalNights} night(s)</p>` : ""}
${data.stayDays ? `<p><strong>Stay in Thailand:</strong> ${data.stayDays}</p>` : ""}
<p>${data.body}</p>
</article>
<aside>
<h2>Why Choose Thailand?</h2>
<ul>
<li>JCI-accredited hospitals</li>
<li>Board-certified surgeons</li>
<li>Save 60–70% vs USA, UK, Australia</li>
<li>English-speaking coordinators</li>
<li>No wait times</li>
</ul>
<p>Call: <a href="tel:+66925590848">${PHONE}</a></p>
<p><a href="${SITE_URL}/contact">Free Consultation</a></p>
</aside>
</main>
<footer><p>&copy; ${YEAR} ${SITE_NAME}. Medical Disclaimer: Content is for informational purposes only.</p></footer>
</body>
</html>`;
}

function isBot(ua: string): boolean {
  const lower = ua.toLowerCase();
  return BOT_USER_AGENTS.some((bot) => lower.includes(bot));
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const path = url.searchParams.get("path") || "/";
    const userAgent = req.headers.get("user-agent") || "";
    const forceRender = url.searchParams.get("force") === "true";

    if (!isBot(userAgent) && !forceRender) {
      return new Response(
        JSON.stringify({ message: "Not a bot. Pass ?force=true to test.", isBot: false }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let pageData: PageData | undefined = staticPages[path];
    if (!pageData) {
      const cleanPath = path.startsWith("/") ? path.slice(1) : path;
      pageData = procedures[cleanPath];
    }
    if (!pageData) {
      pageData = {
        title: "Page Not Found",
        description: "The requested page could not be found.",
        h1: "Page Not Found",
        body: "The page you are looking for does not exist.",
      };
    }

    return new Response(generateHTML(path, pageData), {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    });
  } catch (_error) {
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
