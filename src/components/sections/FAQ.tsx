"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/data/faq";
import SectionHeading from "@/components/ui/SectionHeading";
import TapeEffect from "@/components/ui/TapeEffect";
import Icon from "@/components/ui/Icon";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <FadeInOnScroll>
        <SectionHeading
          label="¿Dudas?"
          title="Preguntas Frecuentes"
          align="center"
          labelRotation="rotate-1"
          className="mb-16"
        />
      </FadeInOnScroll>

      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <FadeInOnScroll key={item.id} delay={index * 0.1}>
            <div className="relative group">
              <div
                className={cn(
                  "torn-paper bg-white p-6 md:p-8 cursor-pointer",
                  "transform transition-transform hover:-translate-y-1 hover:shadow-lg"
                )}
                onClick={() => toggle(item.id)}
              >
                <TapeEffect
                  position={item.tapePosition}
                  className={cn("opacity-70", item.tapeRotation)}
                />

                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg md:text-xl text-slate-800 pr-4">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openId === item.id ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-primary/20 text-slate-900 rounded-full p-1 shrink-0"
                  >
                    <Icon name="keyboard_arrow_down" className="block" />
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-slate-600 leading-relaxed font-medium">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </div>
  );
}
