import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { TextAnimate } from './magicui/text-animate';
import { Meteors } from './magicui/meteors';

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  useGSAP(() => {
    gsap.set('#hero', {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    });

    gsap.from('#hero', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#hero',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });
  return (
    <div className=" min-h-screen px-5 lg:px-10 " id="hero">
      <div className="relative overflow-hidden h-[600px] w-full max-w-full">
        <Meteors />
      </div>
      <h6 className="top-1/3 lg:top-1/4  lg:right-1/12 uppercase flex flex-col  font-zentry font-black text-5xl  sm:text-7xl  absolute md:text-9xl lg:text-[12rem]  ">
        <div className="gap-6  flex items-center py-6 justify-center">
          <TextAnimate animation="slideUp" by="line" once>
            Ibrahim
          </TextAnimate>
          <TextAnimate animation="slideDown" by="line" once>
            Hassen
          </TextAnimate>
        </div>
        <div className="text-base items-center justify-center font-robert flex flex-col gap-1 text-center">
          <TextAnimate
            className="text-base font-bold  text-pretty text-center"
            animation="slideUp"
            by="word"
            once
          >
            🚀 Full-Stack Developer · 🎨 Frontend Specialist · 🧠 UI/UX
            Enthusiast
          </TextAnimate>{' '}
          <TextAnimate
            animation="slideUp"
            by="word"
            once
            className="font-light text-center px-5 text-base"
          >
            Turning ideas into interactive web magic
          </TextAnimate>
        </div>
      </h6>
      <h6 className="bottom-5 uppercase font-zentry font-black text-5xl right-8 sm:right-10 sm:text-7xl md:text-9xl absolute lg:text-[12rem]"></h6>
    </div>
  );
};

export default Hero;
