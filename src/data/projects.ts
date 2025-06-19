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
  // {
  //   id: 2,
  //   name: 'Tour nest',
  //   href: '',
  //   image: '/images/tournest.png',
  //   description:
  //     'TourNest is a comprehensive travel booking platform designed to simplify the travel planning experience for both customers and administrators.',
  // },
  // {
  //   id: 3,
  //   name: 'Axon bot',
  //   href: '',
  //   //href: 'https://gym-7olg.vercel.app/',
  //   image: '/images/chatbot.png',
  //   description:
  //     'Axion is an intelligent AI chatbot designed to engage, assist, and converse like a human.',
  // },
];
export default projects;
