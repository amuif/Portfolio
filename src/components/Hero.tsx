import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  useGSAP(() => {
    gsap.set('#hero-section', {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    });

    gsap.from('#hero-section', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });
  return (
    <div className=" min-h-screen relative px-10 " id="hero-section">
      <div className="z-20 text-black px-5">
        <h6 className="h-full top-28 absolute font-bold font-zentry left-0 text-2x lg:text-5xl">
          Ibrahim
        </h6>
        <h6 className="absolute right-0 bottom-0 font-zentry font-bold text-2xl lg:text-5xl">
          Hassen
        </h6>
      </div>
    </div>
  );
};

export default Hero;
