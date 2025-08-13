import experience from "../data/exprience";
import type { experienceProps } from "../types/exprience";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import { TextAnimate } from "./magicui/text-animate";

gsap.registerPlugin(ScrollTrigger);

const Expreince = () => {
  return (
    <section id="experience" className="min-h-dvh w-full px-5 overflow-hidden ">
      <div className="flex size-full flex-col justify-start items-center py-10 pb-24">
        <div className="relative  size-full flex flex-col pb-5 gap-4 items-center justify-center text-center  pl-5">
          <TextAnimate className="text-sm uppercase md:text-base">
            Experience
          </TextAnimate>
          <AnimatedTitle
            title="The journey so far"
            className="mt-5 font-bold text-center "
          />
        </div>
        <div className="flex w-full lg:w-[80%]">
          <div>
            {" "}
            <div className=" mt-4 px-4">
              {experience.map((item) => (
                <ExperienceItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expreince;

const ExperienceItem = ({ item }: { item: experienceProps }) => {
  return (
    <div className="relative group">
      <div className="relative pl-10 pb-4">
        <div
          className=" absolute top-0 -left-5 w-10 h-10 flex items-center justify-center rounded-full border-2 border-black/50 dark:border-white/50  bg-white dark:bg-black  transition-all duration-300  group-hover:scale-110 group-hover:bg-black/10 dark:group-hover:bg-white/10 z-10
    "
        >
          <span className="font-medium">0{item.id}</span>
        </div>

        <div
          className={`absolute top-5 left-0 w-0.5 h-full bg-gradient-to-b from-black/50 to-transparent dark:from-white/50 transition-all duration-500 ${item.id !== 1 && "group-hover:h-[calc(100%+1rem)] group-hover:-top-2"} 
    `}
        ></div>

        <div className="p-4 rounded-lg transition-all duration-300 group-hover:bg-black/5 dark:group-hover:bg-white/5">
          <div className="mt-2 font-robert">
            <motion.div className="font-extrabold text-lg relative">
              {item.name}
            </motion.div>
            <motion.div className="overflow-hidden">
              <p className="font-semibold">{item.role}</p>
              <p className="font-light">{item.duration}</p>
              <p className="text-sm mt-1">{item.description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
