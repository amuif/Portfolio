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
      className=" min-h-screen relative px-10 text-shadow-white"
      id="hero-section"
    >
      <div className="z-20  px-5">
        <h6 className="top-32 left-5 uppercase flex flex-col  font-zentry font-black text-5xl sm:right-10 sm:text-7xl  absolute md:text-9xl lg:text-[12rem]">
          Ibrahim
          <span className="text-base font-robert ">
            Full-stack dev. Turning ideas into <br /> interactive web magic 🚀
          </span>
        </h6>
        <h6 className="bottom-5 uppercase font-zentry font-black text-5xl right-8 sm:right-10 sm:text-7xl md:text-9xl absolute lg:text-[12rem]">
          Hassen
        </h6>
      </div>
    </div>
  );
};

export default Hero;
