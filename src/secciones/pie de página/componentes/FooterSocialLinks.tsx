export const FooterSocialLinks = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
      <div className="box-border caret-transparent text-white/80 text-[10px] font-extrabold tracking-[1.8px] leading-4 outline-[3px] no-underline uppercase mb-5">
        {"SÍGUENOS"}
      </div>
      <a
        href="https://instagram.com/llegateapp"
        className="items-center box-border caret-transparent text-white/60 gap-x-2.5 flex text-sm leading-[22.4px] outline-[3px] gap-y-2.5 no-underline mb-3 hover:text-stone-50"
      >
        <img
          src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/icon-6.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-[18px] opacity-80 outline-[3px] no-underline w-[18px]"
        />
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          {"@llegateapp"}
        </span>
      </a>
      <a
        href="https://tiktok.com/@llegateapp"
        className="items-center box-border caret-transparent text-white/60 gap-x-2.5 flex text-sm leading-[22.4px] outline-[3px] gap-y-2.5 no-underline mb-3 hover:text-stone-50"
      >
        <img
          src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/icon-7.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-[18px] opacity-80 outline-[3px] no-underline w-[18px]"
        />
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          {"@llegateapp"}
        </span>
      </a>
    </div>
  );
};