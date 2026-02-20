import { footerSections, footerLegalLinks } from "@/data/navigation";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t-8 border-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="beach_access" className="text-slate-900 text-base" />
              </div>
              <h2 className="text-xl font-[800] tracking-tight text-white uppercase">
                Sorocua
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Creamos experiencias de viaje memorables, seguras y exclusivas
              para aventureros que buscan lo extraordinario.
            </p>
            <div className="flex gap-4">
              {["public", "photo_camera", "share"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all"
                >
                  <Icon name={icon} className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-lg mb-8">{section.title}</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-8">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6">
              Suscríbete para recibir ofertas exclusivas.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
              <button className="absolute right-2 top-2 bg-primary text-slate-900 w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-primary-dark transition-colors">
                <Icon name="send" />
              </button>
            </div>
            <button className="w-full mt-6 bg-primary/10 border border-primary/20 text-primary py-3 rounded-full font-bold text-sm hover:bg-primary/20 transition-all">
              Solicita tu cotización
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">
            © 2024 Sorocua Travel Agency. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            {footerLegalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
