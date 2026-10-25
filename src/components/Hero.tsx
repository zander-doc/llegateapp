import React from "react";
import { Hero as OriginalHero } from "@/sections/Hero";

export default function Hero() {
  return (
    <>
      <OriginalHero />
      <div className="bg-[#0d1117] text-center py-8 px-4">
        <p className="box-border caret-transparent text-[40px] font-extrabold tracking-[-1.6px] leading-[35.2px] outline-[3px] no-underline font-outfit md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px]">
          Elige el servicio que mejor se adapte a tu día a día.
        </p>
      </div>
    </>
  );
}
