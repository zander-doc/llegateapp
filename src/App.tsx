import React from "react";
import { Navbar as OriginalNavbar } from "@/sections/Navbar";
import { Hero as OriginalHero } from "@/sections/Hero";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";
import ServicesGrid from "./components/ServicesGrid";
import AuthTabs from "./components/AuthTabs";
import Sponsors from "./components/Sponsors";

export const App = () => {
  return (
    <div className="bg-[#0d1117] text-stone-50 font-dm_sans overflow-x-hidden antialiased">
      <OriginalNavbar />
      <OriginalHero />
      <Main />

      {/* Sección de Introducción a los Nuevos Servicios */}
      <section className="bg-[#0d1117] pt-20 pb-8 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-100 font-outfit uppercase">
          Una sola app, todo lo que necesitas
        </h2>
        <p className="mt-4 text-lg md:text-xl text-stone-400 font-medium">
          Elige el servicio que mejor se adapte a tu día a día.
        </p>
      </section>

      <ServicesGrid />
      <AuthTabs />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;