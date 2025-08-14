import { TextAnimate } from "./magicui/text-animate";
import Particles from "./ui/Particles/Particles";
const Hero = () => {
  return (
    <div className="min-h-screen relative" id="hero">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative  flex flex-col items-center  min-h-[80dvh] justify-center">
        <TextAnimate
          className="text-xl md:text-3xl lg:text-9xl font-bold text-pretty text-center"
          animation="slideDown"
          by="character"
        >
          Ibrahim Hassen
        </TextAnimate>
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
