"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxBackgroundProps {
  imageSrc: string;
  overlayClassName?: string;
  speed?: number;
  imageOpacity?: number;
  children: React.ReactNode;
  className?: string;
  topGradient?: string;
  bottomGradient?: string;
}

export default function ParallaxBackground({
  imageSrc,
  overlayClassName,
  speed = 0.15,
  imageOpacity = 0.12,
  children,
  className,
  topGradient,
  bottomGradient,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <section ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 -top-[20%] -bottom-[20%] z-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center blur-[2px] saturate-[0.6]"
          style={{
            backgroundImage: `url(${imageSrc})`,
            opacity: imageOpacity,
          }}
        />
      </motion.div>

      {/* Color overlay for readability */}
      <div className={cn("absolute inset-0 z-[1]", overlayClassName)} />

      {/* Section transitions */}
      {topGradient && (
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-48 z-[2] pointer-events-none",
            topGradient
          )}
        />
      )}
      {bottomGradient && (
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-48 z-[2] pointer-events-none",
            bottomGradient
          )}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
