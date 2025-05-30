import BentoCard from './Bento-card';
import { BentoTilt } from './Bento-card';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className=" pb-24">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 w-full lg:w-[95%] mx-auto">
          <p className="text-lg text-black dark:text-white max-w-md">
            Projects
          </p>

          <p className="text-black dark:text-blue-50 opacity-50 text-lg max-w-md pb-5 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            magni doloremque voluptatem similique molestiae dolore veritatis
            facilis odit explicabo officia hic suscipit, ducimus, natus dolorum
            ratione dolor possimus exercitationem mollitia!
          </p>
          <div className="flex flex-col px-1 gap-7">
            <BentoTilt className="border border-white/20  mb-7 h-[300px] w-full mx-auto  !rounded-md md:h-[55vh]">
              <BentoCard
                src={projects[0].image}
                title={projects[0].name}
                description={projects[0].description}
                href={projects[0].href}
              />
            </BentoTilt>

            <BentoTilt className="border border-white/20  mb-7 h-[300px] w-full mx-auto  overflow-hidden rounded-md md:h-[55vh]">
              <BentoCard
                src={projects[1].image}
                title={projects[1].name}
                description={projects[1].description}
                href={projects[1].href}
              />
            </BentoTilt>
            <BentoTilt className="border border-white/20   mb-7 h-[300px] w-full mx-auto  overflow-hidden rounded-md md:h-[55vh]">
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
