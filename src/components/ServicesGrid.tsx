import React from "react";

const services = [
  { title: "Moto-Taxi", desc: "Ágil, económico y seguro para moverte por la ciudad.", icon: "🏍️", color: "neonOrange" },
  { title: "Carro Confort", desc: "Viajes cómodos con aire acondicionado y conductores verificados.", icon: "🚗", color: "techBlue" },
  { title: "Encomiendas / Delivery", desc: "Envía paquetes y comida en tiempo récord.", icon: "📦", color: "neonOrange" },
  { title: "Transporte Turístico", desc: "Vans y autobuses para grupos, eventos y tours.", icon: "🚐", color: "techBlue" },
];

export default function ServicesGrid() {
  return (
    <section id="servicios" className="bg-asphalt-900 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-bebas_neue text-5xl md:text-6xl text-white">UNA SOLA APP, <span className="text-neonOrange-500">TODO LO QUE NECESITAS</span></h2>
          <p className="mt-4 text-asphalt-300">Elige el servicio que mejor se adapte a tu día a día.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl bg-asphalt-800/60 border border-asphalt-700 p-6 hover:border-neonOrange-500 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-neonOrange-500/10">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="font-bebas_neue text-2xl text-white tracking-wide">{s.title}</h3>
              <p className="mt-2 text-sm text-asphalt-300">{s.desc}</p>
              <div className="mt-6 flex items-center text-sm font-semibold text-neonOrange-400 group-hover:text-neonOrange-300">
                Saber más <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
