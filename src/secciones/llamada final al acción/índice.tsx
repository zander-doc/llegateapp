import { DownloadButtons } from "@/components/DownloadButtons";

export const FinalCallToAction = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] relative no-underline overflow-hidden py-11 md:py-20">
      <div className="bg-[radial-gradient(circle,rgba(255,106,13,0.12),rgba(0,0,0,0)_60%)] box-border caret-transparent outline-[3px] pointer-events-none absolute no-underline inset-0"></div>
      <div className="box-border caret-transparent gap-x-6 grid grid-cols-[1fr] justify-items-center max-w-[1400px] outline-[3px] relative gap-y-6 text-center no-underline w-full mx-auto px-4 md:px-10">
        <h2 className="items-center box-border caret-transparent flex flex-col text-[56.25px] tracking-[1.6875px] leading-[49.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline font-bebas_neue md:text-[153.6px] md:tracking-[4.608px] md:leading-[135.168px]">
          <span className="box-border caret-transparent block text-[56.25px] tracking-[1.6875px] leading-[49.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-[153.6px] md:tracking-[4.608px] md:leading-[135.168px]">
            {"Descarga."}
          </span>
          <span className="box-border caret-transparent text-orange-500 block text-[56.25px] tracking-[1.6875px] leading-[49.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-[153.6px] md:tracking-[4.608px] md:leading-[135.168px]">
            {"Llega."}
          </span>
        </h2>
        <p className="box-border caret-transparent text-white/80 max-w-[480px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mx-auto">
          {
            "Llegateapp ya está disponible en toda Venezuela. Mototaxi o taxi, en la misma app: descárgala y empieza a moverte."
          }
        </p>
        <DownloadButtons
          containerVariant="gap-x-3 flex-col justify-center min-h-[auto] min-w-[auto] gap-y-3 w-full md:gap-x-4 md:flex-row md:gap-y-4 md:w-auto"
          buttonVariant="after:text-center"
          contentVariant=""
        />
      </div>
    </section>
  );
};