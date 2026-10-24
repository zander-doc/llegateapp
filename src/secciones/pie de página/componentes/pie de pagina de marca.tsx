export const FooterBrand = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
      <div className="items-center box-border caret-transparent gap-x-3 flex outline-[3px] gap-y-3 no-underline mb-5">
        <img
          src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/img/uploaded-asset-1792840981980-0.png"
          alt="Logo de Llegateapp — app de mototaxis y taxis"
          className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[150px]"
        />
      </div>
      <p className="box-border caret-transparent text-white/80 text-sm leading-[23.1px] max-w-[340px] outline-[3px] no-underline">
        {
          "La primera app de mototaxis y taxis hecha en Venezuela, para Venezuela. Y desde aquí, para toda Venezuela."
        }
      </p>
    </div>
  );
};