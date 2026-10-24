export type DownloadButtonsProps = {
  containerVariant: string;
  buttonVariant: string;
  contentVariant: string;
};

export const DownloadButtons = (props: DownloadButtonsProps) => {
  return (
    <div
      className={`items-center box-border caret-transparent flex flex-wrap outline-[3px] no-underline ${props.containerVariant}`}
    >
      <a
        href="https://play.google.com/store/apps/details?id=com.llegateapp.app"
        className={`items-center bg-black box-border caret-transparent gap-x-3.5 flex justify-center max-w-[280px] min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-3.5 no-underline w-full border overflow-hidden pl-[18px] pr-7 py-3 rounded-xl border-solid border-white/30 md:justify-normal md:max-w-none md:w-auto after:accent-auto after:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(0,0,0,0))] after:box-border after:caret-transparent after:text-stone-50 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-dm_sans hover:shadow-[rgba(255,106,13,0.25)_0px_16px_48px_0px,rgba(255,255,255,0.15)_0px_0px_0px_1px] hover:border-white/40 ${props.buttonVariant}`}
      >
        <span
          className={`items-center box-border caret-transparent flex shrink-0 justify-center min-h-[auto] min-w-[auto] outline-[3px] no-underline ${props.contentVariant}`}
        >
          <img
            src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/icon-3.svg"
            alt="Icon"
            className={`box-border caret-transparent h-7 outline-[3px] no-underline w-7 ${props.contentVariant}`}
          />
        </span>
        <span
          className={`items-start box-border caret-transparent gap-x-px flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-px no-underline ${props.contentVariant}`}
        >
          <span
            className={`box-border caret-transparent text-white/70 block text-[9px] font-semibold tracking-[1.26px] leading-[9px] min-h-[auto] min-w-[auto] outline-[3px] no-underline uppercase ${props.contentVariant}`}
          >
            {"DISPONIBLE EN"}
          </span>
          <span
            className={`box-border caret-transparent block text-[22px] font-bold tracking-[-0.44px] leading-[25.3px] min-h-[auto] min-w-[auto] outline-[3px] no-underline font-outfit ${props.contentVariant}`}
          >
            {"Google Play"}
          </span>
        </span>
      </a>
      <a
        href="https://app.llegateapp.com/"
        className={`items-center bg-black box-border caret-transparent gap-x-3.5 flex justify-center max-w-[280px] min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-3.5 no-underline w-full border overflow-hidden pl-[18px] pr-7 py-3 rounded-xl border-solid border-white/30 md:justify-normal md:max-w-none md:w-auto after:accent-auto after:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(0,0,0,0))] after:box-border after:caret-transparent after:text-stone-50 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-dm_sans hover:shadow-[rgba(255,106,13,0.25)_0px_16px_48px_0px,rgba(255,255,255,0.15)_0px_0px_0px_1px] hover:border-white/40 ${props.buttonVariant}`}
      >
        <span
          className={`items-center box-border caret-transparent flex shrink-0 justify-center min-h-[auto] min-w-[auto] outline-[3px] no-underline ${props.contentVariant}`}
        >
          <img
            src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/icon-4.svg"
            alt="Icon"
            className={`box-border caret-transparent h-[26px] outline-[3px] no-underline w-[26px] ${props.contentVariant}`}
          />
        </span>
        <span
          className={`items-start box-border caret-transparent gap-x-px flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-px no-underline ${props.contentVariant}`}
        >
          <span
            className={`box-border caret-transparent text-white/70 block text-[9px] font-semibold tracking-[1.26px] leading-[9px] min-h-[auto] min-w-[auto] outline-[3px] no-underline uppercase ${props.contentVariant}`}
          >
            {"ÚSALA EN LA WEB"}
          </span>
          <span
            className={`box-border caret-transparent block text-[22px] font-bold tracking-[-0.44px] leading-[25.3px] min-h-[auto] min-w-[auto] outline-[3px] no-underline font-outfit ${props.contentVariant}`}
          >
            {"iPhone"}
          </span>
        </span>
      </a>
    </div>
  );
};