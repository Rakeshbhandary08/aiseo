import XSocial from "../assets/social-x.svg";
import Logo from "../assets/logo.svg";
import InstaSocial from "../assets/social-instagram.svg";
import YTSocial from "../assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="border-t border-t-white/15 py-5">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex gap-2 lg:flex-1 items-center">
            <Logo className="h-6 w-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>

          <nav className="flex flex-col lg:flex-row gap-5 lg:flex-1 lg:items-center lg:justify-center">
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Features</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Developers</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Company</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Blog</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Changelog</a>
          </nav>

          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstaSocial className="text-white/40 hover:text-white transition" />
            <YTSocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  )
};
