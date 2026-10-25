import { useDataSaver } from "@/context/DataSaverContext";
import { Leaf } from "lucide-react";

export const NavbarActions = () => {
  const { isDataSaverEnabled, toggleDataSaver } = useDataSaver();
  return (
    <div className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 no-underline">
      <button
        onClick={toggleDataSaver}
        className={`flex items-center gap-2 text-sm transition-colors ${isDataSaverEnabled ? "text-neonOrange-500" : "text-stone-300 hover:text-white"}`}
        aria-label="Modo Ahorro"
      >
        <Leaf className="w-4 h-4" />
        <span>Modo Ahorro</span>
      </button>      <div className="items-center box-border caret-transparent gap-x-2.5 hidden min-h-0 min-w-0 outline-[3px] gap-y-2.5 no-underline md:flex md:min-h-[auto] md:min-w-[auto]">
        <a href="https://play.google.com/store/apps/details?id=com.llegateapp.app" className="items-center bg-black box-border caret-transparent gap-x-[9px] inline-flex justify-center max-w-[280px] min-h-0 min-w-0 outline-[3px] relative gap-y-[9px] no-underline w-full border overflow-hidden px-3.5 py-2 rounded-[9px] border-solid border-white/30 md:flex md:justify-normal md:max-w-none md:min-h-[auto] md:min-w-[auto] md:w-auto"><span className="items-center box-border caret-transparent flex shrink-0 justify-center min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]"><img src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/icon-1.svg" alt="Icon" className="box-border caret-transparent h-5 outline-[3px] no-underline w-5" /></span><span className="items-start box-border caret-transparent gap-x-px flex flex-col min-h-0 min-w-0 outline-[3px] gap-y-px no-underline md:min-h-[auto] md:min-w-[auto]"><span className="box-border caret-transparent text-white/70 hidden text-[9px] font-semibold tracking-[1.26px] leading-[9px] outline-[3px] no-underline uppercase">DISPONIBLE EN</span><span className="box-border caret-transparent block text-[15px] font-bold tracking-[-0.3px] leading-[17.25px] min-h-0 min-w-0 outline-[3px] no-underline font-outfit md:min-h-[auto] md:min-w-[auto]">Google Play</span></span></a>
      </div>
      <button aria-label="Abrir menú" className="items-center bg-transparent caret-transparent gap-x-[5px] flex flex-col h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px] text-center no-underline w-10 border p-2 border-white/10 md:hidden md:min-h-0 md:min-w-0"><span className="bg-stone-50 box-border caret-transparent block h-[1.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-5 md:min-h-0 md:min-w-0"></span><span className="bg-stone-50 box-border caret-transparent block h-[1.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-5 md:min-h-0 md:min-w-0"></span><span className="bg-stone-50 box-border caret-transparent block h-[1.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-5 md:min-h-0 md:min-w-0"></span></button>
    </div>
  );
};