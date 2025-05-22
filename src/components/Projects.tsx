import BentoCard from './Bento-card';
import { BentoTilt } from './Bento-card';

const Projects = () => {
  return (
    <section id="projects" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="text-lg text-blue-50 max-w-md">Exprience</p>

          <p className="text-blue-50 opacity-50 text-lg max-w-md ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            magni doloremque voluptatem similique molestiae dolore veritatis
            facilis odit explicabo officia hic suscipit, ducimus, natus dolorum
            ratione dolor possimus exercitationem mollitia!
          </p>
          <BentoTilt className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard
              src=""
              title="some thing"
              description="some thing something"
            />
          </BentoTilt>

          <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
            <BentoTilt className="relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2">
              <BentoCard
                src="another thing"
                title="some another thing"
                description="some ting and some another thing"
              />
            </BentoTilt>
            <BentoTilt className="relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-spa-1 ms-32 md:col-span-1 md:ms-0">
              <BentoCard
                src="third thing"
                title="third thing"
                description="third thing description"
              />
            </BentoTilt>
            <BentoTilt className="relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out me-14 md:col-span-1 md:me-0">
              <BentoCard
                src="fourth thing"
                title="fourth thing"
                description="fourth thing description"
              />
            </BentoTilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
