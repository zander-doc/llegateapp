import { DownloadButtons } from "@/components/DownloadButtons";

export const ComparisonCallToAction = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-9 grid grid-cols-[1fr] outline-[3px] gap-y-9 no-underline mt-20 md:gap-x-12 md:grid-cols-[1.4fr_1fr] md:gap-y-12">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative no-underline pl-0 md:pl-[52px]">
        <div className="box-border caret-transparent text-orange-500 text-6xl italic font-extrabold tracking-[-3px] leading-[42px] outline-[3px] static no-underline -mb-3 left-0 -top-3.5 font-outfit md:text-[110px] md:tracking-[-5.5px] md:leading-[77px] md:absolute md:mb-0">
          {'"'}
        </div>
        <p className="box-border caret-transparent text-[18.75px] font-semibold tracking-[-0.375px] leading-[23.4375px] outline-[3px] no-underline font-outfit md:text-[30.72px] md:tracking-[-0.6144px] md:leading-[38.4px]">
          {
            "\nLa diferencia no es que sea una app. La diferencia es que ahora llegar a tu destino es\n"
          }
          <span className="box-border caret-transparent text-orange-500 text-[18.75px] italic tracking-[-0.375px] leading-[23.4375px] outline-[3px] no-underline md:text-[30.72px] md:tracking-[-0.6144px] md:leading-[38.4px]">
            {"la parte más fácil de tu día"}
          </span>
        </p>
      </div>
      <div className="box-border caret-transparent gap-x-3.5 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-3.5 no-underline">
        <span className="box-border caret-transparent text-orange-500 block text-[13px] font-extrabold tracking-[0.78px] leading-[20.8px] min-h-[auto] min-w-[auto] outline-[3px] no-underline uppercase">
          {"Descarga Llegateapp ahora"}
        </span>
        <DownloadButtons
          containerVariant="gap-x-4 justify-center min-h-[auto] min-w-[auto] gap-y-4"
          buttonVariant="after:text-start"
          contentVariant=""
        />
      </div>
    </div>
  );
};