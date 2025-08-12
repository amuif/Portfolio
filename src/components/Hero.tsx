import Particles from '@/Particles/Particles';
import { TextAnimate } from './magicui/text-animate';
import SplitText from '@/SplitText/SplitText';
const Hero = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div className="min-h-screen relative" id="hero">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative  flex flex-col items-center  min-h-screen justify-center">
        <SplitText
          text="Ibrahim Hassen"
          className="font-zentry font-black text-5xl sm:text-7xl md:text-9xl lg:text-[12rem]"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <div className="text-base font-robert flex flex-col gap-1 text-center">
          <TextAnimate
            className="text-base font-bold text-pretty text-center"
            animation="slideUp"
            by="word"
            once
          >
            🚀 Full-Stack Developer · 🎨 Frontend Specialist · 🧠 UI/UX
            Enthusiast
          </TextAnimate>
          <TextAnimate
            animation="slideUp"
            by="word"
            once
            className="font-light text-center px-5 text-base"
          >
            Turning ideas into interactive web magic
          </TextAnimate>
        </div>
      </div>
    </div>
  );
};

export default Hero;
