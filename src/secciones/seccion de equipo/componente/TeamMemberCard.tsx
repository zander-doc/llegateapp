export type TeamMemberCardProps = {
  profileAriaLabel: string;
  imageUrl: string;
  imageAlt: string;
  imageTitle: string;
  memberNumber: string;
  roleAbbreviation: string;
  founderLabel: string;
  memberName: string;
  roleTitle: string;
  companyName: string;
  description: string;
};

export const TeamMemberCard = (props: TeamMemberCardProps) => {
  return (
    <article className="bg-neutral-900 box-border caret-transparent flex flex-col h-full outline-[3px] relative no-underline border border-solid border-white/10">
      <a
        href={props.profileHref}
        aria-label={props.profileAriaLabel}
        className="box-border caret-transparent block outline-[3px] absolute no-underline z-[3] inset-0"
      ></a>
      <div className="aspect-[4_/_5] bg-neutral-900 border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative no-underline overflow-hidden border-b-white/10 border-b border-solid after:accent-auto after:bg-[linear-gradient(rgba(10,10,11,0.15)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_60%,rgba(10,10,11,0.85)_100%)] after:box-border after:caret-transparent after:text-stone-50 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-dm_sans">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          title={props.imageTitle}
          className="aspect-[auto_400_/_500] box-border caret-transparent h-full max-w-full object-cover object-[50%_0%] outline-[3px] no-underline w-full scale-[1.001]"
        />
        <span className="box-border caret-transparent block h-3.5 outline-[3px] pointer-events-none absolute no-underline w-3.5 z-[2] border-l border-t border-solid border-white/40 left-2.5 top-2.5"></span>
        <span className="box-border caret-transparent block h-3.5 outline-[3px] pointer-events-none absolute no-underline w-3.5 z-[2] border-r border-t border-solid border-white/40 right-2.5 top-2.5"></span>
        <span className="box-border caret-transparent block h-3.5 outline-[3px] pointer-events-none absolute no-underline w-3.5 z-[2] border-b border-l border-solid border-white/40 left-2.5 bottom-2.5"></span>
        <span className="box-border caret-transparent block h-3.5 outline-[3px] pointer-events-none absolute no-underline w-3.5 z-[2] border-b border-r border-solid border-white/40 right-2.5 bottom-2.5"></span>
        <span className="box-border caret-transparent text-white/60 block text-xs font-bold tracking-[2.4px] leading-[19.2px] outline-[3px] absolute no-underline z-[2] right-[18px] top-3.5 font-outfit">
          {props.memberNumber}
        </span>
        <span className="items-center bg-orange-500 box-border caret-transparent text-neutral-950 gap-x-[7px] flex text-[11px] font-extrabold tracking-[1.98px] leading-[17.6px] outline-[3px] absolute gap-y-[7px] no-underline uppercase z-[2] px-2.5 py-1.5 left-3.5 bottom-3.5">
          <span className="bg-neutral-950 box-border caret-transparent block h-1.5 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-1.5 rounded-[50%]"></span>
          {props.roleAbbreviation}
        </span>
        <span className="backdrop-blur-[6px] bg-neutral-950/60 box-border caret-transparent block text-[9px] font-extrabold tracking-[1.8px] leading-[14.4px] outline-[3px] absolute no-underline z-[2] border px-2 py-[5px] border-solid border-white/40 right-3.5 bottom-3.5">
          {props.founderLabel}
        </span>
      </div>
      <div className="box-border caret-transparent gap-x-2.5 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 no-underline pt-[22px] pb-[26px] px-5">
        <h3 className="box-border caret-transparent text-[22px] font-extrabold tracking-[-0.66px] leading-[23.1px] min-h-[auto] min-w-[auto] outline-[3px] no-underline font-outfit md:text-2xl md:tracking-[-0.72px] md:leading-[25.2px]">
          {props.memberName}
        </h3>
        <p className="items-center box-border caret-transparent text-orange-500 gap-x-1.5 flex flex-wrap text-[11px] font-bold tracking-[1.76px] leading-[17.6px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 no-underline uppercase">
          <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {props.roleTitle}
          </span>
          <span className="box-border caret-transparent text-white/30 block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {"·"}
          </span>
          <span className="box-border caret-transparent text-white/60 block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            <span className="box-border caret-transparent outline-[3px] no-underline">
              {props.companyName}
            </span>
          </span>
        </p>
        <p className="box-border caret-transparent text-white/80 text-[15px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] no-underline mt-1">
          {props.description}
        </p>
      </div>
      <span className="bg-[linear-gradient(90deg,rgb(255,106,13),rgb(255,179,71))] box-border caret-transparent block h-0.5 outline-[3px] absolute no-underline w-0 left-0 -bottom-px"></span>
    </article>
  );
};