import type { projectProps } from "../types/projects";
const projects: projectProps[] = [
  {
    id: 1,
    name: "E commerce template",
    href: "https://ecommerce-template-ebon.vercel.app/",
    image: "/images/ecommerce.jpg",
    description:
      "This high-performance e-commerce template serves as a sleek, responsive blueprint for developers to build modern online stores.",
  },
  {
    id: 2,
    name: "Write wave",
    href: "https://writewave-eight.vercel.app/",
    image: "/images/write-wave.png",
    description:
      "Supercharge your workflow with write wave— the smartest way to capture, organize, and link dev notes, code snippets, and technical insights.",
  },
  // {
  //   id: 3,
  //   name: "Citizen charter portal",
  //   href: "https://aatmadcs.et/",
  //   image: "/images/logo.png",
  //   description:
  //     "The Charter is a site that outlines the services provided by the Addis Ababa Traffic Management Authority, and the rights of citizens.",
  // },

  {
    id: 4,
    name: "And many  more ",
    href: "https://github.com/amuif?tab=repositories",
    image: "/images/GitHub_Light.webp",
    darkImage: "/images/GitHub_Dark.webp",
    description:
      "Discover more projects of mine on GitHub,\nwhere I showcase a variety of creative and technical works.\nDive into detailed code, explore different technologies, and see how I tackle unique challenges.",
  },
];
export default projects;
