import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-b-gray-200 border-l-gray-200 border-r-gray-200 box-border caret-transparent outline-[3px] no-underline pt-[52px] pb-8 border-t-white/10 border-t border-solid md:pt-[72px] md:pb-10">
      <FooterContent />
      <FooterCopyright />
    </footer>
  );
};