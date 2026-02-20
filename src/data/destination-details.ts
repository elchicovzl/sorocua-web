import { DestinationDetail } from "@/types";

export const destinationDetails: Record<string, DestinationDetail> = {
  "bora-bora": {
    id: "bora-bora",
    name: "Bora Bora",
    region: "Polinesia Francesa",
    description:
      "Un paraíso de aguas cristalinas y lujo sin fin. Sumérgete en lagunas turquesas, relájate en bungalows sobre el agua y descubre la serenidad absoluta bajo el sol del Pacífico Sur.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDM0098zdjji350F4Soa2N5C53x68Vx9PJe3yQwcAT2_oLfnhlhjPXm2OGDP5QEdufuI5Um6LaOEayRSO7AHDKH3oMQFuisn7BxZpEUy2z8e1SMuAjloQpwXa4_f6nLFCzQJC3kxPMH-tceYJPJTojZ8PdncGQ-fPjjkQJAmD3GLu23NkBdCdwbBXYGc6GHOHnQRj20JdPQWAGylCMXconfyeCpO-5upbF90ovfZ0C1y6GHyPb5sM61jFyONxyXQCre5NK-eg14c48",
    heroImageAlt: "Bora Bora Overwater Bungalows",
    polaroidCaption: "Paraíso en la Tierra...",
    pricePerNight: 4500,
    currency: "USD",
    climate: { temp: "28°C", type: "Tropical Húmedo" },
    bestSeason: { months: "May - Oct", type: "Estación Seca" },
    experiences: [
      {
        icon: "sailing",
        title: "Yate Privado al Atardecer",
        description:
          "Recorrido exclusivo con champán francés y canapés gourmet.",
      },
      {
        icon: "restaurant",
        title: "Cena Romántica en la Playa",
        description: "Menú degustación de 5 platos bajo las estrellas.",
      },
      {
        icon: "spa",
        title: "Spa Polinesio de Lujo",
        description: "Tratamientos holísticos con aceites de Monoi.",
      },
    ],
    gallery: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCHO4KU3HryIXHIonPrgBeLIZ60ZZheB970JLp5TwYopUBGJR8aTNVpYVwpmOWD7zXEVry_wI9xHU056nowHpNsJrMfANMQGynPtg07HGRjsEoUKXqXkSjvuQ0CjsZVNSD8bCTPuXdFJkZmppaUjpzdmGKerK_wa2XtbcSijPcUd0eP7lPrnxFZ68bZIW1qrFo5f50t9ITA4JXQdIKwPgCZ3KBO7D8XlTfJLk5gAxYWqlKkcI16a0R8MO75s69Teb1c7OfESR1Q_RI",
        alt: "White sand beach",
        caption: "Arena Blanca",
        rotation: -3,
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD8Jr0Wc3znEoYKKGqbcDp5V3FgNEz_sP3vETWKvPGjgkOge0PR352R3s2bb9Li51LgAQky6hD_fCDVF-Lz51ViHbjsAQITzbWUt7GyAxLpJdm8p-FLlw7dWIGJgi2eJ4Tw9SFiwgsr5EKmsV5vRMzkbxjDKVr2R4SytP2AeuMbRjjOYd_17-7dc8678g8QyPmAiMq8Z5lISdMBvNCxI8rGmML93lBDmaEPkxlPopGMYOkVA9jOSo9tT_oDdGQz0maUfKURnb8tAqc",
        alt: "Tropical palm trees",
        caption: "Palmeras",
        rotation: 2,
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDfx2cjsh-Wthe73K_Mxd1hQmMJPYX4zm7bj-VFoAjlTmq45dg__qpkNYSsbsEyftCTL_GyanbuxljRigVbfuJHjj9U80WQz1lwuo9R-zu1sRucm09ODAWHRbPwz9RoqsFDUfSbQbjiKYiNwMPWGZw7sY2JhNI2idCyEzPWgDbKQnTj4QgpgKkbaJ9XYKZhuCYll1qleaXpYYKGwmKILukufEvHdkPm-BiFdNkOkf84dGEiKnUlLcW3YmhGDPUPWZkxDr05U5pBgBE",
        alt: "Luxury resort pool",
        caption: "Relax total",
        rotation: -4,
      },
    ],
    quote: {
      text: "¡No olviden traer la cámara acuática para los tiburones!",
      author: "Sophie",
    },
  },
  caracas: {
    id: "caracas",
    name: "Caracas",
    region: "Venezuela",
    description:
      "Una vibrante metrópolis enclavada entre montañas y el mar Caribe. Descubre la energía de sus calles, la majestuosidad del Ávila y una cultura gastronómica que sorprende en cada esquina.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaEjuHAq_MhxypmGQX2UeU15MGcsxJs0NhYhfu4Dgjr8I-zWJyzZEumowKcTV5m8MS7f_DoXkFl10C083ybS8MWI3Sygou9qKa_VS8UlxXI1f1Kbb-vVqQC5eeBKDxW5kCdY20i2tT8J6dUbjN-y23UJ1z1QMpOJn5mwDRGo-lXpZ4M4SPo44xzyV5469ieQQLECpbQztiuHZB2HUhV-nzdzLA3tV_hB927l61DvURRKqxyFOoaecI9WUfQ99SHTJZPUggjzmmTao",
    heroImageAlt: "Caracas skyline with El Ávila mountain",
    polaroidCaption: "La Sultana del Ávila...",
    pricePerNight: 499,
    currency: "USD",
    climate: { temp: "24°C", type: "Tropical de Montaña" },
    bestSeason: { months: "Dic - Abr", type: "Temporada Seca" },
    experiences: [
      {
        icon: "landscape",
        title: "Teleférico del Ávila",
        description:
          "Ascenso panorámico al Parque Nacional Waraira Repano con vistas espectaculares.",
      },
      {
        icon: "nightlife",
        title: "Noche Caraqueña",
        description:
          "Recorrido por los mejores rooftops y restaurantes de Las Mercedes.",
      },
      {
        icon: "museum",
        title: "Ruta Cultural",
        description:
          "Visita al Teatro Teresa Carreño, MACSI y la Casa Natal del Libertador.",
      },
    ],
    gallery: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAaEjuHAq_MhxypmGQX2UeU15MGcsxJs0NhYhfu4Dgjr8I-zWJyzZEumowKcTV5m8MS7f_DoXkFl10C083ybS8MWI3Sygou9qKa_VS8UlxXI1f1Kbb-vVqQC5eeBKDxW5kCdY20i2tT8J6dUbjN-y23UJ1z1QMpOJn5mwDRGo-lXpZ4M4SPo44xzyV5469ieQQLECpbQztiuHZB2HUhV-nzdzLA3tV_hB927l61DvURRKqxyFOoaecI9WUfQ99SHTJZPUggjzmmTao",
        alt: "Caracas skyline",
        caption: "La Ciudad",
        rotation: -2,
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAaEjuHAq_MhxypmGQX2UeU15MGcsxJs0NhYhfu4Dgjr8I-zWJyzZEumowKcTV5m8MS7f_DoXkFl10C083ybS8MWI3Sygou9qKa_VS8UlxXI1f1Kbb-vVqQC5eeBKDxW5kCdY20i2tT8J6dUbjN-y23UJ1z1QMpOJn5mwDRGo-lXpZ4M4SPo44xzyV5469ieQQLECpbQztiuHZB2HUhV-nzdzLA3tV_hB927l61DvURRKqxyFOoaecI9WUfQ99SHTJZPUggjzmmTao",
        alt: "El Ávila mountain",
        caption: "El Ávila",
        rotation: 3,
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAaEjuHAq_MhxypmGQX2UeU15MGcsxJs0NhYhfu4Dgjr8I-zWJyzZEumowKcTV5m8MS7f_DoXkFl10C083ybS8MWI3Sygou9qKa_VS8UlxXI1f1Kbb-vVqQC5eeBKDxW5kCdY20i2tT8J6dUbjN-y23UJ1z1QMpOJn5mwDRGo-lXpZ4M4SPo44xzyV5469ieQQLECpbQztiuHZB2HUhV-nzdzLA3tV_hB927l61DvURRKqxyFOoaecI9WUfQ99SHTJZPUggjzmmTao",
        alt: "Caracas culture",
        caption: "Cultura Viva",
        rotation: -3,
      },
    ],
    quote: {
      text: "Caracas te atrapa con su energía, la montaña y la gente increíble.",
      author: "Carlos",
    },
  },
  "los-roques": {
    id: "los-roques",
    name: "Los Roques",
    region: "Venezuela",
    description:
      "Un archipiélago de ensueño con más de 300 islas y cayos de arena blanca. Aguas cristalinas color turquesa, arrecifes de coral vírgenes y la paz absoluta del Caribe venezolano.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvQlH6exjYaiEK1Ef8SbceoUQtC_WaBJ_kE_3eRixPKZCTwTFCV2HidpI3XTwz8X5pAe9wv-p9iyMviwJ_WLsvpP3E7sDyAxAGb8dVIhXQKGXWBVMFUou3iCDmyhjxn2USN7PekI8cfDbwAiK75kJMBElG5O-F8PoSyXdGjC3MOvrbX56nvC8CLjeI6UWSOR0jI3ucVsY1F7kDv4H7oh8qJ9Sp-ggsLaFPjV1uJF5Zz7cFqLj8evVeDQG5VD0-f67huQIsT8HJatk",
    heroImageAlt: "Los Roques crystal clear turquoise waters",
    polaroidCaption: "El Caribe Secreto...",
    pricePerNight: 250,
    currency: "USD",
    climate: { temp: "30°C", type: "Tropical Seco" },
    bestSeason: { months: "Dic - May", type: "Temporada Alta" },
    experiences: [
      {
        icon: "scuba_diving",
        title: "Buceo en Arrecifes Vírgenes",
        description:
          "Sumérgete entre corales, tortugas y rayas en aguas de visibilidad perfecta.",
      },
      {
        icon: "kayaking",
        title: "Kayak entre Cayos",
        description:
          "Navega entre islas desiertas con arena blanca y aguas cristalinas.",
      },
      {
        icon: "dinner_dining",
        title: "Langosta Fresca al Atardecer",
        description:
          "Degustación de langosta recién pescada en la posada más exclusiva del archipiélago.",
      },
    ],
    gallery: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCvQlH6exjYaiEK1Ef8SbceoUQtC_WaBJ_kE_3eRixPKZCTwTFCV2HidpI3XTwz8X5pAe9wv-p9iyMviwJ_WLsvpP3E7sDyAxAGb8dVIhXQKGXWBVMFUou3iCDmyhjxn2USN7PekI8cfDbwAiK75kJMBElG5O-F8PoSyXdGjC3MOvrbX56nvC8CLjeI6UWSOR0jI3ucVsY1F7kDv4H7oh8qJ9Sp-ggsLaFPjV1uJF5Zz7cFqLj8evVeDQG5VD0-f67huQIsT8HJatk",
        alt: "Los Roques turquoise lagoon",
        caption: "Agua Turquesa",
        rotation: -3,
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCvQlH6exjYaiEK1Ef8SbceoUQtC_WaBJ_kE_3eRixPKZCTwTFCV2HidpI3XTwz8X5pAe9wv-p9iyMviwJ_WLsvpP3E7sDyAxAGb8dVIhXQKGXWBVMFUou3iCDmyhjxn2USN7PekI8cfDbwAiK75kJMBElG5O-F8PoSyXdGjC3MOvrbX56nvC8CLjeI6UWSOR0jI3ucVsY1F7kDv4H7oh8qJ9Sp-ggsLaFPjV1uJF5Zz7cFqLj8evVeDQG5VD0-f67huQIsT8HJatk",
        alt: "White sand cay",
        caption: "Cayos Vírgenes",
        rotation: 2,
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCvQlH6exjYaiEK1Ef8SbceoUQtC_WaBJ_kE_3eRixPKZCTwTFCV2HidpI3XTwz8X5pAe9wv-p9iyMviwJ_WLsvpP3E7sDyAxAGb8dVIhXQKGXWBVMFUou3iCDmyhjxn2USN7PekI8cfDbwAiK75kJMBElG5O-F8PoSyXdGjC3MOvrbX56nvC8CLjeI6UWSOR0jI3ucVsY1F7kDv4H7oh8qJ9Sp-ggsLaFPjV1uJF5Zz7cFqLj8evVeDQG5VD0-f67huQIsT8HJatk",
        alt: "Pelican resting",
        caption: "Fauna Local",
        rotation: -4,
      },
    ],
    quote: {
      text: "Los Roques es como estar en otro planeta. ¡Agua increíble!",
      author: "Camila",
    },
  },
  "punta-cana": {
    id: "punta-cana",
    name: "Punta Cana",
    region: "República Dominicana",
    description:
      "El destino tropical por excelencia del Caribe. Kilómetros de playas de arena blanca bordeadas de cocoteros, resorts de lujo y una vida nocturna que no tiene fin bajo las estrellas.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqqpIol5MmIF9RczcI37FeHtKwVTSXxrNEGcyL92eJc4MT-RVh04djVpUqn9FnoSC3E9quXR9cfFTT13HVpqzxdSrSAYVXbhoHacuE7ynbGaKEl9V-5kBwlgKOmIVm6t0I5HlZbB5tP_SLFnO9pDXSubApRwoqXn1tK0cvVkX7qaEQMwt4ML1CGuF5DCNYRchPlJ7L_j94NLyqhNiAHAQ0d6dXq4sfvD7snsTvRnpGQYG9vEIAe8fOFnFGeU4PGvHkzLforKw4tbI",
    heroImageAlt: "Punta Cana palm trees and turquoise beach",
    polaroidCaption: "Bajo las palmeras...",
    pricePerNight: 380,
    currency: "USD",
    climate: { temp: "29°C", type: "Tropical Caribeño" },
    bestSeason: { months: "Dic - Abr", type: "Temporada Alta" },
    experiences: [
      {
        icon: "pool",
        title: "Resort All-Inclusive de Lujo",
        description:
          "Disfruta de piscinas infinitas, gastronomía internacional y spa de clase mundial.",
      },
      {
        icon: "scuba_diving",
        title: "Snorkel en Isla Saona",
        description:
          "Excursión en catamarán a la isla paradisíaca con piscinas naturales.",
      },
      {
        icon: "golf_course",
        title: "Golf Frente al Mar",
        description:
          "Juega en campos diseñados por Jack Nicklaus con vistas al Caribe.",
      },
    ],
    gallery: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBqqpIol5MmIF9RczcI37FeHtKwVTSXxrNEGcyL92eJc4MT-RVh04djVpUqn9FnoSC3E9quXR9cfFTT13HVpqzxdSrSAYVXbhoHacuE7ynbGaKEl9V-5kBwlgKOmIVm6t0I5HlZbB5tP_SLFnO9pDXSubApRwoqXn1tK0cvVkX7qaEQMwt4ML1CGuF5DCNYRchPlJ7L_j94NLyqhNiAHAQ0d6dXq4sfvD7snsTvRnpGQYG9vEIAe8fOFnFGeU4PGvHkzLforKw4tbI",
        alt: "Punta Cana beach",
        caption: "Playa Bávaro",
        rotation: -2,
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBqqpIol5MmIF9RczcI37FeHtKwVTSXxrNEGcyL92eJc4MT-RVh04djVpUqn9FnoSC3E9quXR9cfFTT13HVpqzxdSrSAYVXbhoHacuE7ynbGaKEl9V-5kBwlgKOmIVm6t0I5HlZbB5tP_SLFnO9pDXSubApRwoqXn1tK0cvVkX7qaEQMwt4ML1CGuF5DCNYRchPlJ7L_j94NLyqhNiAHAQ0d6dXq4sfvD7snsTvRnpGQYG9vEIAe8fOFnFGeU4PGvHkzLforKw4tbI",
        alt: "Palm trees sunset",
        caption: "Atardecer",
        rotation: 3,
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBqqpIol5MmIF9RczcI37FeHtKwVTSXxrNEGcyL92eJc4MT-RVh04djVpUqn9FnoSC3E9quXR9cfFTT13HVpqzxdSrSAYVXbhoHacuE7ynbGaKEl9V-5kBwlgKOmIVm6t0I5HlZbB5tP_SLFnO9pDXSubApRwoqXn1tK0cvVkX7qaEQMwt4ML1CGuF5DCNYRchPlJ7L_j94NLyqhNiAHAQ0d6dXq4sfvD7snsTvRnpGQYG9vEIAe8fOFnFGeU4PGvHkzLforKw4tbI",
        alt: "Resort pool",
        caption: "Resort de Lujo",
        rotation: -3,
      },
    ],
    quote: {
      text: "Punta Cana superó todas nuestras expectativas. ¡Volveremos!",
      author: "Alejandro",
    },
  },
};
