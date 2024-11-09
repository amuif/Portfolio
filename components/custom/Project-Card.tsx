"use client"
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Safari from "../ui/safari";
import { Button } from "@/components/ui/button";
import BoxReveal from "../ui/box-reveal";

import tesfalem from "@/public/tesfalemproject.jpg";
import fourklabs from "@/public/4klogo.png";
import highclass from "@/public/highclass.jpg";

const projects = [
  {
    title: "Tesfalem Trading PLC",
    description:
      "I developed a professional website for Tesfalem Trading PLC, a company that provides comprehensive services in car rentals, logistics, and airport shuttle operations.",
    image: tesfalem,
    techStack: ["Typescript", "Next Js", "TailwindCss", "Shadcn UI", "Next UI"],
    link: "https://tesfalemtransport.com/",
  },
  {
    title: "4k Labs",
    description:
      "I contributed to the development of 4klabs' website, a company that drives innovation and executes a variety of projects. 4klabs is deeply rooted in the Addis Ababa University (AAU) Computer Science Department.",
    image: fourklabs,
    techStack: [
      "Typescript",
      "Next Js",
      "TailwindCss",
      "Material Tailwind",
      "Font awsome",
      "Next UI",
    ],
    link: "https://www.4klabs.tech/",
  },
  {
    title: "High Class Car Rental and Airport Shuttle",
    description:
      "I developed a website for Highclass Car Renting, a company specializing in car rentals and airport shuttle services.",
    image: highclass,
    techStack: ["Typescript", "Next Js", "TailwindCss", "Shadcn UI", "Next UI"],
    link: "https://highclasscarrent.com/",
  },
];

export function CardDemo() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 w-full md:w-[80%] mx-auto py-4 ">
        {projects.map((project, index) => (
          <BoxReveal>
            <div key={index} className="flex flex-col h-fit border-black dark:border-white px-2 ">
              <div>
                <div className="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ">
                  <Safari
                    url="magicui.design"
                    className="size-full object-cover h-full w-full "
                    src={project.image.src}
                  />
                </div>

              </div>
              <div className=" flex flex-col md:flex-row gap-2 w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full  ">
                  <h4 className="font-bold text-black dark:text-white text-xl text-left w-full pt-5">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-white text-sm  w-full text-left">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-start  bottom-0 w-full">
                    {project.techStack.map((stack, index) => (
                      <div
                        key={index}
                        className="bg-third dark:bg-third  p-2 rounded-lg"
                      >
                        <span className="text-white text-xs  flex items-center justify-center">
                          {stack}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-1/2 gap-2 bg-second">
                    <Link href={project.link} className="text-sm " target="_blank" rel="noopener noreferrer">
                      Live Demo<ArrowUpRight />
                    </Link>
                  </Button>
                </div>{" "}
              </div>
            </div>

          </BoxReveal>))}
      </div>
    </>
  );
}
