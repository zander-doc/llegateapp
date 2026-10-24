export const FooterContact = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
      <div className="box-border caret-transparent text-white/80 text-[10px] font-extrabold tracking-[1.8px] leading-4 outline-[3px] no-underline uppercase mb-5">
        {"CONTACTO"}
      </div>
      <a
        href="mailto://llegateapp.2026@gmail.com"
        className="items-center box-border caret-transparent text-white/60 gap-x-2.5 flex text-sm leading-[22.4px] outline-[3px] gap-y-2.5 no-underline mb-3 hover:text-stone-50"
      >
        <img
          src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/icon-8.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-[18px] opacity-80 outline-[3px] no-underline w-[18px]"
        />
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          {"llegateapp.2026@gmail.com"}
        </span>
      </a>
      <a
        href="https://wa.me/584124634040"
        className="items-center box-border caret-transparent text-white/60 gap-x-2.5 flex text-sm leading-[22.4px] outline-[3px] gap-y-2.5 no-underline mb-3 hover:text-stone-50"
      >
        <img
          src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/icon-9.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-[18px] opacity-80 outline-[3px] no-underline w-[18px]"
        />
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          {"WhatsApp: +58 412 4634040"}
        </span>
      </a>
    </div>
  );
};