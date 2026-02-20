import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import TapeEffect from "@/components/ui/TapeEffect";
import StarRating from "@/components/ui/StarRating";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  return (
    <div className="mb-32">
      <FadeInOnScroll>
        <SectionHeading
          label="Historias de Viaje"
          title="Voces del Mundo"
          description="Momentos dorados capturados por quienes se atrevieron a explorar con Sorocua."
          align="center"
          labelRotation="-rotate-2"
          className="mb-24"
        />
      </FadeInOnScroll>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-4">
        {testimonials.map((testimonial, index) => (
          <StaggerItem key={testimonial.id}>
            <div
              className={cn(
                "relative group flex flex-col items-center",
                index > 0 && "mt-8 md:mt-0",
                index === 1 && "lg:mt-0"
              )}
            >
              {/* Avatar */}
              <div
                className={cn(
                  "w-40 h-40 md:w-48 md:h-48 border-4 border-white shadow-xl overflow-hidden",
                  "transform transition-transform duration-500 group-hover:scale-105",
                  "z-20 relative ring-4 ring-primary/20",
                  testimonial.shapeClass
                )}
              >
                <Image
                  src={testimonial.authorImage}
                  alt={testimonial.authorImageAlt}
                  fill
                  className="object-cover brightness-110"
                  sizes="(max-width: 768px) 160px, 192px"
                />
              </div>

              {/* Torn paper card */}
              <div
                className={cn(
                  "relative w-full max-w-xs -mt-16 z-10 transform transition-transform duration-300 group-hover:rotate-0"
                )}
                style={{ rotate: `${testimonial.rotation}deg` }}
              >
                <div className="bg-paper-cream pt-20 pb-8 px-8 shadow-sticker torn-paper relative text-center">
                  {/* Tape */}
                  <div
                    className={cn(
                      "absolute -top-2 w-20 h-8 tape-effect opacity-50 z-30",
                      testimonial.tapePosition === "top-center"
                        ? "left-1/2 -translate-x-1/2"
                        : testimonial.tapePosition === "top-right"
                          ? "right-12"
                          : "left-12",
                      testimonial.tapeRotation
                    )}
                  />

                  <StarRating rating={testimonial.rating} className="mb-3" />

                  <p className="font-handwriting text-xl leading-snug text-slate-800 mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="border-t border-slate-200 border-dashed pt-3 inline-block px-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      — {testimonial.authorName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
