"use client";

import { motion, AnimatePresence } from "framer-motion";
import { mainNavLinks } from "@/data/navigation";
import Icon from "@/components/ui/Icon";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-paper-cream z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-200/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="beach_access" className="text-slate-900 text-base" />
                </div>
                <span className="font-[800] text-lg uppercase tracking-tight text-slate-900">
                  Sorocua
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <Icon name="close" className="text-lg" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <div className="space-y-1">
                {mainNavLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.05 }}
                    className="flex items-center gap-4 py-3.5 px-4 rounded-2xl text-slate-700 hover:bg-white hover:text-slate-900 hover:shadow-sm transition-all group"
                    onClick={onClose}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-primary/15 flex items-center justify-center transition-colors shadow-sm">
                      <Icon
                        name={link.icon || ""}
                        className="text-xl text-slate-400 group-hover:text-primary transition-colors"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-base block leading-tight">
                        {link.label}
                      </span>
                      {link.description && (
                        <span className="text-xs text-slate-400 font-medium">
                          {link.description}
                        </span>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            </nav>

            {/* Bottom: social + CTA */}
            <div className="p-6 pt-4 border-t border-slate-200/50 space-y-4">
              {/* Social */}
              <div className="flex items-center gap-3 justify-center">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary text-slate-400 hover:text-slate-900 transition-all shadow-sm"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary text-slate-400 hover:text-slate-900 transition-all shadow-sm"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>

              {/* CTA */}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-2 w-full bg-primary text-slate-900 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-[0.98]"
              >
                <Icon name="flight_takeoff" className="text-lg" />
                Cotizar viaje
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
