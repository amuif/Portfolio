"use client"
import React from "react";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { motion } from "framer-motion";
const ProjectsHeadline = () => {
  return (
    <>
      <div id="project" className="pt-24" >
        <motion.div className=""
          initial={{ y: 70, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 1,
              animate: "ease"
            }
          }}
          viewport={{
            once: true
          }}
        >
          <GradualSpacing
            className="font-semibold text-center text-4xl  -tracking-widest  text-black dark:text-white md:text-4xl md:leading-[5rem]"
            text="Real-World Results"
          />

        </motion.div>
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              ease: "easeIn",
              duration: 1,
            }
          }}
          viewport={{
            once: true
          }}
        >
          <h5 className="text-gray-600 dark:text-white w-[80%] md:w-[50%] mx-auto text-center text-sm">
            Showcasing innovative and impactful frontend solutions, blending
            modern design with efficient code to deliver seamless user
            experiences.
          </h5>

        </motion.div>

      </div >
    </>
  );
};

export default ProjectsHeadline;
