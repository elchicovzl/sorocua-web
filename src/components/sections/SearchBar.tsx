"use client";

import Icon from "@/components/ui/Icon";

export default function SearchBar() {
  return (
    <div className="max-w-5xl mx-auto bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-white/50 backdrop-blur-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Origen */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase px-4">
              Origen
            </label>
            <div className="relative">
              <Icon
                name="location_on"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="¿Desde dónde?"
                className="w-full bg-slate-50 border-none rounded-full pl-12 pr-4 h-12 text-sm focus:ring-2 focus:ring-primary transition-all shadow-inner outline-none"
              />
            </div>
          </div>

          {/* Destino */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase px-4">
              Destino
            </label>
            <div className="relative">
              <Icon
                name="flight_takeoff"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="¿A dónde vas?"
                className="w-full bg-slate-50 border-none rounded-full pl-12 pr-4 h-12 text-sm focus:ring-2 focus:ring-primary transition-all shadow-inner outline-none"
              />
            </div>
          </div>

          {/* Fecha */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase px-4">
              Fecha
            </label>
            <div className="relative">
              <Icon
                name="calendar_today"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="¿Cuándo?"
                className="w-full bg-slate-50 border-none rounded-full pl-12 pr-4 h-12 text-sm focus:ring-2 focus:ring-primary transition-all shadow-inner outline-none"
              />
            </div>
          </div>

          {/* Search button */}
          <div className="flex items-end">
            <button className="w-full bg-slate-900 text-white h-12 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
              <Icon name="search" />
              <span>Buscar</span>
            </button>
          </div>
        </div>
      </div>
  );
}
