import React from "react";

const sponsors = ["Repuestos El Rayo", "Taller Turbo", "Lubricantes Maracaibo", "Motos & Más", "AutoPartes VE", "Goodyear VE", "Bridgestone", "Castrol"];

export default function Sponsors() {
  return (
    <section id="patrocinantes" className="bg-asphalt-900 py-20 border-t border-asphalt-800 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="font-bebas_neue text-4xl text-white">PATROCINANTES Y ALIADOS</h2>
        <p className="mt-2 text-asphalt-400 text-sm">Agencias de repuestos, talleres y marcas automotrices que confían en nosotros.</p>
      </div>
      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...sponsors, ...sponsors].map((s, i) => (
            <div key={i} className="flex items-center justify-center min-w-[200px] h-20 rounded-xl bg-asphalt-800/40 border border-asphalt-700 px-6 text-asphalt-200 font-semibold hover:border-neonOrange-500 transition-colors">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
