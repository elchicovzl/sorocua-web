"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { mainNavLinks } from "@/data/navigation";
import Icon from "@/components/ui/Icon";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg h-16 border-b border-slate-200/50"
            : "bg-white/90 backdrop-blur-lg shadow-sm h-20 border-b border-white/30"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div
              className={cn(
                "bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transition-all duration-500 group-hover:shadow-primary/50 group-hover:scale-110",
                scrolled ? "w-9 h-9" : "w-11 h-11"
              )}
            >
              <Icon
                name="beach_access"
                className={cn(
                  "text-slate-900 transition-all",
                  scrolled ? "text-lg" : "text-xl"
                )}
              />
            </div>
            <div className="flex flex-col">
              <h1
                className={cn(
                  "font-[900] tracking-tight text-slate-900 uppercase leading-none transition-all duration-500",
                  scrolled ? "text-xl" : "text-2xl"
                )}
              >
                Sorocua
              </h1>
              <span
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 transition-all duration-500",
                  scrolled ? "opacity-0 h-0" : "opacity-100 h-3"
                )}
              >
                Travel Agency
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-primary/25 transition-all duration-300 flex items-center gap-2 group"
              >
                <Icon
                  name={link.icon || ""}
                  className="text-base text-slate-400 group-hover:text-primary transition-colors duration-300"
                />
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className={cn(
                "hidden lg:flex items-center gap-2 bg-primary text-slate-900 rounded-full font-bold transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95",
                scrolled ? "px-5 py-2 text-sm" : "px-6 py-2.5 text-sm"
              )}
            >
              <Icon name="flight_takeoff" className="text-lg" />
              Cotizar viaje
            </a>
            <button
              className="p-2.5 rounded-full hover:bg-slate-100 transition-colors lg:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Icon name="menu" className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
