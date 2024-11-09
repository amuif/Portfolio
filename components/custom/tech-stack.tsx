"use client"
import React from "react";
import IconCloud from "../ui/icon-cloud";
import GradualSpacing from "../ui/gradual-spacing";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";
import BoxReveal from "../ui/box-reveal";


const slugs = [
  "html5",
  "css3",
  "typescript",
  "javascript",
  "nodedotjs",
  "express",
  "react",
  "nextdotjs",
  "bootstrap",
  "tailwindcss",
  "mongodb",
  "go",
  "python",
  "vercel",
  "testinglibrary",
  "docker",
  "git",
  "github",

  "figma",
  "framer",
  "adobexd",
];
const Languages = [
  {
    id: 1,
    stack: "HTML",
  },
  {
    id: 2,
    stack: "CSS",
  },
  {
    id: 3,
    stack: "JavaScript",
  },
  {
    id: 4,
    stack: "TypeScript",
  },
  {
    id: 5,
    stack: "Python",
  },
  {
    id: 6,
    stack: "GO",
  },
];
const frameworks = [
  {
    id: 1,
    stack: "React",
  },
  {
    id: 2,
    stack: "Next JS",
  },
  {
    id: 7,
    stack: "Express JS",
  },
  {
    id: 3,
    stack: "Tailwind CSS",
  },
  {
    id: 4,
    stack: "Bootstrap",
  },
  {
    id: 5,
    stack: "Gin",
  },
  {
    id: 6,
    stack: "Fiber",
  },
];
const TechStack = () => {
  return (
    <>
      <div className="w-full md:w-[80%] h-fit px-2 mx-auto flex flex-col justify-center items-center pt-24">
        <BoxReveal>
          <motion.div
          >
            <GradualSpacing
              className="font-semibold text-center text-4xl  -tracking-widest pb-10 text-black dark:text-white md:text-4xl md:leadng-[5rem] "
              text="Skills"
            />
          </motion.div>
        </BoxReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col space-x-1 gap-2 pt-5">
            <BoxReveal>
              <div>
                {" "}
                <h4>Languages</h4>
                <Separator className="" />
              </div>

            </BoxReveal>

            <BoxReveal>
              <div className="flex flex-row flex-wrap gap-x-2 gap-y-1  pt-2">
                {Languages.map((Language, index) => (
                  <div
                    className="bg-third  w-fit h-fit p-3 rounded-lg"
                    key={index}
                  >
                    <span className="text-white text-sm">
                      {Language.stack.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>

            </BoxReveal>
            <div className="flex flex-col gap-2 pt-5">
              <BoxReveal>
                <div>
                  {" "}
                  <h4>Frameworks</h4>
                  <Separator className="" />
                </div>

              </BoxReveal>

              <BoxReveal>
                <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 pt-2 ">
                  {frameworks.map((framework, index) => (
                    <div
                      className="bg-third w-fit h-fit p-3 rounded-lg"
                      key={index}
                    >
                      <span className="text-white text-sm">
                        {framework.stack.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>

              </BoxReveal>

            </div>
          </div>
          <BoxReveal>
            <div className="relative flex size-full h-full items-center justify-center overflow-hidden rounded-lg bg-background px-10 pb-20  pt-0">
              <IconCloud iconSlugs={slugs} />
            </div>

          </BoxReveal>

        </div>
      </div>
    </>
  );
};

export default TechStack;
