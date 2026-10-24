export const FooterNavigation = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
      <div className="box-border caret-transparent text-white/80 text-[10px] font-extrabold tracking-[1.8px] leading-4 outline-[3px] no-underline uppercase mb-5">
        {"NAVEGACIÓN"}
      </div>
      <a
        href="#como"
        className="items-center box-border caret-transparent text-white/60 gap-x-2.5 flex text-sm leading-[22.4px] outline-[3px] gap-y-2.5 no-underline mb-3 hover:text-stone-50"
      >
        {"Cómo funciona"}
      </a>
      <a
        href="#servicios"
        className="items-center box-border caret-transparent text-white/60 gap-x-2.5 flex text-sm leading-[22.4px] outline-[3px] gap-y-2.5 no-underline mb-3 hover:text-stone-50"
      >
        {"Servicios"}
      </a>
      <a
        href="#seguridad"
        className="items-center box-border caret-transparent text-white/60 gap-x-2.5 flex text-sm leading-[22.4px] outline-[3px] gap-y-2.5 no-underline mb-3 hover:text-stone-50"
      >
        {"Seguridad"}
      </a>
      <a
        href="#equipo"
        className="items-center box-border caret-transparent text-white/60 gap-x-2.5 flex text-sm leading-[22.4px] outline-[3px] gap-y-2.5 no-underline mb-3 hover:text-stone-50"
      >
        {"Equipo"}
      </a>
      <a
        href="#faq"
        className="items-center box-border caret-transparent text-white/60 gap-x-2.5 flex text-sm leading-[22.4px] outline-[3px] gap-y-2.5 no-underline mb-3 hover:text-stone-50"
      >
        {"FAQ"}
      </a>
      <a
        href="#faq"
        className="items-center box-border caret-transparent text-white/60 gap-x-2.5 flex text-sm leading-[22.4px] outline-[3px] gap-y-2.5 no-underline mb-3 hover:text-stone-50"
      >
        {"Política de Privacidad"}
      </a>
    </div>
  );
};