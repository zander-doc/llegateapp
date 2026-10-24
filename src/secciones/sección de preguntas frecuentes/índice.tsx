import { FaqAccordion } from "./componentes/FaqAccordion";

export const FaqSection = () => {
  return (
    <section id="faq" className="border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent outline-[3px] relative no-underline overflow-hidden py-11 border-b-white/10 border-b border-solid md:py-20">
      <div className="box-border caret-transparent max-w-[1400px] outline-[3px] no-underline w-full mx-auto px-4 md:px-10">
        <div className="items-center box-border caret-transparent text-orange-500 gap-x-2.5 flex text-[11px] font-bold tracking-[2.42px] leading-[17.6px] outline-[3px] gap-y-2.5 no-underline uppercase mb-12 before:accent-auto before:bg-orange-500 before:box-border before:caret-transparent before:text-orange-500 before:block before:text-[11px] before:not-italic before:normal-nums before:font-bold before:h-px before:tracking-[2.42px] before:leading-[17.6px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:uppercase before:visible before:w-6 before:border-separate before:font-dm_sans">
          {"06 / PREGUNTAS FRECUENTES"}
        </div>
        <h2 className="box-border caret-transparent text-[40px] font-extrabold tracking-[-1.6px] leading-[35.2px] outline-[3px] no-underline font-outfit md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px]">
          {"¿Tienes preguntas?"}
          <br className="box-border caret-transparent text-[40px] tracking-[-1.6px] leading-[35.2px] outline-[3px] no-underline md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px]" />
          <span className="box-border caret-transparent text-orange-500 text-[40px] italic tracking-[-1.6px] leading-[35.2px] outline-[3px] no-underline md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px]">
            {"Tenemos respuestas."}
          </span>
        </h2>
        <div className="box-border caret-transparent max-w-[720px] outline-[3px] no-underline mt-10 mx-auto md:mt-16">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
};