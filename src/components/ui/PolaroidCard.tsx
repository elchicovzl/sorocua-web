import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Destination } from "@/types";
import TapeEffect from "./TapeEffect";
import Icon from "./Icon";

interface PolaroidCardProps {
  destination: Destination;
  className?: string;
}

export default function PolaroidCard({
  destination,
  className,
}: PolaroidCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-white p-3 pb-8 shadow-polaroid",
        "hover:shadow-polaroid-hover transition-all duration-300",
        "transform hover:-translate-y-2",
        destination.offsetTop && "lg:mt-12",
        className
      )}
      style={{ rotate: `${destination.rotation}deg` }}
    >
      <TapeEffect position={destination.tapePosition} />

      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 z-10" />
        <Image
          src={destination.image}
          alt={destination.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 contrast-[1.1]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="pt-6 px-2 flex flex-col items-center text-center">
        <div
          className="font-handwriting text-3xl text-slate-800 mb-2 font-bold"
          style={{ rotate: `${-destination.rotation * 0.5}deg` }}
        >
          {destination.name}
        </div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
          {destination.subtitle}
        </p>
        <div className="flex items-center justify-between w-full mt-4 border-t border-slate-100 pt-3 border-dashed">
          <span className="font-handwriting text-2xl text-slate-700 font-bold">
            desde ${destination.price}
          </span>
          <Link
            href={destination.href}
            className="text-primary hover:text-slate-900 transition-colors flex items-center gap-1 text-xs font-bold uppercase tracking-wider"
          >
            Ver más
            <Icon name="arrow_outward" className="text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
}
