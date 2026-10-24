export type RoadmapPhaseProps = {
  phase: string;
  date: string;
  title: string;
  features: string[];
  connectorVariant: string;
  phaseVariant: string;
  dateVariant: string;
  featureVariant: string;
  showConnectorDot: boolean;
};

export const RoadmapPhase = (props: RoadmapPhaseProps) => {
  return (
    <div className="box-border caret-transparent outline-[3px] relative no-underline pl-12 py-9 md:pl-16">
      <div
        className={`box-border caret-transparent h-5 outline-[3px] absolute no-underline w-5 border rounded-[50%] border-solid left-3 top-[42px] ${props.connectorVariant}`}
      >
        {props.showConnectorDot ? (
          <div className="bg-orange-500 box-border caret-transparent opacity-25 outline-[3px] absolute no-underline rounded-[50%] -inset-2.5"></div>
        ) : null}
      </div>
      <div className="items-center box-border caret-transparent gap-x-4 flex outline-[3px] gap-y-4 no-underline mb-2.5">
        <span
          className={`box-border caret-transparent block text-[10px] font-extrabold tracking-[2.2px] leading-4 min-h-[auto] min-w-[auto] outline-[3px] no-underline ${props.phaseVariant}`}
        >
          {props.phase}
        </span>
        <span
          className={`box-border caret-transparent block text-[9px] font-extrabold tracking-[1.35px] leading-[14.4px] min-h-[auto] min-w-[auto] outline-[3px] no-underline px-2.5 py-1 ${props.dateVariant}`}
        >
          {props.date}
        </span>
      </div>
      <h3 className="box-border caret-transparent text-3xl font-extrabold tracking-[-0.9px] leading-[30px] outline-[3px] no-underline mb-4 font-outfit">
        {props.title}
      </h3>
      <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[3px] gap-y-2 no-underline">
        {props.features.map((feature, index) => (
          <span
            key={`${feature}-${index}`}
            className={`box-border caret-transparent block text-xs font-semibold leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] no-underline border px-3.5 py-[7px] border-solid ${props.featureVariant}`}
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
};