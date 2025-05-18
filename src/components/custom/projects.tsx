import { LayoutGrid } from 'lucide-react';
import Text from '../ui/Text';
import { ProjectData } from '@/data/projects';
import TiltedCard from '../ui/TiltedCard';
import TiltingComponent from '../ui/Tilting-component';
const Projects = () => {
  return (
    <div className="flex flex-col gap-5 px-3 ">
      <div className="text-center flex flex-col gap-5 w-full items-center justify-center">
        <Text className="flex gap-2 text-xl lg:text-3xl font-bold items-center justify-center">
          <LayoutGrid className="h-5 w-5 object-contain" /> Projects
        </Text>
        <Text className="text-center flex text-base lg:text-xl items-center justify-center ">
          Full-Stack Projects Built with
          <br className="sm:flex hidden" />
          Precision and Purpose
        </Text>
      </div>
      <div className="flex flex-col gap-7 lg:gap-12 py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-5 lg:px-10 justify-between items-center">
          {
            <TiltingComponent
              imageSrc={ProjectData[0].image}
              altText={`${ProjectData[0].name} photo`}
              captionText={ProjectData[0].name}
              header={ProjectData[0].name}
              description={ProjectData[0].description}
              link={ProjectData[0].link}
              showTooltip={false}
              className={`flex rounded-xl p-5`}
            />
          }
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly gap-10 items-center lg:px-10 w-full mx-auto">
          {ProjectData.slice(1).map(({ id, name, link, image }) => (
            <TiltedCard
              key={id}
              imageSrc={image}
              name={name}
              link={link}
              altText={`${name} photo`}
              captionText={name}
              className={`flex ${id !== 1 ? 'flex-col' : 'flex-col lg:flex-row  justify-start p-5 text-white mx-auto'} `}
            />
          ))}
        </div>
      </div>{' '}
    </div>
  );
};

export default Projects;
