export const ComparisonHeader = () => {
  return (
    <div className="items-end box-border caret-transparent gap-x-9 grid grid-cols-[1fr] outline-[3px] gap-y-9 no-underline mb-14 md:gap-x-[60px] md:grid-cols-[1fr_1fr] md:gap-y-[60px] md:mb-20">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
        <div className="items-center box-border caret-transparent text-orange-500 gap-x-2.5 flex text-[11px] font-bold tracking-[2.42px] leading-[17.6px] outline-[3px] gap-y-2.5 no-underline uppercase mb-5 before:accent-auto before:bg-orange-500 before:box-border before:caret-transparent before:text-orange-500 before:block before:text-[11px] before:not-italic before:normal-nums before:font-bold before:h-px before:tracking-[2.42px] before:leading-[17.6px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:uppercase before:visible before:w-6 before:border-separate before:font-dm_sans">
          {"02 / EL CAMBIO"}
        </div>
        <h2 className="box-border caret-transparent text-[40px] font-extrabold tracking-[-1.6px] leading-[35.2px] outline-[3px] no-underline font-outfit md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px]">
          {"\nAsí pides"}
          <br className="box-border caret-transparent text-[40px] tracking-[-1.6px] leading-[35.2px] outline-[3px] no-underline md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px]" />
          {"una moto o un taxi\n"}
          <span className="box-border caret-transparent text-[40px] tracking-[-1.6px] leading-[35.2px] opacity-55 outline-[3px] decoration-orange-500 line-through decoration-4 md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px]">
            {" hoy."}
          </span>
        </h2>
      </div>
      <div className="border-b-gray-200 border-l-orange-500 border-r-gray-200 border-t-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline pl-7 border-l-2 border-solid">
        <div className="items-center box-border caret-transparent text-orange-500 gap-x-2.5 flex text-[11px] font-bold tracking-[2.42px] leading-[17.6px] outline-[3px] gap-y-2.5 no-underline uppercase mb-5 before:accent-auto before:bg-orange-500 before:box-border before:caret-transparent before:text-orange-500 before:block before:text-[11px] before:not-italic before:normal-nums before:font-bold before:h-px before:tracking-[2.42px] before:leading-[17.6px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:uppercase before:visible before:w-6 before:border-separate before:font-dm_sans">
          {"NOTA DEL EDITOR"}
        </div>
        <p className="box-border caret-transparent text-[17px] leading-[26.35px] outline-[3px] no-underline">
          {
            "\nEn Venezuela pedir un mototaxi o un taxi seguía siendo igual que hace 20 años. "
          }
          <strong className="box-border caret-transparent text-orange-500 font-bold outline-[3px] no-underline">
            {"Eso ya cambió."}
          </strong>
        </p>
      </div>
    </div>
  );
};