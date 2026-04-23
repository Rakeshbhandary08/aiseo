import { Button } from "@/components/Button";
import starBg from "@/assets/stars.png"
import gridLines from "../assets/grid-lines.png"

export const CallToAction = () => {
  return (
    <section className=" py-20 md:py-24">
      <div className="container ">
        <div className=" border border-white/15 rounded-xl py-24 relative overflow-hidden" style={{backgroundImage:`url(${starBg.src})`}}>
         <div className="bg-[rgb(74,32,138)] absolute inset-0 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" style={{backgroundImage:`url(${gridLines.src})`}} ></div>
          <div className="relative">
          <h2 className="text-5xl md:text-6xl max-w-sm mx-auto  text-center tracking-tighter font-medium ">AI-driven SEO for everyone</h2>
          <p className="text-lg md:text-xl max-w-xs mx-auto text-center text-white/70 px-4 mt-5 tracking-tight">Achieve clear, impactful results without the complexity</p>
          <div className="flex justify-center mt-5">
            <Button>Join waitlist</Button>
          </div>
          </div>
        </div>
      </div>
    </section>);
};
