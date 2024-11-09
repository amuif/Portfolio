import React from "react";
import GradualSpacing from "../ui/gradual-spacing";
import BoxReveal from "../ui/box-reveal";


const ExprienceInfo = [
  {
    id: 1,
    name: "4k Labs",
    date: "Sep 2023 - Present",
    role: "Software Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo."
  },
  {
    id: 2,
    name: "BitFusion",
    date: "Jun 2024 - Present",
    role: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Duis lacus nunc, posuere in justo"
  }
]

const WorkExperience = () => {
  return (
    <div className="pt-24 flex flex-col justify-between  items-center mx-auto gap-5 md:gap-10 w-full pb-5 ">
      <BoxReveal >
        <div className="w-full">
        <GradualSpacing
              className="font-semibold text-left text-4xl -tracking-widest text-black dark:text-white md:text-4xl md:leading-[5rem]"
              text="Experience"
            />
        </div>

      </BoxReveal>



      <div className="w-full md:w-[80%] flex flex-col gap-10 md:gap-0 space-y-10 pl-4 px-5 md:px-0">

        {
          ExprienceInfo.map(({ id, name, role, date, description }) => (

            <div key={id} className="border-b-third border-b p-3">
              <div className="flex justify-between w-full">
                <BoxReveal>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    {name}
                  </h2>

                </BoxReveal>
                <BoxReveal>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {date}
                  </p>


                </BoxReveal>

              </div>
              <div>
                <div>
                  <BoxReveal>
                    <h2 className="font-semibold text-second dark:text-third">
                      {role}
                    </h2>

                  </BoxReveal>
                </div>
                <div>
                  <BoxReveal>
                    <p className="text-sm text-gray-500 dark:text-gray-400">

                      {description}
                    </p>

                  </BoxReveal>
                </div>              </div>
            </div>


          ))
        }

      </div>
    </div >
  );
};

export default WorkExperience;
