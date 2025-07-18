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
    name: 'Clarity',
    href: 'https://clarity-financee.vercel.app/',
    image: '/images/clarity.svg',
    description:
      'Take charge of your financial future with crystal-clear control over your finances. Simplify budgeting and track spending with AI-powered insights.',
  },

  // {
  //   id: 3,
  //   name: 'Axon bot',
  //   href: 'https://axonchatbot.vercel.app/',
  //   image: '/images/chatbot.webp',
  //   description:
  //     'Axion is an intelligent AI chatbot designed to engage, assist, and converse like a human.',
  // },
  {
    id: 3,
    name: 'And many  more ',
    href: 'https://github.com/amuif?tab=repositories',
    image: '/images/GitHub_Light.webp',
    darkImage: '/images/GitHub_Dark.webp',
    description: 'Discover more projects of mine on github.',
  },
];
export default projects;
