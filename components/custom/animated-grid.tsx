"use client"
import { useTheme } from "next-themes";
import { Emoji } from "./Emoji";
import ShimmerButton from "../ui/shimmer-button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BoxReveal from "../ui/box-reveal";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import Image from "next/image";
import profile from "@/public/profile.svg";

export function AnimatedGridPatternPart() {
  const { theme } = useTheme();
  const background = theme === "dark" ? "bg-black" : "bg-white";
  const shimmer = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className="relative h-dvh w-full flex flex-col">
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "mask-radial-gradient mask-500 mask-center mask-white",
          "inset-x-0 inset-y-[-30%] h-full w-full skew-y-12"
        )}
      />

      <div className="absolute grid grid-cols-1 md:grid-cols-2 justify-center items-start md:items-center mx-auto h-full w-full mb-3 md:mb-5">
        <Emoji />
        <div className="hidden md:flex">
          <BoxReveal boxColor={"#001F3F"}>
            <Image
              src={profile}
              width={500}
              height={500}
              className="object-cover h-64 w-full"
              alt="an illustration saying hello"
            />
          </BoxReveal>
        </div>
      </div>

      <div className="absolute inset-0 z-20 flex flex-row gap-2 md:gap-5 justify-center items-end md:items-end mb-8 md:mb-24 pb-2">
        <Link href="/#project" scroll={true}>
          <ShimmerButton
            className="shadow-2xl p-2"
            shimmerColor={shimmer}
            background={background}
          >
            <span className="text-sm font-medium leading-none tracking-tight text-center text-black dark:text-white p-5">
              My Work
            </span>
          </ShimmerButton>
        </Link>

        <Link href="/#contact" scroll={true}>
          <ShimmerButton className="shadow-2xl p-2">
            <span className="text-sm font-medium leading-none tracking-tight text-center text-white dark:from-white dark:to-slate-900/10 p-5">
              Let's Chat
            </span>
          </ShimmerButton>
        </Link>
      </div>
    </div>
  );
}
