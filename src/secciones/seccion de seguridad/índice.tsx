import { SafetyFeatures } from "@/sections/SafetySection/components/SafetyFeatures";
import { DownloadCallToAction } from "@/components/DownloadCallToAction";

export const SafetySection = () => {
  return (
    <section id="seguridad" className="border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent outline-[3px] relative no-underline overflow-hidden py-11 border-b-white/10 border-b border-solid md:py-20">
      <div className="bg-[radial-gradient(at_25%_50%,rgba(255,106,13,0.09),rgba(0,0,0,0)_60%)] box-border caret-transparent outline-[3px] pointer-events-none absolute no-underline inset-0"></div>
      <div className="items-center box-border caret-transparent gap-x-10 grid grid-cols-[1fr] max-w-[1400px] outline-[3px] relative gap-y-10 no-underline w-full mx-auto px-4 md:gap-x-[72px] md:grid-cols-[1fr_1fr] md:gap-y-[72px] md:px-10">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          <div className="items-center box-border caret-transparent text-orange-500 gap-x-2.5 flex text-[11px] font-bold tracking-[2.42px] leading-[17.6px] outline-[3px] gap-y-2.5 no-underline uppercase mb-5 before:accent-auto before:bg-orange-500 before:box-border before:caret-transparent before:text-orange-500 before:block before:text-[11px] before:not-italic before:normal-nums before:font-bold before:h-px before:tracking-[2.42px] before:leading-[17.6px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:uppercase before:visible before:w-6 before:border-separate before:font-dm_sans">
            {"03 / SEGURIDAD"}
          </div>
          <h2 className="box-border caret-transparent text-[33.75px] font-extrabold tracking-[-1.35px] leading-[34.425px] outline-[3px] no-underline font-outfit md:text-[64px] md:tracking-[-2.56px] md:leading-[65.28px]">
            {"Tu seguridad"}
            <br className="box-border caret-transparent text-[33.75px] tracking-[-1.35px] leading-[34.425px] outline-[3px] no-underline md:text-[64px] md:tracking-[-2.56px] md:leading-[65.28px]" />
            <span className="box-border caret-transparent text-orange-500 text-[33.75px] italic tracking-[-1.35px] leading-[34.425px] outline-[3px] no-underline md:text-[64px] md:tracking-[-2.56px] md:leading-[65.28px]">
              {"no se negocia."}
            </span>
          </h2>
          <p className="box-border caret-transparent text-white/80 text-[17px] leading-[28.05px] outline-[3px] no-underline mt-5">
            {
              "\nCada chofer en Llegateapp pasa un proceso riguroso antes de aceptar su primer viaje. Y durante el viaje, tienes herramientas para sentirte seguro siempre.\n"
            }
          </p>
        </div>
        <SafetyFeatures />
      </div>
      <div className="box-border caret-transparent max-w-[1400px] outline-[3px] relative no-underline w-full mx-auto px-4 md:px-10">
        <DownloadCallToAction
          message="Tu seguridad es nuestra prioridad. Viaja tranquilo."
          containerVariant="mt-7 md:mt-10"
        />
      </div>
    </section>
  );
};