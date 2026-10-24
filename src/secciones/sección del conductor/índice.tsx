import { DriverBenefits } from "./componentes/beneficio para el conductor";
import { DriverReasons } from "./componentes/DriverReasons";

export const DriverSection = () => {
  return (
    <section className="bg-neutral-900 border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent outline-[3px] relative no-underline overflow-hidden py-11 border-b-white/10 border-b border-solid md:py-20">
      <div className="bg-[linear-gradient(135deg,rgba(0,0,0,0),rgba(255,106,13,0.04))] box-border caret-transparent h-full outline-[3px] pointer-events-none absolute no-underline w-6/12 right-0 top-0"></div>
      <div className="items-center box-border caret-transparent gap-x-12 grid grid-cols-[1fr] max-w-[1400px] outline-[3px] relative gap-y-12 no-underline w-full mx-auto px-4 md:gap-x-[72px] md:grid-cols-[1fr_1fr] md:gap-y-[72px] md:px-10">
        <DriverBenefits />
        <DriverReasons />
      </div>
    </section>
  );
};