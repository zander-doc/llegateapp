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
    <div className="bg-[#0d1117] text-stone-50 font-dm_sans overflow-x-hidden">
      <OriginalNavbar />
      <OriginalHero />
      <Main />
      <ServicesGrid />
      <AuthTabs />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;