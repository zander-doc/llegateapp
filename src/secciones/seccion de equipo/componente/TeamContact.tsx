export const TeamContact = () => {
  return (
    <div className="items-center border-b-gray-200 border-l-gray-200 border-r-gray-200 box-border caret-transparent gap-x-4 flex flex-wrap justify-between outline-[3px] gap-y-4 no-underline mt-12 pt-7 border-t-white/10 border-t">
      <p className="box-border caret-transparent text-white/80 text-base leading-[25.6px] min-h-[auto] min-w-[auto] outline-[3px] no-underline">
        {"\n¿Quieres trabajar con nosotros o proponer una alianza?\n"}
      </p>
      <a
        href="mailto://llegateapp.2026@gmail.com"
        className="items-center box-border caret-transparent gap-x-2.5 flex font-bold tracking-[0.36px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 no-underline border px-[18px] py-3 border-solid border-white/10 hover:text-orange-500 hover:border-orange-500"
      >
        {"llegateapp.2026@gmail.com"}
        <img
          src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/icon-5.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 outline-[3px] no-underline w-4"
        />
      </a>
    </div>
  );
};