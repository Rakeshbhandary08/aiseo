"use client";
import productImage from "../assets/product-image.png";
import Image from "next/image";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className=" py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl  font-medium text-center tracking-tighter ">
          Elevate your SEO efforts.
        </h2>
        <p className="text-lg md:text-xl md:max-w-2xl mx-auto  text-white/70 tracking-tight text-center mt-5">
          From small startups to large enterprises, our AI-driven tools has revolutionized the way businesses approach SEO.
        </p>
        <div className=" mt-10 flex flex-col gap-3 lg:flex-row">
          {
            tabs.map((tab) => (
              <div className=" border border-white/15 rounded-xl flex p-2.5 gap-2.5 items-center lg:flex-1 " key={tab.title}>
                <div className=" h-12 w-12 border border-white/15 inline-flex rounded-lg items-center justify-center">
                  <DotLottieReact src={tab.icon} className="w-5 h-5" autoplay />
                </div>
                <div className="font-medium ">{tab.title}</div>
                {tab.isNew && <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff]/80 text-black font-semibold">new</div>}
              </div>

            ))
          }
        </div>
        {/* Product Image */}
        <div className="border border-white/20 p-2.5 rounded-xl mt-3 md:mt-5">
          <div style={{backgroundImage:`url(${productImage.src})`}} className="aspect-video bg-cover border border-white/20 rounded-xl">

          </div>
          {/* <Image src={productImage} alt="ProductImage" className="aspect-video bg-cover" /> */}
        </div>
      </div>
    </section>);
};
