import type { IconType } from 'react-icons';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { MdOutlineCss } from 'react-icons/md';
import { IoLogoJavascript } from 'react-icons/io5';
import { CgFigma } from 'react-icons/cg';
import { SiTypescript } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { RiPhpFill } from 'react-icons/ri';
import { FaGolang } from 'react-icons/fa6';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { SiNestjs } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { TbBrandThreejs } from 'react-icons/tb';
import { FaLaravel } from 'react-icons/fa';
import { SiAstro } from 'react-icons/si';
import { SiGreensock } from 'react-icons/si';

interface ToolName {
  id: number;
  name: string;
  icon: IconType;
}
export const languages: ToolName[] = [
  {
    id: 1,
    name: 'HTML',
    icon: FaHtml5,
  },
  {
    id: 2,
    name: 'CSS3',
    icon: MdOutlineCss,
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: IoLogoJavascript,
  },
  {
    id: 4,
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    id: 5,
    name: 'Figma',
    icon: CgFigma,
  },
  {
    id: 6,
    name: 'Python',
    icon: FaPython,
  },
  {
    id: 7,
    name: 'Go',
    icon: FaGolang,
  },
  {
    id: 8,
    name: 'PHP',
    icon: RiPhpFill,
  },
];
export const frameworksAndLibraries: ToolName[] = [
  {
    id: 1,
    name: 'React Js',
    icon: FaReact,
  },
  {
    id: 2,
    name: 'Next Js',
    icon: SiNextdotjs,
  },
  {
    id: 3,
    name: 'Tailwind Css',
    icon: RiTailwindCssFill,
  },
  {
    id: 4,
    name: 'Nest Js',
    icon: SiNestjs,
  },
  {
    id: 5,
    name: 'Express Js',
    icon: SiExpress,
  },
  {
    id: 6,
    name: 'ThreeJs',
    icon: TbBrandThreejs,
  },
  {
    id: 7,
    name: 'Framer Motion',
    icon: TbBrandFramerMotion,
  },
  {
    id: 8,
    name: 'GSAP',
    icon: SiGreensock,
  },
  {
    id: 9,
    name: 'Laravel',
    icon: FaLaravel,
  },
  {
    id: 10,
    name: 'Astro',
    icon: SiAstro,
  },
];
