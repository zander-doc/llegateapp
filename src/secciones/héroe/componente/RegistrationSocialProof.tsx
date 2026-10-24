export const RegistrationSocialProof = () => {
  return (
    <div className="items-center bg-white/0 box-border caret-transparent gap-x-2 flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-center no-underline w-full border mt-4 px-4 py-2.5 rounded-lg border-solid border-white/10 md:gap-x-3.5 md:flex-row md:justify-normal md:gap-y-3.5 md:text-start md:w-auto">
      <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline md:justify-normal md:text-start">
        <span className="items-center bg-orange-500 box-border caret-transparent text-neutral-950 flex text-[10px] font-extrabold h-[30px] justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-[30px] border-neutral-950 rounded-[50%] border-2 border-solid md:text-start">
          {"MR"}
        </span>
        <span className="items-center bg-amber-300 box-border caret-transparent text-neutral-950 flex text-[10px] font-extrabold h-[30px] justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-[30px] border-neutral-950 -ml-2 rounded-[50%] border-2 border-solid md:text-start">
          {"LC"}
        </span>
        <span className="items-center bg-orange-400 box-border caret-transparent text-neutral-950 flex text-[10px] font-extrabold h-[30px] justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-[30px] border-neutral-950 -ml-2 rounded-[50%] border-2 border-solid md:text-start">
          {"AP"}
        </span>
        <span className="items-center bg-orange-600 box-border caret-transparent text-neutral-950 flex text-[10px] font-extrabold h-[30px] justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-[30px] border-neutral-950 -ml-2 rounded-[50%] border-2 border-solid md:text-start">
          {"JG"}
        </span>
      </div>
      <span className="box-border caret-transparent text-white/80 block text-[13px] leading-[20.8px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline md:text-start">
        {"+"}
        <strong className="box-border caret-transparent text-stone-50 font-bold outline-[3px] text-center no-underline md:text-start">
          {"2,418"}
        </strong>
        {" personas ya se registraron"}
      </span>
    </div>
  );
};