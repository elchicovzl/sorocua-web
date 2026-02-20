import { NavLink, FooterSection } from "@/types";

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Packages", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

export const footerSections: FooterSection[] = [
  {
    title: "Compañía",
    links: [
      { label: "Sobre Nosotros", href: "#" },
      { label: "Destinos", href: "#" },
      { label: "Paquetes", href: "#" },
      { label: "Testimonios", href: "#" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Centro de Ayuda", href: "#" },
      { label: "Términos y Condiciones", href: "#" },
      { label: "Privacidad", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Cookies", href: "#" },
  { label: "Seguridad", href: "#" },
  { label: "Legal", href: "#" },
];
