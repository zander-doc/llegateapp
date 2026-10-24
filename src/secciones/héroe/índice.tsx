import { HeroBackground } from "@/sections/Hero/components/HeroBackground";
import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <header className="items-center box-border caret-transparent flex min-h-0 outline-[3px] relative text-center no-underline overflow-hidden pt-0 pb-16 md:min-h-[760px] md:text-start md:pt-0 md:pb-[36px]">
      <HeroBackground variantClass="bg-[linear-gradient(rgba(255,255,255,0.08)_1px,rgba(0,0,0,0)_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,rgba(0,0,0,0)_1px)] bg-[position:0%_0%,0%_0%] bg-size-[56px_56px,56px_56px] [mask-image:radial-gradient(80%_80%,rgb(0,0,0)_30%,rgba(0,0,0,0)_75%)] inset-0" />
      <HeroBackground variantClass="bg-[radial-gradient(circle,rgba(255,106,13,0.18),rgba(0,0,0,0)_55%)] blur-[80px] h-[900px] pointer-events-none translate-x-[-50.0%] w-[900px] left-[40%] top-[10%]" />
      <HeroBackground variantClass="bg-[linear-gradient(90deg,rgba(0,0,0,0),rgba(255,106,13,0.5),rgba(0,0,0,0))] h-px pointer-events-none w-[45%] left-0 top-[15%]" />
      <HeroBackground variantClass="bg-[linear-gradient(90deg,rgba(0,0,0,0),rgba(255,106,13,0.5),rgba(0,0,0,0))] h-px pointer-events-none w-[45%] left-0 top-[29%]" />
      <HeroBackground variantClass="bg-[linear-gradient(90deg,rgba(0,0,0,0),rgba(255,106,13,0.5),rgba(0,0,0,0))] h-px pointer-events-none w-[45%] left-0 top-[43%]" />
      <HeroBackground variantClass="bg-[linear-gradient(90deg,rgba(0,0,0,0),rgba(255,106,13,0.5),rgba(0,0,0,0))] h-px pointer-events-none w-[45%] left-0 top-[57%]" />
      <HeroBackground variantClass="bg-[linear-gradient(90deg,rgba(0,0,0,0),rgba(255,106,13,0.5),rgba(0,0,0,0))] h-px pointer-events-none w-[45%] left-0 top-[71%]" />
      <HeroBackground variantClass="bg-[linear-gradient(90deg,rgba(0,0,0,0),rgba(255,106,13,0.5),rgba(0,0,0,0))] h-px pointer-events-none w-[45%] left-0 top-[85%]" />
      <HeroContent />
    </header>
  );
};