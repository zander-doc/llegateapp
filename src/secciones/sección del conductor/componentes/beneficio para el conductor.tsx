import { DriverStatistic } from "@/sections/DriverSection/components/DriverStatistic";
import { DownloadButtons } from "@/components/DownloadButtons";

export const DriverBenefits = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
      <div className="items-center box-border caret-transparent text-orange-500 gap-x-2.5 flex text-[11px] font-bold tracking-[2.42px] leading-[17.6px] outline-[3px] gap-y-2.5 no-underline uppercase mb-5 before:accent-auto before:bg-orange-500 before:box-border before:caret-transparent before:text-orange-500 before:block before:text-[11px] before:not-italic before:normal-nums before:font-bold before:h-px before:tracking-[2.42px] before:leading-[17.6px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:uppercase before:visible before:w-6 before:border-separate before:font-dm_sans">
        {"05 / PARA CONDUCTORES"}
      </div>
      <h2 className="box-border caret-transparent text-[33.75px] font-extrabold tracking-[-1.35px] leading-[34.425px] outline-[3px] no-underline font-outfit md:text-[64px] md:tracking-[-2.56px] md:leading-[65.28px]">
        {"Más viajes."}
        <br className="box-border caret-transparent text-[33.75px] tracking-[-1.35px] leading-[34.425px] outline-[3px] no-underline md:text-[64px] md:tracking-[-2.56px] md:leading-[65.28px]" />
        <span className="box-border caret-transparent text-orange-500 text-[33.75px] italic tracking-[-1.35px] leading-[34.425px] outline-[3px] no-underline md:text-[64px] md:tracking-[-2.56px] md:leading-[65.28px]">
          {"Mejor pago."}
        </span>
      </h2>
      <p className="box-border caret-transparent text-white/80 text-[17px] leading-[28.05px] outline-[3px] no-underline mt-5">
        {
          "Si manejas mototaxi o taxi en Venezuela, Llegateapp es tu próxima jugada. Más pasajeros, menos tiempo muerto, más reales."
        }
      </p>
      <div className="box-border caret-transparent gap-x-3.5 grid grid-cols-[1fr] outline-[3px] gap-y-3.5 no-underline my-8 md:grid-cols-[1fr_1fr]">
        <DriverStatistic
          statistic="+40%"
          description="más viajes que esperando en la línea"
        />
        <DriverStatistic
          statistic="$0"
          description="de comisión los primeros 30 días"
        />
        <DriverStatistic
          statistic="24/7"
          description="tú decides cuándo prender la app"
        />
        <DriverStatistic
          statistic="$"
          description="pagos al instante, sin esperar semanas"
        />
      </div>
      <p className="box-border caret-transparent text-white/80 text-[15px] leading-6 outline-[3px] no-underline mb-3.5">
        {"Regístrate como conductor desde la app — moto o carro."}
      </p>
      <DownloadButtons
        containerVariant="gap-x-4 justify-start gap-y-4"
        buttonVariant="after:text-start"
        contentVariant=""
      />
    </div>
  );
};