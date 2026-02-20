import { NavLink, FooterSection } from "@/types";

export const mainNavLinks: NavLink[] = [
  { label: "Inicio", href: "#", icon: "home", description: "Página principal" },
  { label: "Destinos", href: "#", icon: "explore", description: "Lugares increíbles" },
  { label: "Paquetes", href: "#", icon: "luggage", description: "Planes a tu medida" },
  { label: "Nosotros", href: "#", icon: "group", description: "Conoce el equipo" },
  { label: "Contacto", href: "#", icon: "mail", description: "Escríbenos" },
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
