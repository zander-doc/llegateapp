export const TeamHeader = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline text-center mb-12 md:mb-16 md:text-start">
      <div className="items-center box-border caret-transparent text-orange-500 gap-x-2.5 flex text-[11px] font-bold tracking-[2.42px] leading-[17.6px] outline-[3px] gap-y-2.5 no-underline uppercase mb-5 before:accent-auto before:bg-orange-500 before:box-border before:caret-transparent before:text-orange-500 before:block before:text-[11px] before:not-italic before:normal-nums before:font-bold before:h-px before:tracking-[2.42px] before:leading-[17.6px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:uppercase before:visible before:w-6 before:border-separate before:font-dm_sans">
        {"01 / NUESTRO EQUIPO"}
      </div>
      <h2 className="box-border caret-transparent text-[40px] font-extrabold tracking-[-1.6px] leading-[35.2px] outline-[3px] no-underline font-outfit md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px]">
        {"Detrás de Llegateapp"}
        <br className="box-border caret-transparent text-[40px] tracking-[-1.6px] leading-[35.2px] outline-[3px] no-underline md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px]" />
        <span className="box-border caret-transparent text-orange-500 text-[40px] italic tracking-[-1.6px] leading-[35.2px] outline-[3px] no-underline md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px]">
          {"hay personas reales."}
        </span>
      </h2>
    </div>
  );
};