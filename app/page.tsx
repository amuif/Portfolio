import AboutHeadline from "@/components/custom/AboutHeadline";
import { AnimatedGridPatternPart } from "@/components/custom/animated-grid";
import ContactForm from "@/components/custom/ContactForm";

import { CardDemo } from "@/components/custom/Project-Card";
import ProjectsHeadline from "@/components/custom/ProjectsHeadline";
import Services from "@/components/custom/Services";
import TechStack from "@/components/custom/tech-stack";
import WorkExprience from "@/components/custom/WorkExprience";

export default function Home() {
  return (
    <>
      <AnimatedGridPatternPart />
      <Services />
      <WorkExprience />

      <ProjectsHeadline />
      <CardDemo />
      <TechStack />
      <ContactForm />
    </>
  );
}
