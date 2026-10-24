import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopNavbar } from "@/sections/Navbar/components/DesktopNavbar";
import { NavbarActions } from "@/sections/Navbar/components/NavbarActions";

export const Navbar = () => {
  return (
    <nav
      aria-label="Navegación principal"
      className="border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent outline-[3px] sticky no-underline z-[100] py-0 border-b-transparent border-b border-solid top-0"
    >
      <div className="items-center box-border caret-transparent flex justify-between max-w-[1400px] outline-[3px] no-underline w-full mx-auto px-4 py-0 md:px-10 md:py-[6px]">
        <NavbarLogo />
        <DesktopNavbar />
        <NavbarActions />
      </div>
    </nav>
  );
};