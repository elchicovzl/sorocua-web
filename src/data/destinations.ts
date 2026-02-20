import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "caracas",
    name: "Caracas Trip",
    subtitle: "Montaña & Ciudad",
    price: 499,
    currency: "USD",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaEjuHAq_MhxypmGQX2UeU15MGcsxJs0NhYhfu4Dgjr8I-zWJyzZEumowKcTV5m8MS7f_DoXkFl10C083ybS8MWI3Sygou9qKa_VS8UlxXI1f1Kbb-vVqQC5eeBKDxW5kCdY20i2tT8J6dUbjN-y23UJ1z1QMpOJn5mwDRGo-lXpZ4M4SPo44xzyV5469ieQQLECpbQztiuHZB2HUhV-nzdzLA3tV_hB927l61DvURRKqxyFOoaecI9WUfQ99SHTJZPUggjzmmTao",
    imageAlt: "Caracas skyline with mountains",
    href: "/destinations/caracas",
    rotation: -2,
    tapePosition: "top-left",
  },
  {
    id: "los-roques",
    name: "Los Roques",
    subtitle: "Archipiélago Místico",
    price: 250,
    currency: "USD",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvQlH6exjYaiEK1Ef8SbceoUQtC_WaBJ_kE_3eRixPKZCTwTFCV2HidpI3XTwz8X5pAe9wv-p9iyMviwJ_WLsvpP3E7sDyAxAGb8dVIhXQKGXWBVMFUou3iCDmyhjxn2USN7PekI8cfDbwAiK75kJMBElG5O-F8PoSyXdGjC3MOvrbX56nvC8CLjeI6UWSOR0jI3ucVsY1F7kDv4H7oh8qJ9Sp-ggsLaFPjV1uJF5Zz7cFqLj8evVeDQG5VD0-f67huQIsT8HJatk",
    imageAlt: "Los Roques crystal clear waters",
    href: "/destinations/los-roques",
    rotation: 3,
    tapePosition: "top-center",
    offsetTop: true,
  },
  {
    id: "punta-cana",
    name: "Punta Cana",
    subtitle: "Tropical Luxury",
    price: 380,
    currency: "USD",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqqpIol5MmIF9RczcI37FeHtKwVTSXxrNEGcyL92eJc4MT-RVh04djVpUqn9FnoSC3E9quXR9cfFTT13HVpqzxdSrSAYVXbhoHacuE7ynbGaKEl9V-5kBwlgKOmIVm6t0I5HlZbB5tP_SLFnO9pDXSubApRwoqXn1tK0cvVkX7qaEQMwt4ML1CGuF5DCNYRchPlJ7L_j94NLyqhNiAHAQ0d6dXq4sfvD7snsTvRnpGQYG9vEIAe8fOFnFGeU4PGvHkzLforKw4tbI",
    imageAlt: "Punta Cana tropical beach",
    href: "/destinations/punta-cana",
    rotation: -1.5,
    tapePosition: "top-right",
  },
];
