export type SafetyFeatureCardProps = {
  title: string;
  description: string;
};

export const SafetyFeatureCard = (props: SafetyFeatureCardProps) => {
  return (
    <div className="bg-neutral-950 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline border px-4 py-5 border-solid border-white/10 md:px-6 md:py-7">
      <span className="box-border caret-transparent text-orange-500 block text-[22px] font-black leading-[35.2px] outline-[3px] no-underline mb-3.5">
        {"✓"}
      </span>
      <div className="box-border caret-transparent text-[15px] font-bold leading-6 outline-[3px] no-underline mb-1.5">
        {props.title}
      </div>
      <div className="box-border caret-transparent text-white/80 text-base leading-[25.6px] outline-[3px] no-underline">
        {props.description}
      </div>
    </div>
  );
};