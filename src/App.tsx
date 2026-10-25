import React from "react";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";
import ServicesGrid from "./components/ServicesGrid";
import AuthTabs from "./components/AuthTabs";
import Sponsors from "./components/Sponsors";
import SubscriptionPlans from "./components/SubscriptionPlans";
import { DataSaverProvider } from "./context/DataSaverContext";

export const App = () => {
  return (
    <DataSaverProvider>
      <div className="bg-[#0d1117] text-stone-50 font-dm_sans overflow-x-hidden selection:bg-neonOrange-500 selection:text-white">
        {/* Barra de navegación fija */}
        <Navbar />

        {/* Sección Principal / Hero */}
        <Hero />

        {/* Bloque central de características / funcionalidades */}
        <Main />

        {/* Sección 1: Cuadrícula detallada de servicios */}
        <section className="py-16 md:py-24 bg-[#0d1117] px-4 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-neonOrange-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Movilidad Inteligente
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-100 font-outfit uppercase">
              Una sola app, todo lo que necesitas
            </h2>
            <p className="mt-4 text-base md:text-lg text-stone-400 font-medium">
              Elige el servicio de transporte o delivery que mejor se adapte a tu ritmo diario con tarifas justas y transparentes.
            </p>
          </div>
          <ServicesGrid />
        </section>

        {/* Sección 2: Registro e Inicio de Sesión Interactivo */}
        <section className="py-16 md:py-24 bg-asphalt-900/60 border-y border-stone-800 px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-techBlue-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Únete a la Comunidad
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-100 font-outfit uppercase">
              Comienza a viajar o conduce con nosotros
            </h2>
            <p className="mt-4 text-base md:text-lg text-stone-400 font-medium">
              Regístrate en pocos segundos como pasajero o socio conductor y forma parte de la red de movilidad con mayor crecimiento.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <AuthTabs />
          </div>
        </section>

        {/* Alianzas y Socios Comerciales */}
        <Sponsors />

        {/* Pie de página institucional */}
        <Footer />
      </div>
    </DataSaverProvider>
  );
};

export default App;