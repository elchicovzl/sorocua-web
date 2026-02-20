export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  currency: string;
  image: string;
  imageAlt: string;
  href: string;
  rotation: number;
  tapePosition: TapePosition;
  offsetTop?: boolean;
}

export type TapePosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorImage: string;
  authorImageAlt: string;
  rating: number;
  shapeClass: string;
  rotation: number;
  tapePosition: TapePosition;
  tapeRotation: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tapePosition: TapePosition;
  tapeRotation: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  description?: string;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export interface DestinationExperience {
  icon: string;
  title: string;
  description: string;
}

export interface GalleryPhoto {
  image: string;
  alt: string;
  caption: string;
  rotation: number;
}

export interface DestinationDetail {
  id: string;
  name: string;
  region: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  polaroidCaption: string;
  pricePerNight: number;
  currency: string;
  climate: { temp: string; type: string };
  bestSeason: { months: string; type: string };
  experiences: DestinationExperience[];
  gallery: GalleryPhoto[];
  quote: { text: string; author: string };
}
