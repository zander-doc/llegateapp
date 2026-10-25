import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-asphalt-950 pt-32 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,102,255,0.25),_transparent_60%)]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-neonOrange-500/20 blur-3xl" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-asphalt-800 text-neonOrange-400 text-xs font-semibold tracking-widest uppercase border border-asphalt-700">Hecho en Venezuela</span>
          <h1 className="mt-6 font-bebas_neue text-6xl md:text-8xl leading-none text-white">
            LLEGATE <span className="text-neonOrange-500">MÁS RÁPIDO</span><br />A DONDE VAS
          </h1>
          <p className="mt-6 text-lg md:text-xl text-asphalt-300 max-w-2xl">
            Moto-Taxi, Carro Confort, Encomiendas y Transporte Turístico. Una sola app para moverte y enviar lo que necesitas, con conductores verificados y tarifa fija mensual.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#descarga" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-neonOrange-500 text-asphalt-950 font-bold text-lg hover:bg-neonOrange-400 transition-all shadow-xl shadow-neonOrange-500/40 hover:-translate-y-0.5">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              App Store
            </a>
            <a href="#descarga" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-techBlue-500 text-white font-bold text-lg hover:bg-techBlue-400 transition-all shadow-xl shadow-techBlue-500/40 hover:-translate-y-0.5">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
              Google Play
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6 text-asphalt-400 text-sm">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => <div key={i} className="w-9 h-9 rounded-full bg-asphalt-700 border-2 border-asphalt-950" />)}
            </div>
            <span>+10.000 viajes realizados en Maracaibo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
