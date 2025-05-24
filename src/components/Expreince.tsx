import AnimatedTitle from './AnimatedTitle';
import experience, { type experienceProps } from '../data/exprience';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
  const itemRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start end', 'end start'],
  });

  // Opacity for the role and description (fades out as item scrolls up)
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.7], // Fade out between 40% and 70% of item's scroll progress
    [1, 0], // From fully visible to fully transparent
  );

  // Scale for the role and description (optional, makes it shrink as it fades)
  const contentScale = useTransform(
    scrollYProgress,
    [0.4, 0.7],
    [1, 0.8], // Shrink to 80% size
  );

  // Y position for the name/title to slide up slightly as content fades
  const nameY = useTransform(
    scrollYProgress,
    [0.4, 0.7],
    ['0%', '-20%'], // Moves up 20% relative to its height
  );

  // Progress for this item's specific bar (0% to 100%)
  const itemProgressBarHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%'],
  );

  return (
    <div ref={itemRef} className="flex flex-row gap-5 h-[200px] snap-start">
      {' '}
      {/* Increased height & added snap-start */}
      {/* Individual Item's Progress Bar */}
      <div className="h-full w-2 bg-white rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
        <motion.div
          className="bg-neutral-800 w-full origin-bottom" // Changed origin to bottom for a filling-up effect
          style={{ scaleY: itemProgressBarHeight, originY: 1 }} // scaleY with originY: 1 for bottom-up fill
        />
      </div>
      <div className="mt-2 font-robert">
        <motion.div
          className="font-extrabold text-lg relative"
          style={{ y: nameY }}
        >
          {item.name}
        </motion.div>
        <motion.div
          className="overflow-hidden"
          style={{ opacity: contentOpacity, scale: contentScale }}
        >
          <p className="font-semibold">{item.role}</p>
          <p className="font-light">{item.duration}</p>
          <p className="text-sm mt-1">{item.description}</p>
        </motion.div>
      </div>
    </div>
  );
};
