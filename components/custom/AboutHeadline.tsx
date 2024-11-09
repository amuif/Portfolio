import React from "react";
import me from "@/public/profile.png";
import Image from "next/image";
import GradualSpacing from "../ui/gradual-spacing";
import ShinyButton from "../ui/shiny-button";

import Link from "next/link";
const AboutHeadline = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto w-full py-24 px-4  bg-secondbg/20 dark:bg-darkerbg" id="about">
        <GradualSpacing
          className="font-semibold text-center text-4xl  -tracking-widest  text-black dark:text-white md:text-4xl md:leading-[5rem] pt-10"
          text="Why Hire Me?"
        />

        <div className="flex flex-col md:flex-row gap-4 items-center  justify-around mx-auto px-2">
          <div className="w-full lg:w-2/5 order-2 md:order-1 flex flex-col gap-10 md:gap-5">
            <p className="text-xl">
              My passion for coding and design drives me to create user-friendly
              and visually appealing websites. I enjoy learning new technologies
              and applying them to real-world projects, continuously improving
              my skills and expanding my knowledge in the ever-evolving field of
              web development.{" "}
            </p>
            <div className="w-full md:w-1/4  flex justify-center items-center mx-auto">
              {" "}
              <Link href="/#contact" scroll={true} >
                <ShinyButton className="border-black dark:border-white border-solid  text-black dark:text-white">
                  Hire Me
                </ShinyButton>
              </Link>
            </div>
          </div>
          <div className="w-fit order-1 md:order-2">
            <Image
              src={me}
              alt="Photo of the portfolio owner"
              width={500}
              height={500}
              className="object-cover h-72 w-72"
            />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default AboutHeadline;
