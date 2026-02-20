"use client";

import { contactInfo, socialLinks } from "@/data/contact";
import SectionHeading from "@/components/ui/SectionHeading";
import TapeEffect from "@/components/ui/TapeEffect";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto mt-28">
      <FadeInOnScroll>
        <SectionHeading
          label="Hablemos"
          title="Contáctanos"
          description="¿Listo para tu próxima aventura? Escríbenos y diseñamos juntos el viaje de tus sueños."
          align="center"
          labelRotation="-rotate-2"
          className="mb-16"
        />
      </FadeInOnScroll>

      {/* Main card */}
      <FadeInOnScroll>
        <div className="relative torn-paper bg-white p-8 md:p-12 shadow-sticker">
          {/* Tape decorations */}
          <TapeEffect position="top-left" className="opacity-70" />
          <TapeEffect position="top-right" className="opacity-60" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left column — Contact info */}
            <StaggerChildren className="space-y-8">
              <StaggerItem>
                <p className="font-handwriting text-2xl text-slate-700 font-bold transform -rotate-1 mb-6">
                  Nos encantaría saber de ti...
                </p>
              </StaggerItem>

              {contactInfo.map((item) => (
                <StaggerItem key={item.icon}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center shrink-0 ring-2 ring-primary/20">
                      <Icon
                        name={item.icon}
                        className="text-primary text-xl"
                      />
                    </div>
                    <div>
                      <span className="font-handwriting text-lg text-slate-500 block">
                        {item.label}
                      </span>
                      <span className="text-slate-800 font-semibold text-base">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}

              {/* Social links */}
              <StaggerItem>
                <div className="pt-4 border-t border-dashed border-slate-200">
                  <span className="font-handwriting text-lg text-slate-500 block mb-3">
                    Síguenos
                  </span>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.href}
                        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary text-slate-500 hover:text-slate-900 transition-all"
                      >
                        {link.id === "instagram" ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </StaggerChildren>

            {/* Right column — Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase px-4">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full bg-slate-50 border-none rounded-full pl-5 pr-4 h-12 text-sm focus:ring-2 focus:ring-primary transition-all shadow-inner outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase px-4">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full bg-slate-50 border-none rounded-full pl-5 pr-4 h-12 text-sm focus:ring-2 focus:ring-primary transition-all shadow-inner outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase px-4">
                  Asunto
                </label>
                <input
                  type="text"
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-slate-50 border-none rounded-full pl-5 pr-4 h-12 text-sm focus:ring-2 focus:ring-primary transition-all shadow-inner outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase px-4">
                  Mensaje
                </label>
                <textarea
                  placeholder="Cuéntanos sobre el viaje que sueñas..."
                  rows={5}
                  className="w-full bg-slate-50 border-none rounded-2xl pl-5 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all shadow-inner outline-none resize-none"
                />
              </div>

              <Button size="lg" className="w-full mt-2">
                <Icon name="send" className="text-lg" />
                Enviar mensaje
              </Button>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}
