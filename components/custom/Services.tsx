
"use client"
import React from "react";
import GradualSpacing from "../ui/gradual-spacing";
import Image, { StaticImageData } from "next/image";
import webDev from "@/public/WebDev.png";
import LandingPage from "@/public/LandingPage.png";
import WebDesign from "@/public/WebDesign.png";
import { Card, CardContent, CardHeader } from "../ui/card";
import { MagicCard } from "../ui/magic-card";
import { useTheme } from "next-themes";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface ServicesProps {
  id: number;
  service: string;
  image: StaticImageData;
}

const ServicesData: ServicesProps[] = [
  {
    id: 1,
    service: "Web Development",
    image: webDev,
  },
  {
    id: 2,
    service: "Web Design",
    image: WebDesign,
  },
  {
    id: 3,
    service: "Landing Page",
    image: LandingPage,
  },
];

const ROTATION_RANGE = 30;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const Services = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="flex flex-col gap-5 w-full pt-12 md:pt-16 px-2" id="services">
        <div className="flex flex-col justify-between w-full md:w-[90%] mx-auto items-center">
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                ease: "anticipate",
                duration: 1,
              },

            }}
            viewport={{
              once: true
            }}
          >
            <GradualSpacing
              className="font-semibold text-left text-4xl -tracking-widest text-black dark:text-white md:text-4xl md:leading-[5rem]"
              text="My Services"
            />
          </motion.div>
          <motion.div
            initial={{
              y: -70,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                ease: "linear",
                duration: 1
              }
            }}
            viewport={{
              once: true
            }}
            className="w-full md:w-[55%] text-gray-600 text-center">
            <p>
              Delivering responsive, user-friendly web applications with
              innovative frontend development solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
          {ServicesData.map((service, index) => {
            const ref = React.useRef(null);
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const xSpring = useSpring(x);
            const ySpring = useSpring(y);
            const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

            const handleMouseMove = (e: any) => {
              if (!ref.current) return [0, 0];

              const rect = ref.current.getBoundingClientRect();
              const width = rect.width;
              const height = rect.height;

              const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
              const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

              const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
              const rY = mouseX / width - HALF_ROTATION_RANGE;

              x.set(rX);
              y.set(rY);
            };

            const handleMouseLeave = () => {
              x.set(0);
              y.set(0);
            };

            return (
              <div key={index} className="w-full h-full p-0">
                <motion.div
                  ref={ref}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transformStyle: "preserve-3d",
                    transform,
                  }}
                  className="relative h-96 w-96 rounded-xl bg-gradient-to-br from-prime to-prime"
                >
                  <div
                    style={{
                      transform: "translateZ(75px)",
                      transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-4 grid place-content-center rounded-xl bg-background shadow-lg"
                  >
                    <MagicCard
                      className="group relative cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap p-0 "
                      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                    >
                      <Image
                        src={service.image}
                        alt="my services photo"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                      <p className="absolute inset-0 flex md:hidden group-hover:flex items-end justify-center rounded text-xl md:text-3xl font-semibold pb-4 text-black dark:text-white">
                        {service.service}
                      </p>
                    </MagicCard>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
