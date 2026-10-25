import React from "react";
import { Navbar as OriginalNavbar } from "@/sections/Navbar";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";
import NewNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import AuthTabs from "./components/AuthTabs";
import Sponsors from "./components/Sponsors";

export const App = () => {
  return (
    <div className="bg-[#0d1117] text-stone-50 font-dm_sans overflow-x-hidden">
      <NewNavbar />
      <Hero />
      <ServicesGrid />
      <Main />
      <AuthTabs />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;