import { useEffect } from 'react';
import projects from '../data/projects';
import { TextAnimate } from './magicui/text-animate';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { useTheme } from './Theme-Provider';

const Projects = () => {
  const { theme } = useTheme();
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <section className="min-h-screen px-3">
      <div className="flex flex-col gap-5 pb-5 lg:pb-12 items-center justify-center text-center">
        <TextAnimate className="text-sm uppercase md:text-base text-black dark:text-white font-robert">
          Featured Projects
        </TextAnimate>
      </div>
      <div className="flex-col space-y-4 gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {projects.slice(0, 3).map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <img src={project.image} alt={`${project.name} photo`} />
                </div>
                <div>{project.description}</div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.href}>Live demo</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="w-full lg:w-[80%] mx-auto">
          <Card className="flex-col lg:flex-row  gap-2">
            <div className="px-2 mx-auto">
              <img
                src={
                  theme === 'light' ? projects[3].darkImage : projects[3].image
                }
                alt={`${projects[3].name} photo`}
                className="h-48 w-48"
              />
            </div>
            <div className="px-3 py-2 h-full w-full lg:w-1/2 flex-col gap-3">
              <div className="text-left">
                {' '}
                <h3>{projects[3].name}</h3>
                <div className="text-pretty">{projects[3].description}</div>
              </div>
              <div className="pt-5">
                <Button asChild>
                  <a href={projects[3].href}>Repositories</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
