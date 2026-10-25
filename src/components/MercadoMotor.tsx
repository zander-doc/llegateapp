import React from "react";
import { MessageCircle } from "lucide-react";

export default function MercadoMotor() {
  return (
    <section id="mercado-motor" className="py-16 md:py-24 bg-asphalt-900/40 border-y border-stone-800 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-neonOrange-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Mercado Motor
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-100 font-outfit uppercase">
            Negocios y Servicios
          </h2>
          <p className="mt-4 text-base md:text-lg text-stone-400 font-medium">
            Talleres, repuestos y servicios verificados para tu vehículo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Ejemplo A: Gratis */}
          <div className="rounded-2xl bg-slate-900 border border-slate-700 p-6">
            <h3 className="font-bebas_neue text-2xl text-stone-100">Taller El Rápido</h3>
            <p className="text-sm text-stone-400 mt-1">Mecánica</p>
            <p className="mt-3 text-stone-300 text-sm">Servicio de mecánica general y mantenimiento preventivo.</p>
          </div>
          {/* Ejemplo B: Destacado/Premium */}
          <div className="rounded-2xl bg-slate-900 border-2 border-neonOrange-500 p-6 relative">
            <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full bg-neonOrange-500 text-slate-950">DESTACADO</span>
            <h3 className="font-bebas_neue text-2xl text-stone-100">MotoRepuestos CA</h3>
            <p className="text-sm text-stone-400 mt-1">Repuestos</p>
            <p className="mt-3 text-stone-300 text-sm">Gran variedad de repuestos originales y aftermarket para motos y carros.</p>
            <button className="mt-6 flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-500 transition-colors">
              <MessageCircle className="w-5 h-5" /> Contactar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
