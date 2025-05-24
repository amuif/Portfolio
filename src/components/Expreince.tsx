import AnimatedTitle from './AnimatedTitle';
import experience from '../data/exprience';
import type { experienceProps } from '../types/exprience';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion, useScroll, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Expreince = () => {
  return (
    <section
      id="experience"
      className="min-h-dvh w-screen bg-[#EDFF66] text-black overflow-hidden grid grid-cols-1 lg:grid-cols-2"
    >
      <div className="flex size-full flex-col justify-start items-center py-10 pb-24">
        <div>
          <div className="relative  size-full">
            <AnimatedTitle
              title="Experience <br/> Some of them"
              className="font-zentry mt-5 pointer-events-none !text-black !p-0 !font-bold text-left  relative z-10"
            />
          </div>
        </div>
        <div className="space-y-8 mt-4 px-4">
          {experience.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expreince;

const ExperienceItem = ({ item }: { item: experienceProps }) => {
  const { scrollYProgress } = useScroll();
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <div className="flex flex-row gap-5 h-[200px] snap-start">
      <div className="h-[170px] w-2 bg-white rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
        <motion.div
          className="bg-neutral-800 w-full origin-bottom"
          style={{ height: progressHeight }}
        />
      </div>
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
  );
};
