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
    <div
      className="bg-amber-200 min-h-screen w-full overflow-hidden"
      id="hero-section"
    >
      <div className="flex items-center justify-center mx-auto my-auto  h-full w-full">
        Hero Section
      </div>
    </div>
  );
};

export default Hero;
