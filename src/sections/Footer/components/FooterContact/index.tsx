export const FooterContact = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
      <div className="box-border caret-transparent text-white/80 text-[10px] font-extrabold tracking-[1.8px] leading-4 outline-[3px] no-underline uppercase mb-5">
        {"CONTACTO"}
      </div>
      <a
        href="mailto:llegateapp.2026@gmail.com"
        className="items-center box-border caret-transparent text-white/60 gap-x-2.5 flex text-sm leading-[22.4px] outline-[3px] gap-y-2.5 no-underline mb-3 hover:text-stone-50"
      >
        {"llegateapp.2026@gmail.com"}
      </a>
      <a
        href="https://wa.me/584124634040"
        className="items-center box-border caret-transparent text-white/60 gap-x-2.5 flex text-sm leading-[22.4px] outline-[3px] gap-y-2.5 no-underline mb-3 hover:text-stone-50"
      >
        {"WhatsApp: +58 412 4634040"}
      </a>
    </div>
  );
};