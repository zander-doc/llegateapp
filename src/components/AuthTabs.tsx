import React, { useState } from "react";

export default function AuthTabs() {
  const [tab, setTab] = useState<"driver" | "passenger">("driver");
  return (
    <section id="conductores" className="bg-[#0d1117] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-2 mb-10">
            <button onClick={() => setTab("driver")} className={`px-6 py-3 rounded-xl font-semibold transition-all ${tab === "driver" ? "bg-neonOrange-500 text-slate-950 shadow-lg shadow-neonOrange-500/30" : "bg-slate-800 text-stone-300 hover:text-white"}`}>Soy Conductor</button>
            <button onClick={() => setTab("passenger")} className={`px-6 py-3 rounded-xl font-semibold transition-all ${tab === "passenger" ? "bg-techBlue-500 text-white shadow-lg shadow-techBlue-500/30" : "bg-slate-800 text-stone-300 hover:text-white"}`}>Soy Pasajero</button>
          </div>
          {tab === "driver" ? (
            <div className="rounded-2xl bg-slate-900 border border-slate-700 p-8 md:p-12">
              <h3 className="font-bebas_neue text-4xl text-white">SUSCRIPCIÓN FIJA MENSUAL</h3>
              <p className="mt-3 text-stone-300">Paga una cuota mensual y quédate con el 100% de tus ganancias. Sin comisiones por viaje.</p>
              <ul className="mt-6 space-y-3 text-stone-200">
                <li className="flex items-center gap-3"><span className="text-neonOrange-500">✓</span> Tarifa fija predecible</li>
                <li className="flex items-center gap-3"><span className="text-neonOrange-500">✓</span> Soporte 24/7</li>
                <li className="flex items-center gap-3"><span className="text-neonOrange-500">✓</span> Bonos por referidos</li>
                <li className="flex items-center gap-3"><span className="text-neonOrange-500">✓</span> Acceso a encomiendas y turismo</li>
              </ul>
              <button className="mt-8 px-6 py-3 rounded-xl bg-neonOrange-500 text-slate-950 font-bold hover:bg-neonOrange-400 transition-colors">Registrarme como conductor</button>
            </div>
          ) : (
            <div className="rounded-2xl bg-slate-900 border border-slate-700 p-8 md:p-12 text-center">
              <h3 className="font-bebas_neue text-4xl text-white">DESCARGA LA APP</h3>
              <p className="mt-3 text-stone-300">Escanea el código QR y comienza a moverte hoy mismo.</p>
              <div className="mt-8 mx-auto w-48 h-48 rounded-2xl bg-white flex items-center justify-center">
                <div className="grid grid-cols-5 gap-1">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={`w-7 h-7 ${Math.random() > 0.4 ? "bg-[#0d1117]" : "bg-white"}`} />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm text-stone-400">Disponible en iOS y Android</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
