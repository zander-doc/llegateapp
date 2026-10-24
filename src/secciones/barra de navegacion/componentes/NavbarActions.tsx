export const NavbarActions = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 no-underline">
      <div className="items-center box-border caret-transparent gap-x-2.5 hidden min-h-0 min-w-0 outline-[3px] gap-y-2.5 no-underline md:flex md:min-h-[auto] md:min-w-[auto]">
        <a
          href="https://play.google.com/store/apps/details?id=com.llegateapp.app"
          className="items-center bg-black box-border caret-transparent gap-x-[9px] inline-flex justify-center max-w-[280px] min-h-0 min-w-0 outline-[3px] relative gap-y-[9px] no-underline w-full border overflow-hidden px-3.5 py-2 rounded-[9px] border-solid border-white/30 md:flex md:justify-normal md:max-w-none md:min-h-[auto] md:min-w-[auto] md:w-auto after:accent-auto after:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(0,0,0,0))] after:box-border after:caret-transparent after:text-stone-50 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-dm_sans hover:shadow-[rgba(255,106,13,0.22)_0px_10px_30px_0px] hover:border-white/40"
        >
          <span className="items-center box-border caret-transparent flex shrink-0 justify-center min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
            <img
              src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/icon-1.svg"
              alt="Icon"
              className="box-border caret-transparent h-5 outline-[3px] no-underline w-5"
            />
          </span>
          <span className="items-start box-border caret-transparent gap-x-px flex flex-col min-h-0 min-w-0 outline-[3px] gap-y-px no-underline md:min-h-[auto] md:min-w-[auto]">
            <span className="box-border caret-transparent text-white/70 hidden text-[9px] font-semibold tracking-[1.26px] leading-[9px] outline-[3px] no-underline uppercase">
              {"DISPONIBLE EN"}
            </span>
            <span className="box-border caret-transparent block text-[15px] font-bold tracking-[-0.3px] leading-[17.25px] min-h-0 min-w-0 outline-[3px] no-underline font-outfit md:min-h-[auto] md:min-w-[auto]">
              {"Google Play"}
            </span>
          </span>
        </a>
        <a
          href="https://app.llegateapp.com/"
          className="items-center bg-black box-border caret-transparent gap-x-[9px] inline-flex justify-center max-w-[280px] min-h-0 min-w-0 outline-[3px] relative gap-y-[9px] no-underline w-full border overflow-hidden px-3.5 py-2 rounded-[9px] border-solid border-white/30 md:flex md:justify-normal md:max-w-none md:min-h-[auto] md:min-w-[auto] md:w-auto after:accent-auto after:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(0,0,0,0))] after:box-border after:caret-transparent after:text-stone-50 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-dm_sans hover:shadow-[rgba(255,106,13,0.22)_0px_10px_30px_0px] hover:border-white/40"
        >
          <span className="items-center box-border caret-transparent flex shrink-0 justify-center min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
            <img
              src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/icon-2.svg"
              alt="Icon"
              className="box-border caret-transparent h-5 outline-[3px] no-underline w-5"
            />
          </span>
          <span className="items-start box-border caret-transparent gap-x-px flex flex-col min-h-0 min-w-0 outline-[3px] gap-y-px no-underline md:min-h-[auto] md:min-w-[auto]">
            <span className="box-border caret-transparent text-white/70 hidden text-[9px] font-semibold tracking-[1.26px] leading-[9px] outline-[3px] no-underline uppercase">
              {"ÚSALA EN LA WEB"}
            </span>
            <span className="box-border caret-transparent block text-[15px] font-bold tracking-[-0.3px] leading-[17.25px] min-h-0 min-w-0 outline-[3px] no-underline font-outfit md:min-h-[auto] md:min-w-[auto]">
              {"iPhone"}
            </span>
          </span>
        </a>
      </div>
      <button
        aria-label="Abrir menú"
        className="items-center bg-transparent caret-transparent gap-x-[5px] flex flex-col h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px] text-center no-underline w-10 border p-2 border-white/10 md:hidden md:min-h-0 md:min-w-0"
      >
        <span className="bg-stone-50 box-border caret-transparent block h-[1.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-5 md:min-h-0 md:min-w-0"></span>
        <span className="bg-stone-50 box-border caret-transparent block h-[1.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-5 md:min-h-0 md:min-w-0"></span>
        <span className="bg-stone-50 box-border caret-transparent block h-[1.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-5 md:min-h-0 md:min-w-0"></span>
      </button>
    </div>
  );
};