import type { projectProps } from '../types/projects';
const projects: projectProps[] = [
  {
    id: 1,
    name: 'Wavic',
    href: 'https://www.wavic.pro/',
    image: 'images/projects/wavic.png',
    description:
      'Wavic is a Barcelona-based startup founded in 2022, offering a collaborative platform designed to streamline  production workflows.',
  },
 {
    id: 2,
    name: 'Axon bot',
    href: 'https://gym-7olg.vercel.app/',
    image: '/images/chatbot.png',
    description:
      'Axion is an intelligent AI chatbot designed to engage, assist, and converse like a human.',
  },
 {
    id: 3,
    name: 'And many  more ',
    href: 'https://github.com/amuif?tab=repositories',
    image: '/images/GitHub_Light.png',
    darkImage:'/images/GitHub_Dark.png',
    description:
      'Discover more projects of mine on github.',
  },


];
export default projects;
