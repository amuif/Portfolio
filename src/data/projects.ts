import type { projectProps } from '../types/projects';
const projects: projectProps[] = [
  {
    id: 1,
    name: 'Wavic',
    href: 'https://www.wavic.pro/',
    image: 'images/wavic.webp',
    description:
      'Wavic is a Barcelona-based startup founded in 2022, offering a collaborative platform designed to streamline  production workflows.',
  },
  {
    id: 2,
    name: 'Write wave',
    href: 'https://writewave-eight.vercel.app/',
    image: '/images/write-wave.png',
    description:
      'Supercharge your workflow with write wave— the smartest way to capture, organize, and link dev notes, code snippets, and technical insights.',
  },

  {
    id: 3,
    name: 'Clarity',
    href: 'https://clarity-financee.vercel.app/',
    image: '/images/clarity.png',
    description:
      'Take charge of your financial future with crystal-clear control over your finances. Simplify budgeting and track spending with AI-powered insights.',
  },

  {
    id: 4,
    name: 'And many  more ',
    href: 'https://github.com/amuif?tab=repositories',
    image: '/images/GitHub_Light.webp',
    darkImage: '/images/GitHub_Dark.webp',
    description:
      'Discover more projects of mine on GitHub,\nwhere I showcase a variety of creative and technical works.\nDive into detailed code, explore different technologies, and see how I tackle unique challenges.',
  },
];
export default projects;
