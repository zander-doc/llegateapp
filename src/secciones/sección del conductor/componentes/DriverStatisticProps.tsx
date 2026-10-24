export type DriverStatisticProps = {
  statistic: string;
  description: string;
};

export const DriverStatistic = (props: DriverStatisticProps) => {
  return (
    <div className="bg-neutral-950 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline border p-[22px] border-solid border-white/10">
      <div className="box-border caret-transparent text-orange-500 text-[34px] font-extrabold tracking-[-1.02px] leading-[34px] outline-[3px] no-underline font-outfit">
        {props.statistic}
      </div>
      <div className="box-border caret-transparent text-white/80 text-[15px] leading-[22.5px] outline-[3px] no-underline mt-2">
        {props.description}
      </div>
    </div>
  );
};