// Content types for JSON data from crawled pages

export interface PageContent {
  title: string;
  h1: string[];
  h2: string[];
  h3: string[];
  h4: string[];
  paragraphs: string[];
  links_text: string[];
  meta_description: string;
  meta_keywords: string;
  meta_title: string;
  body_text: string;
}

export interface ImageData {
  filename: string;
  alt: string;
  src: string;
  original_url?: string;
}

export interface LinkData {
  href: string;
  text: string;
}

export interface CrawledPage {
  url: string;
  content: PageContent;
  images_count: number;
  images: ImageData[];
  links: LinkData[];
  status_code: number;
}

// Page category types
export type PageCategory = 
  | 'home'
  | 'procedure-face'
  | 'procedure-breast'
  | 'procedure-body'
  | 'procedure-other'
  | 'hospital'
  | 'before-after'
  | 'surgeon'
  | 'pricing'
  | 'main'
  | 'other';

export interface PageRoute {
  path: string;
  title: string;
  category: PageCategory;
  jsonFile: string;
  metaTitle?: string;
  metaDescription?: string;
}

// Procedure data structure
export interface Procedure {
  id: string;
  name: string;
  slug: string;
  category: 'face' | 'breast' | 'body' | 'other';
  shortDescription: string;
  jsonFile: string;
  image?: string;
}

// Hospital data structure
export interface Hospital {
  id: string;
  name: string;
  slug: string;
  location: 'bangkok' | 'phuket' | 'samui' | 'pattaya';
  shortDescription: string;
  jsonFile: string;
  image?: string;
  accreditations?: string[];
}

// Location data
export interface Location {
  id: string;
  name: string;
  slug: string;
  hospitals: Hospital[];
}
