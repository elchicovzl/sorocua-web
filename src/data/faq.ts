import { FAQItem } from "@/types";

export const faqItems: FAQItem[] = [
  {
    id: "all-inclusive",
    question: '¿Qué incluyen los paquetes "All Inclusive"?',
    answer:
      "Nuestros paquetes todo incluido cubren alojamiento de lujo, todas las comidas y bebidas premium, traslados aeropuerto-hotel, y una selección de actividades exclusivas. No tendrás que preocuparte por nada más que disfrutar.",
    tapePosition: "top-left",
    tapeRotation: "-rotate-3",
  },
  {
    id: "customize",
    question: "¿Puedo personalizar mi itinerario de viaje?",
    answer:
      "¡Absolutamente! En Sorocua nos especializamos en viajes a medida. Un asesor personal trabajará contigo para diseñar cada día de tu aventura según tus intereses, ritmo y presupuesto.",
    tapePosition: "top-right",
    tapeRotation: "rotate-2",
  },
  {
    id: "cancellation",
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Entendemos que los planes cambian. Ofrecemos opciones flexibles con reembolso completo hasta 30 días antes de la salida en la mayoría de nuestros paquetes. Consulta los términos específicos de tu reserva para más detalles.",
    tapePosition: "bottom-right",
    tapeRotation: "-rotate-12",
  },
  {
    id: "insurance",
    question: "¿Ofrecen seguro de viaje?",
    answer:
      "Sí, recomendamos encarecidamente viajar asegurado. Ofrecemos seguros integrales que cubren emergencias médicas, cancelaciones por imprevistos y pérdida de equipaje para tu total tranquilidad.",
    tapePosition: "top-left",
    tapeRotation: "rotate-90",
  },
];
