import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterNavigation } from "@/sections/Footer/components/FooterNavigation";
import { FooterSocialLinks } from "@/sections/Footer/components/FooterSocialLinks";
import { FooterContact } from "@/sections/Footer/components/FooterContact";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[1fr] max-w-[1400px] outline-[3px] gap-y-8 no-underline w-full mb-12 mx-auto px-4 md:gap-x-12 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-y-12 md:px-10">
      <FooterBrand />
      <FooterNavigation />
      <FooterSocialLinks />
      <FooterContact />
    </div>
  );
};