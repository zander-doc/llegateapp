export type FaqItemProps = {
  question: string;
  answer: string;
};

import { useState } from "react";

export const FaqItem = (props: FaqItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent outline-[3px] no-underline border-b-white/10 border-b border-solid">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="items-center bg-transparent caret-transparent flex justify-between outline-[3px] text-left no-underline w-full px-0 py-[26px]"
      >
        <span className="box-border caret-transparent block text-base font-semibold tracking-[-0.16px] leading-[20.8px] min-h-[auto] min-w-[auto] outline-[3px] no-underline pr-6 md:text-lg md:tracking-[-0.18px] md:leading-[23.4px]">
          {props.question}
        </span>
        <span className="items-center box-border caret-transparent text-orange-500 flex shrink-0 text-[22px] font-light h-7 justify-center leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-7 border border-orange-500/30 border-solid">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className={`box-border caret-transparent outline-[3px] no-underline overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="box-border caret-transparent text-white/80 text-[17px] leading-[28.9px] max-w-[720px] outline-[3px] no-underline">
          {props.answer}
        </p>
      </div>
    </div>
  );
};