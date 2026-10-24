export type StepCardProps = {
  stepLabel: string;
  title: string;
  description: string;
  variantClass: string;
};

export const StepCard = (props: StepCardProps) => {
  return (
    <div
      className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative no-underline px-6 py-8 md:px-9 md:py-11 ${props.variantClass}`}
    >
      <div className="box-border caret-transparent h-full outline-[3px] absolute no-underline w-0.5 left-0 inset-y-0 md:h-0.5 md:w-full md:bottom-auto"></div>
      <div className="box-border caret-transparent text-orange-500 text-[10px] font-extrabold tracking-[2.2px] leading-4 outline-[3px] no-underline mb-5">
        {props.stepLabel}
      </div>
      <h3 className="box-border caret-transparent text-[26px] font-extrabold tracking-[-0.52px] leading-[28.6px] outline-[3px] no-underline mb-3.5 font-outfit">
        {props.title}
      </h3>
      <p className="box-border caret-transparent text-white/80 text-[17px] leading-[28.05px] outline-[3px] no-underline">
        {props.description}
      </p>
    </div>
  );
};