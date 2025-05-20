import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-s overflow-hidden">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="text-sm uppercase md:text-base text-black">Projects</h2>
        <AnimatedTitle
          title="Discover some of my <br />earlier projects"
          className="mt-5 !text-black text-center"
        />
        <div className="absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]">
          <p>the game of games</p>
          <p>another game of games</p>
        </div>
      </div>
      <div id="clip" className="h-dvh w-screen">
        <div className="mask-clip-path  absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
          <img
            src="img/about.webp"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
