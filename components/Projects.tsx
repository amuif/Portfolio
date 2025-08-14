import Link from "next/link";
import projects from "../data/projects";
import { TextAnimate } from "./magicui/text-animate";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useTheme } from "next-themes";
import Image from "next/image";
const Projects = () => {
  const { theme } = useTheme();
  return (
    <section id="projects" className="min-h-screen pt-10 px-3">
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
                  <Image
                    src={project.image}
                    alt={`${project.name} photo`}
                    width={500}
                    height={500}
                  />
                </div>
                <div>{project.description}</div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={project.href}>Live demo</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="w-full lg:w-[80%] mx-auto">
          <Card className="flex-col lg:flex-row  gap-2">
            <div className="px-2 mx-auto">
              <Image
                src={
                  theme === "light" ? projects[3].darkImage! : projects[3].image
                }
                alt={`${projects[3].name} photo`}
                width={500}
                height={500}
                className="h-48 w-48"
              />
            </div>
            <div className="px-3 py-2 h-full w-full lg:w-1/2 flex-col gap-3">
              <div className="text-left">
                {" "}
                <h3>{projects[3].name}</h3>
                <div className="text-pretty">{projects[3].description}</div>
              </div>
              <div className="pt-5">
                <Button asChild className="w-full lg:w-fit">
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
