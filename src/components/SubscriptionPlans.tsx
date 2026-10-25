import React from "react";
import { CreditCard, Smartphone, DollarSign, Bitcoin } from "lucide-react";

export default function SubscriptionPlans() {
  return (
    <section id="suscripciones" className="py-16 md:py-24 bg-[#0d1117] px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-neonOrange-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
          Planes y Suscripciones
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-100 font-outfit uppercase">
          Monetización flexible
        </h2>
        <p className="mt-4 text-base md:text-lg text-stone-400 font-medium">
          Elige el plan que mejor se adapte a tu ritmo y maximiza tus ganancias.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="rounded-2xl bg-slate-900 border border-slate-700 p-8 hover:border-neonOrange-500 transition-colors">
          <h3 className="font-bebas_neue text-3xl text-white">Conductor Pro</h3>
          <p className="mt-3 text-stone-300">Cuota mensual fija, reduce tu comisión por viaje al 5%.</p>
          <button className="mt-6 px-6 py-3 rounded-xl bg-neonOrange-500 text-slate-950 font-bold hover:bg-neonOrange-400 transition-colors">Elegir plan</button>
        </div>
        <div className="rounded-2xl bg-slate-900 border border-slate-700 p-8 hover:border-techBlue-500 transition-colors">
          <h3 className="font-bebas_neue text-3xl text-white">Usuario Plus</h3>
          <p className="mt-3 text-stone-300">Sin tarifa de servicio y prioridad en asignación de viajes en horas pico.</p>
          <button className="mt-6 px-6 py-3 rounded-xl bg-techBlue-500 text-white font-bold hover:bg-techBlue-400 transition-colors">Elegir plan</button>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-stone-400 text-sm">
        <span className="flex items-center gap-2"><CreditCard className="w-4 h-4" /> Aceptamos:</span>
        <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 flex items-center gap-2"><Smartphone className="w-4 h-4" /> Pago Móvil</span>
        <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 flex items-center gap-2"><DollarSign className="w-4 h-4" /> Zelle</span>
        <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 flex items-center gap-2"><Bitcoin className="w-4 h-4" /> Binance Pay</span>
      </div>
    </section>
  );
}
