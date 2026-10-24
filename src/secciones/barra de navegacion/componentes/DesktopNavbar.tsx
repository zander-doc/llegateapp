export const DesktopNavbar = () => {
  return (
    <div className="box-border caret-transparent gap-x-9 hidden text-[13px] font-medium leading-[20.8px] min-h-0 min-w-0 outline-[3px] gap-y-9 no-underline md:flex md:min-h-[auto] md:min-w-[auto]">
      <a
        href="#como"
        className="box-border caret-transparent text-white/70 inline tracking-[0.26px] min-h-0 min-w-0 outline-[3px] no-underline md:block md:min-h-[auto] md:min-w-[auto] hover:text-stone-50"
      >
        {"Cómo funciona"}
      </a>
      <a
        href="#servicios"
        className="box-border caret-transparent text-white/70 inline tracking-[0.26px] min-h-0 min-w-0 outline-[3px] no-underline md:block md:min-h-[auto] md:min-w-[auto] hover:text-stone-50"
      >
        {"Servicios"}
      </a>
      <a
        href="#seguridad"
        className="box-border caret-transparent text-white/70 inline tracking-[0.26px] min-h-0 min-w-0 outline-[3px] no-underline md:block md:min-h-[auto] md:min-w-[auto] hover:text-stone-50"
      >
        {"Seguridad"}
      </a>
      <a
        href="#equipo"
        className="box-border caret-transparent text-white/70 inline tracking-[0.26px] min-h-0 min-w-0 outline-[3px] no-underline md:block md:min-h-[auto] md:min-w-[auto] hover:text-stone-50"
      >
        {"Equipo"}
      </a>
      <a
        href="#faq"
        className="box-border caret-transparent text-white/70 inline tracking-[0.26px] min-h-0 min-w-0 outline-[3px] no-underline md:block md:min-h-[auto] md:min-w-[auto] hover:text-stone-50"
      >
        {"FAQ"}
      </a>
    </div>
  );
};