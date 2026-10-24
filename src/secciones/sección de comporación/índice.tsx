import { ComparisonHeader } from "@/sections/ComparisonSection/components/ComparisonHeader";
import { ComparisonColumns } from "@/sections/ComparisonSection/components/ComparisonColumns";
import { ComparisonCallToAction } from "@/sections/ComparisonSection/components/ComparisonCallToAction";

export const ComparisonSection = () => {
  return (
    <section id="servicios" className="border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent outline-[3px] no-underline py-11 border-b-white/10 border-b border-solid md:py-20">
      <div className="box-border caret-transparent max-w-[1400px] outline-[3px] no-underline w-full mx-auto px-4 md:px-10">
        <ComparisonHeader />
        <ComparisonColumns />
        <ComparisonCallToAction />
      </div>
    </section>
  );
};