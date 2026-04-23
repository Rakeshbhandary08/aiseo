import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl font-medium tracking-tighter text-center">Beyond Expectations</h2>
        <p className="text-lg md:text-xl text-center text-white/70 tracking-tight mt-5 max-w-sm mx-auto">
          Our revolutionaray AI SEO tools have transformed our client's strategy.
        </p>
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex gap-5 mt-5 ">
            {
              testimonials.map((testimonial) => (
                <div key={testimonial.name} className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.3),black)] flex-none max-w-xs md:max-w-md ">
                  <div className="text-lg md:text-2xl tracking-tight">{testimonial.text}</div>
                  <div className="flex items-center mt-5 gap-3">
                    <div className="relative after:content-[''] after:absolute after:inset-0 after:rounded-lg after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                      <Image src={testimonial.avatarImg} alt="" className="w-11 h-11 rounded-lg grayscale" />
                    </div>
                    <div>
                      <div>{testimonial.name}</div>
                      <div className="text-sm text-white/50">{testimonial.title}</div>
                    </div>
                  </div>

                </div>
              ))
            }
          </div>
        </div>

      </div>
    </section>);
};
