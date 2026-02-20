"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { heroSlides } from "@/data/hero-slides";
import Icon from "@/components/ui/Icon";
import SearchBar from "./SearchBar";
import { cn } from "@/lib/utils";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative h-150 md:h-175">
      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden absolute inset-0">
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              {/* Background image with Ken Burns */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  className={cn(
                    "object-cover",
                    selectedIndex === index && "animate-ken-burns"
                  )}
                  priority={index === 0}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white/10" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-theme-forest to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex items-end pb-24 md:items-center md:pb-0 pt-20 md:pt-0">
        <div className="max-w-2xl">
          <span className="inline-block bg-white/20 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-6 backdrop-blur-md border border-white/30 shadow-lg">
            {heroSlides[selectedIndex]?.badge}
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] mb-4 sm:mb-6 tracking-tight uppercase drop-shadow-2xl font-luxury">
            {heroSlides[selectedIndex]?.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-50 mb-6 sm:mb-10 leading-relaxed font-medium drop-shadow-lg max-w-lg">
            {heroSlides[selectedIndex]?.subtitle}
          </p>

          <Link
            href={heroSlides[selectedIndex]?.ctaHref || "#"}
            className="inline-block bg-primary text-slate-900 px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all hover:bg-primary-dark transform hover:-translate-y-1 shadow-xl shadow-primary/30 border border-white/20"
          >
            {heroSlides[selectedIndex]?.ctaLabel}
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-12">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-md"
            >
              <Icon name="chevron_left" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-md"
            >
              <Icon name="chevron_right" />
            </button>

            {/* Dots */}
            <div className="flex gap-2 ml-4">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    selectedIndex === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Search bar overlapping bottom */}
      <div className="absolute -bottom-16 left-0 right-0 z-30 px-6">
        <SearchBar />
      </div>
    </section>
  );
}
