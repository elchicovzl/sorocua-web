"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { mainNavLinks } from "@/data/navigation";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
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
          "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 transition-all duration-300",
          scrolled ? "shadow-md h-16" : "shadow-xs h-20"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
              <Icon name="beach_access" className="text-slate-900" />
            </div>
            <h1 className="text-2xl font-[800] tracking-tight text-slate-900 uppercase">
              Sorocua
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {mainNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button className="hidden lg:flex">
              Solicita tu cotización
            </Button>
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <Icon name="person" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-slate-100 transition-colors md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
