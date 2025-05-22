import AnimatedTitle from './AnimatedTitle';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const Expreince = () => {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const contentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.to(progressRef.current, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
    stepsRef.current.forEach((step, index) => {
      gsap.to(step, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: contentRef.current,
          start: `top+=${index * 25}% top`,
          end: `top+=${(index + 1) * 25}% top`,
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="min-h-dvh w-screen bg-[#EDFF66] text-black "
    >
      <div className="flex size-full flex-col justify-start items-center py-10 pb-24">
        <div className="relative size-full">
          <AnimatedTitle
            title="Expreince <br/> Some of them"
            className="mt-5 pointer-events-none !text-black !p-0 !font-bold text-left  relative z-10"
          />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Expreince;
