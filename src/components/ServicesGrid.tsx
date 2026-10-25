import React from "react";
import { Car, Package, Bus } from "lucide-react";

const services = [
  { title: "Mototaxi / Taxi", desc: "Viajes rápidos al mejor precio.", icon: Car, color: "neonOrange" },
  { title: "Encomiendas / Delivery", desc: "Envía paquetes con seguimiento en tiempo real.", icon: Package, color: "techBlue" },
  { title: "Turismo y Viajes", desc: "Minivans y autobuses para rutas interestatales.", icon: Bus, color: "neonOrange" },
];

export default function ServicesGrid() {
  return (
    <section id="servicios" className="bg-[#0d1117] py-24 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`group relative rounded-2xl bg-slate-900 border border-slate-700 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  s.color === "neonOrange"
                    ? "hover:border-neonOrange-500 hover:shadow-neonOrange-500/20"
                    : "hover:border-techBlue-500 hover:shadow-techBlue-500/20"
                }`}
              >
                <div className="text-5xl mb-4"><Icon className="w-12 h-12" /></div>
                <h3 className="font-outfit text-2xl text-stone-100 tracking-wide">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-300">{s.desc}</p>
                <div className={`mt-6 flex items-center text-sm font-semibold transition-colors ${
                  s.color === "neonOrange" ? "text-neonOrange-400 group-hover:text-neonOrange-300" : "text-techBlue-400 group-hover:text-techBlue-300"
                }`}>
                  Saber más <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
