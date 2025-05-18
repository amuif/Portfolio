import HeroCanvas from '@/Canvas/HeroCanvas';
import Text from '../ui/Text';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  h-screen">
      <div className="flex flex-col gap-8 lg:gap-12 items-center  justify-center px-5">
        <Text className="text-2xl lg:text-5xl font-extrabold">
          Ibrahim Hassen
        </Text>
        <Text className="text-xl lg:text-3xl ">
          I’m a full-stack web developer
        </Text>
      </div>
      <div className="flex items-start justify-start pt-12 lg:pt-16 top-0 h-full">
        <HeroCanvas />
      </div>
    </div>
  );
};

export default Hero;
