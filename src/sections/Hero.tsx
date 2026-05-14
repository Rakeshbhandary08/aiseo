'use client';

import { motion,useMotionValueEvent,useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/Button";
import starBg from "@/assets/stars.png";
import { useRef } from "react";
 
export const Hero = () => {
   {/* Learn how to use useScroll */}
   const sectionRef=useRef(null);
   const {scrollYProgress}=useScroll({
    target:sectionRef,
    offset:["start end","end start"]
   })
   
   const backgroundPositionY=useTransform(scrollYProgress,[0,1],[-300,300])

  //  useMotionValueEvent(scrollYProgress,"change",(value)=>{
  //   console.log(scrollYProgress)
  //  })


  return (
    <motion.section ref={sectionRef}  className="flex h-[492px] md:h-[800px]  md:-top-16 items-center overflow-hidden relative [mask-image:linear-gradient(transparent,black_10%,black_90%,transparent)]" 
      style={{ backgroundImage: `url(${starBg.src})`,backgroundPositionY}}
      animate={{backgroundPositionX:starBg.width}} transition={{duration:100,ease:"linear",repeat:Infinity}}>
        
      {/* Spotlight Effect using Mask Image*/}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,0.5)_15%,rgba(14,0,36,.5)_78%,transparent)]"></div>
      {/* Start of the Planet circle */}
      <div className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-500 border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,0.1),0px_0px_50px_rgb(140,69,255)]"></div>
      {/* First Ring 1 */}
      <motion.div animate={{rotate:"1turn"}} transition={{duration:60,repeat:Infinity,ease:"linear"}} 
       className="absolute w-[344px] h-[344px] md:w-[580px] md:h-[580px] rounded-full border opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-2 h-2 bg-white  rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            
        <div className="absolute w-2 h-2 bg-white  rounded-full left-1/2 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-5 h-5 border border-white rounded-full top-1/2 right-0 translate-x-1/2 inline-flex items-center justify-center">
           <div className="absolute w-2 h-2 bg-white  rounded-full "></div>
        </div>
      </motion.div>
      {/* First Ring 2 */}
      <motion.div animate={{rotate:"-1turn"}} transition={{duration:60,repeat:Infinity,ease:"linear"}}
       className="absolute w-[444px] h-[444px] md:w-[780px] md:h-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></motion.div>
      {/* First Ring 3 */}
      <motion.div  animate={{rotate:"1turn"}} transition={{duration:80,repeat:Infinity,ease:"linear"}}
      className="absolute opacity-20 w-[544px] h-[544px] md:w-[980px] md:h-[980px] rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-2 h-2 bg-white  rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-2 h-2 bg-white  rounded-full top-1/2 right-0 translate-x-1/2"></div>
      </motion.div>
      <div className="relative container mt-16">
        <h1 suppressHydrationWarning className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white  
         bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">AI SEO</h1>
        <p className="text-lg md:text-xl text-white/70 text-center mt-5 max-w-xl mx-auto">Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>

      </div>
    </motion.section>
  )
};
