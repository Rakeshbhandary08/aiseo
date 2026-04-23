import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <header className="p-4 md:pt-4 border-b border-white/15 md:border-none top-0 sticky z-10 backdrop-blur md:backdrop-blur-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl  max-w-2xl mx-auto md:backdrop-blur">
          <div>
            <div className="border h-10 w-10 inline-flex justify-center items-center rounded-lg border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>

          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-md">
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition">Developers</a>
              <a href="#" className="text-white/70 hover:text-white transition">Pricing</a>
              <a href="#" className="text-white/70 hover:text-white transition">ChangeLog</a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
             <Button>Join waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>

      </div>
    </header>
  )

};
