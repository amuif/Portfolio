import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { TextAnimate } from './magicui/text-animate';

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
    <div className=" min-h-screen px-10 text-shadow-white" id="hero">
      <h6 className="top-32 left-5 uppercase flex flex-col  font-zentry font-black text-5xl sm:right-10 sm:text-7xl  absolute md:text-9xl lg:text-[12rem]">
        <TextAnimate animation="slideUp" by="word" once>
          Ibrahim
        </TextAnimate>
        <div className="text-base font-robert flex flex-col gap-1">
          <TextAnimate animation="slideUp" by="word" once>
            Full-stack dev. Turning ideas into
          </TextAnimate>{' '}
          <TextAnimate animation="slideUp" by="word" once>
            interactive web magic 🚀
          </TextAnimate>
        </div>
      </h6>
      <h6 className="bottom-5 uppercase font-zentry font-black text-5xl right-8 sm:right-10 sm:text-7xl md:text-9xl absolute lg:text-[12rem]">
        <TextAnimate animation="slideUp" by="word" once>
          Hassen
        </TextAnimate>
      </h6>
    </div>
  );
};

export default Hero;
