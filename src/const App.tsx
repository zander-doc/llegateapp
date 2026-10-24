import { Navbar } from "@/sections/Navbar";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <div className="accent-auto bg-black box-border caret-transparent text-stone-50 block text-lg not-italic normal-nums font-normal tracking-[normal] leading-[28.8px] list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-dm_sans">
      <Navbar />
      <div className="backdrop-blur-xl bg-black/95 border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent hidden flex-col outline-[3px] sticky no-underline z-[99] pt-5 pb-7 px-6 border-b-white/10 border-b border-solid top-[57px]">
        <a
          href="#como"
          className="border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent text-lg font-bold tracking-[-0.36px] leading-[28.8px] outline-[3px] no-underline py-3.5 border-b-white/10 border-b border-solid font-outfit md:text-[22px] md:tracking-[-0.44px] md:leading-[35.2px] hover:text-orange-500"
        >
          {"Cómo funciona"}
        </a>
        <a
          href="#servicios"
          className="border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent text-lg font-bold tracking-[-0.36px] leading-[28.8px] outline-[3px] no-underline py-3.5 border-b-white/10 border-b border-solid font-outfit md:text-[22px] md:tracking-[-0.44px] md:leading-[35.2px] hover:text-orange-500"
        >
          {"Servicios"}
        </a>
        <a
          href="#seguridad"
          className="border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent text-lg font-bold tracking-[-0.36px] leading-[28.8px] outline-[3px] no-underline py-3.5 border-b-white/10 border-b border-solid font-outfit md:text-[22px] md:tracking-[-0.44px] md:leading-[35.2px] hover:text-orange-500"
        >
          {"Seguridad"}
        </a>
        <a
          href="#equipo"
          className="border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent text-lg font-bold tracking-[-0.36px] leading-[28.8px] outline-[3px] no-underline py-3.5 border-b-white/10 border-b border-solid font-outfit md:text-[22px] md:tracking-[-0.44px] md:leading-[35.2px] hover:text-orange-500"
        >
          {"Equipo"}
        </a>
        <a
          href="#faq"
          className="box-border caret-transparent text-lg font-bold tracking-[-0.36px] leading-[28.8px] outline-[3px] no-underline py-3.5 font-outfit md:text-[22px] md:tracking-[-0.44px] md:leading-[35.2px] hover:text-orange-500 hover:border-b-orange-500"
        >
          {"FAQ"}
        </a>
        <div className="box-border caret-transparent gap-x-2.5 flex flex-col outline-[3px] gap-y-2.5 no-underline mt-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.llegateapp.app"
            className="items-center bg-black box-border caret-transparent gap-x-3.5 flex justify-center max-w-[280px] outline-[3px] relative gap-y-3.5 no-underline w-full border overflow-hidden pl-[18px] pr-7 py-3 rounded-xl border-solid border-white/30 md:justify-normal md:max-w-none md:w-auto after:accent-auto after:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(0,0,0,0))] after:box-border after:caret-transparent after:text-stone-50 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-dm_sans hover:shadow-[rgba(255,106,13,0.25)_0px_16px_48px_0px,rgba(255,255,255,0.15)_0px_0px_0px_1px] hover:border-white/40"
          >
            <span className="items-center box-border caret-transparent flex shrink-0 justify-center outline-[3px] no-underline">
              <img
                src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent h-7 outline-[3px] no-underline w-7"
              />
            </span>
            <span className="items-start box-border caret-transparent gap-x-px flex flex-col outline-[3px] gap-y-px no-underline">
              <span className="box-border caret-transparent text-white/70 block text-[9px] font-semibold tracking-[1.26px] leading-[9px] outline-[3px] no-underline uppercase">
                {"DISPONIBLE EN"}
              </span>
              <span className="box-border caret-transparent block text-[22px] font-bold tracking-[-0.44px] leading-[25.3px] outline-[3px] no-underline font-outfit">
                {"Google Play"}
              </span>
            </span>
          </a>
          <a
            href="https://app.llegateapp.com/"
            className="items-center bg-black box-border caret-transparent gap-x-3.5 flex justify-center max-w-[280px] outline-[3px] relative gap-y-3.5 no-underline w-full border overflow-hidden pl-[18px] pr-7 py-3 rounded-xl border-solid border-white/30 md:justify-normal md:max-w-none md:w-auto after:accent-auto after:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(0,0,0,0))] after:box-border after:caret-transparent after:text-stone-50 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-dm_sans hover:shadow-[rgba(255,106,13,0.25)_0px_16px_48px_0px,rgba(255,255,255,0.15)_0px_0px_0px_1px] hover:border-white/40"
          >
            <span className="items-center box-border caret-transparent flex shrink-0 justify-center outline-[3px] no-underline">
              <img
                src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent h-[26px] outline-[3px] no-underline w-[26px]"
              />
            </span>
            <span className="items-start box-border caret-transparent gap-x-px flex flex-col outline-[3px] gap-y-px no-underline">
              <span className="box-border caret-transparent text-white/70 block text-[9px] font-semibold tracking-[1.26px] leading-[9px] outline-[3px] no-underline uppercase">
                {"ÚSALA EN LA WEB"}
              </span>
              <span className="box-border caret-transparent block text-[22px] font-bold tracking-[-0.44px] leading-[25.3px] outline-[3px] no-underline font-outfit">
                {"iPhone"}
              </span>
            </span>
          </a>
        </div>
      </div>
      <Main />
      <Footer />
    </div>
  );
};