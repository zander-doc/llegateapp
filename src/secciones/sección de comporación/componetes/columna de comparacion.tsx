import { TraditionalMethodColumn } from "@/sections/ComparisonSection/components/TraditionalMethodColumn";
import { FlashyMethodColumn } from "@/sections/ComparisonSection/components/FlashyMethodColumn";

export const ComparisonColumns = () => {
  return (
    <div className="box-border caret-transparent grid grid-cols-[1fr] outline-[3px] no-underline border border-solid border-white/10 md:grid-cols-[1fr_1fr]">
      <TraditionalMethodColumn />
      <FlashyMethodColumn />
    </div>
  );
};