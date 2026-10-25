import React from "react";

const services = [
  { title: "Moto-Taxi", desc: "Ágil, económico y seguro para moverte por la ciudad.", icon: "🏍️", color: "neonOrange" },
  { title: "Carro Confort", desc: "Viajes cómodos con aire acondicionado y conductores verificados.", icon: "🚗", color: "techBlue" },
  { title: "Encomiendas / Delivery", desc: "Envía paquetes y comida en tiempo récord.", icon: "📦", color: "neonOrange" },
  { title: "Transporte Turístico", desc: "Vans y autobuses para grupos, eventos y tours.", icon: "🚐", color: "techBlue" },
];

export default function ServicesGrid() {
  return (
    <section id="servicios" className="bg-asphalt-900 py-24 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-bebas_neue text-5xl md:text-6xl text-white">UNA SOLA APP, <span className="text-neonOrange-500">TODO LO QUE NECESITAS</span></h2>
          <p className="mt-4 text-asphalt-300">Elige el servicio que mejor se adapte a tu día a día.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group relative rounded-2xl bg-asphalt-800/60 border border-asphalt-700 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                s.color === "neonOrange"
                  ? "hover:border-neonOrange-500 hover:shadow-neonOrange-500/20"
                  : "hover:border-techBlue-500 hover:shadow-techBlue-500/20"
              }`}
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="font-bebas_neue text-2xl text-white tracking-wide">{s.title}</h3>
              <p className="mt-2 text-sm text-asphalt-300">{s.desc}</p>
              <div className={`mt-6 flex items-center text-sm font-semibold transition-colors ${
                s.color === "neonOrange" ? "text-neonOrange-400 group-hover:text-neonOrange-300" : "text-techBlue-400 group-hover:text-techBlue-300"
              }`}>
                Saber más <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
