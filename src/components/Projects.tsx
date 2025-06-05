import BentoCard from './Bento-card';
import { BentoTilt } from './Bento-card';
import projects from '../data/projects';
import { TextAnimate } from './magicui/text-animate';
import AnimatedTitle from './AnimatedTitle';

const Projects = () => {
  return (
    <section id="projects" className="">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 w-full lg:w-[95%] mx-auto">
          <div className="flex flex-col gap-5 pb-6 lg:pb-12 items-center justify-center text-center">
            <TextAnimate className="text-sm uppercase  md:text-base text-black dark:text-white font-robert">
              Projects
            </TextAnimate>
            <AnimatedTitle
              title="Discover some of my <br/> earlier projects"
              className="mt-5  text-center font-zentry"
            />
          </div>
          {/*    <p className="text-black dark:text-blue-50 opacity-50 text-lg max-w-md pb-5 ">
            I build solutions that balance creativity and functionality. Each
            project here represents a challenge tackled, a skill honed, and a
            problem solved—whether through clean design, efficient code, or
            user-focused thinking. Explore my work below.
          </p>
          */}
          <div className="flex flex-col px-1 gap-7">
            <BentoTilt className="border border-white/20  mb-7 h-[300px] w-full mx-auto  !rounded-md lg:h-[55vh]">
              <BentoCard
                src={projects[0].image}
                title={projects[0].name}
                description={projects[0].description}
                href={projects[0].href}
              />
            </BentoTilt>

            <BentoTilt className="border border-white/20  mb-7 h-[300px] w-full mx-auto  overflow-hidden rounded-md lg:h-[55vh]">
              <BentoCard
                src={projects[1].image}
                title={projects[1].name}
                description={projects[1].description}
                href={projects[1].href}
              />
            </BentoTilt>
            <BentoTilt className="border border-white/20   mb-7 h-[300px] w-full mx-auto  overflow-hidden rounded-md lg:h-[55vh]">
              <BentoCard
                src={projects[2].image}
                title={projects[2].name}
                description={projects[2].description}
                href={projects[2].href}
              />
            </BentoTilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
