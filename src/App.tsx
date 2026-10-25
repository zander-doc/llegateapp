import React from "react";
import { Navbar } from "@/sections/Navbar";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";
import ServicesGrid from "./components/ServicesGrid";
import AuthTabs from "./components/AuthTabs";
import Sponsors from "./components/Sponsors";

export const App = () => {
  return (
    <div className="bg-[#0d1117] text-stone-50 font-dm_sans overflow-x-hidden selection:bg-neonOrange-500 selection:text-white">
      {/* Barra de navegación fija */}
      <Navbar />

      {/* Bloque central de características / funcionalidades (incluye Hero) */}
      <Main />

      {/* Cuadrícula de Servicios unificada (Mototaxi, Taxi, Delivery) */}
      <ServicesGrid />

      {/* Sección de Registro / Accesos Interactivos */}
      <section className="py-12 bg-asphalt-900/50 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4">
          <AuthTabs />
        </div>
      </section>

      {/* Alianzas y Socios Comerciales */}
      <Sponsors />

      {/* Pie de página institucional */}
      <Footer />
    </div>
  );
};

export default App;