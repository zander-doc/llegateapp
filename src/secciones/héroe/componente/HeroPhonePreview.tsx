export const HeroPhonePreview = () => {
  return (
    <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline origin-[50%_0%] -mt-5 scale-[0.85] md:text-start md:transform-none md:origin-[50%_50%] md:mt-0">
      <div className="bg-neutral-950 shadow-[rgba(255,106,13,0.2)_0px_60px_120px_0px,rgba(255,255,255,0.08)_0px_0px_0px_1px,rgba(255,255,255,0.06)_0px_0px_0px_1px_inset,rgba(255,106,13,0.08)_0px_0px_80px_0px] box-border caret-transparent h-[540px] min-h-[auto] min-w-[auto] outline-[3px] relative text-center no-underline w-[270px] p-2.5 rounded-[44px] md:text-start">
        <div className="bg-black box-border caret-transparent h-[26px] outline-[3px] absolute text-center no-underline translate-x-[-45px] w-[90px] z-[2] rounded-[13px] left-2/4 top-3.5 md:text-start md:translate-x-[-50.0%]"></div>
        <div className="bg-neutral-950 box-border caret-transparent h-full outline-[3px] relative text-center no-underline w-full overflow-hidden pb-7 rounded-[34px] md:text-start">
          <img
            src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/img/uploaded-asset-1792841812839-0.png"
            alt="Captura de pantalla de la app Llegateapp mostrando el mapa de Venezuela con conductores disponibles cerca"
            className="box-border caret-transparent h-full max-w-full object-cover object-[50%_0%] outline-[3px] text-center no-underline w-full md:text-start"
          />
        </div>
      </div>
    </div>
  );
};