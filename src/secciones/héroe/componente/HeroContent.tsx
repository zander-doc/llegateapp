import { DownloadButtons } from "@/components/DownloadButtons";
import { RegistrationSocialProof } from "@/sections/Hero/components/RegistrationSocialProof";

export const HeroContent = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-12 grid grid-cols-[1fr] max-w-[1400px] min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-12 text-center no-underline w-full mx-auto px-4 md:gap-x-10 md:grid-cols-[1.15fr_1fr] md:gap-y-10 md:text-start md:px-10">
      <div className="items-center box-border caret-transparent gap-x-0 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 text-center no-underline md:[align-items:normal] md:text-start">
        <div className="items-center bg-orange-500/10 box-border caret-transparent text-orange-500 gap-x-2.5 flex text-[9px] font-bold tracking-[1.62px] leading-[14.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 text-center no-underline w-fit border border-orange-500/40 mb-3 px-2.5 py-1.5 border-solid md:text-[10px] md:tracking-[1.8px] md:leading-4 md:text-start md:mb-4 md:px-4 md:py-[9px]">
          <span className="bg-orange-500 box-border caret-transparent block shrink-0 text-[9px] h-1.5 tracking-[1.62px] leading-[14.4px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-1.5 rounded-[50%] md:text-[10px] md:tracking-[1.8px] md:leading-4 md:text-start"></span>
          {"\nVENEZUELA · DISPONIBLE AHORA\n"}
        </div>
        <h1 className="box-border caret-transparent flex flex-col text-[40px] font-extrabold tracking-[-1.6px] leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline mb-3 font-outfit md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px] md:text-start md:mb-5">
          <span className="box-border caret-transparent block text-[40px] font-extrabold tracking-[-1.6px] leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px] md:text-start font-outfit">
            {"PIDE."}
          </span>
          <span className="box-border caret-transparent block text-[40px] font-extrabold tracking-[-1.6px] leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px] md:text-start font-outfit">
            {"SÚBETE."}
          </span>
          <span className="box-border caret-transparent text-orange-500 italic block text-[40px] font-extrabold tracking-[-1.6px] leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline md:text-[83.2px] md:tracking-[-3.328px] md:leading-[73.216px] md:text-start font-outfit">
            {"LLEGA."}
          </span>
        </h1>
        <p className="box-border caret-transparent text-white/80 text-[15px] leading-[20.25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline mb-4 mx-auto md:text-[17px] md:leading-[25.5px] md:max-w-[500px] md:text-start md:mb-6 md:mx-0">
          {"\nLa primera app de mototaxis y taxis de Venezuela.\n"}
          <strong className="box-border caret-transparent text-stone-50 text-[15px] font-semibold leading-[20.25px] outline-[3px] text-center no-underline md:text-[17px] md:leading-[25.5px] md:text-start">
            {"Moto o carro, tú eliges."}
          </strong>
          {
            "\nSin esperas, sin regateos: tarifa clara, conductor verificado, llegada en minutos.\n"
          }
        </p>
        <DownloadButtons
          containerVariant="gap-x-3 flex-col min-h-[auto] min-w-[auto] gap-y-3 text-center w-full mb-6 md:gap-x-4 md:flex-row md:gap-y-4 md:text-start md:w-auto"
          buttonVariant="text-center md:text-start after:text-center after:md:text-start"
          contentVariant="text-center md:text-start"
        />
        <RegistrationSocialProof />
      </div>
      <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline md:text-start relative animate-hero-float">
        <div className="animate-hero-tilt">
          <img
            src="/telefono.webp"
            alt="Vista de la app Llegateapp con ruta activa en el mapa de Venezuela"
            className="box-border caret-transparent max-w-full object-cover outline-[3px] text-center no-underline w-[260px] h-[320px] md:w-[340px] md:h-[480px] drop-shadow-[0_30px_60px_rgba(255,106,13,0.25)]"
          />
        </div>
        <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 w-[260px] md:w-[340px] h-[40px] bg-black/30 blur-[40px] rounded-full animate-hero-glow pointer-events-none" />
      </div>
    </div>
  );
};