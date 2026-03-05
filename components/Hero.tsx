import { motion } from "framer-motion";
import { TextAnimate } from "./magicui/text-animate";
import Particles from "./ui/Particles/Particles";
import { ShimmerButton } from "./ui/shimmer-button";
const Hero = () => {
  const handleDownload = async () => {
    try {
      const filePath = "/resume.pdf";
      const fileName = "Ibrahim Hassen Resume.pdf";

      const link = document.createElement("a");
      link.href = filePath;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
    }
  };
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
          className="text-4xl md:text-7xl lg:text-9xl font-bold text-pretty text-center"
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
        <motion.div
          className="w-32 pt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <ShimmerButton className="w-full" onClick={handleDownload}>
            Get CV
          </ShimmerButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
