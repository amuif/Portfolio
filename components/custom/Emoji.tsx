import React from "react";
import BoxReveal from "../ui/box-reveal";

export const Emoji = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-between  md:mb-9 mx-">
        <div className="flex items-center justify-center h-svh  flex-col gap-5 ">
          <BoxReveal boxColor={"#C9DABF"} duration={0.5}>

            <p className="text-5xl md:text-7xl font-semibold">
              Hi, I'm Ibrahim<span className="text-prime rounded-full">.</span>
            </p>

          </BoxReveal>
          <BoxReveal boxColor="#C9DABF">
            <p className="text-3xl md:text-5xl font-semibold">I'm a <span className="text-prime "> Web Developer </span> </p>

          </BoxReveal>

        </div>

      </div>

    </>
  );
};
