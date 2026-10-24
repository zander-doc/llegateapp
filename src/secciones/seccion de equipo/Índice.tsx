import { TeamHeader } from "@/sections/TeamSection/components/TeamHeader";
import { TeamCards } from "@/sections/TeamSection/components/TeamCards";
import { TeamContact } from "@/sections/TeamSection/components/TeamContact";

export const TeamSection = () => {
  return (
    <section id="equipo" className="border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent outline-[3px] relative no-underline overflow-hidden py-11 border-b-white/10 border-b border-solid md:py-20">
      <div className="bg-[linear-gradient(rgba(255,255,255,0.035)_1px,rgba(0,0,0,0)_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,rgba(0,0,0,0)_1px)] bg-[position:0%_0%,0%_0%] bg-size-[48px_48px,48px_48px] box-border caret-transparent [mask-image:radial-gradient(at_50%_30%,rgb(0,0,0)_20%,rgba(0,0,0,0)_75%)] outline-[3px] pointer-events-none absolute no-underline inset-0"></div>
      <div className="bg-[radial-gradient(at_80%_15%,rgba(255,106,13,0.1),rgba(0,0,0,0)_55%)] box-border caret-transparent outline-[3px] pointer-events-none absolute no-underline inset-0"></div>
      <div className="box-border caret-transparent max-w-[1400px] outline-[3px] relative no-underline w-full mx-auto px-4 md:px-10">
        <TeamHeader />
        <TeamCards />
        <TeamContact />
      </div>
    </section>
  );
};