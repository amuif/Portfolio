import type { TProject } from '@/type/project';
export const ProjectData: TProject[] = [
  {
    id: 1,
    name: 'Wavic Pro',
    link: 'https://wavic.pro/',
    image: 'temp/5.jpg',
    description:
      'Wavic is a Barcelona-based music tech startup founded in 2022, offering a collaborative cloud platform for music creators. It provides tools for managing projects, sharing media, and real-time collaboration, all secured with AWS infrastructure. Often likened to a "GitHub for musicians," Wavic streamlines the music production process for artists, producers, and industry professionals.',
    techStack: [
      {
        name: 'Next Js',
        image: '',
      },
      {
        name: 'NextAuth Js',
        image: '',
      },
      {
        name: 'Tailwind CSS',
        image: '',
      },
    ],
  },
  {
    id: 2,
    name: 'Tour Nest ',
    image: 'temp/4.jpg',
    description:
      'Tour nest is a website that is made for travel managing companies to easily manage their flight data',
    link: '',

    techStack: [
      {
        name: 'Laravel',
        image: '',
      },
      {
        name: 'React',
        image: '',
      },
      {
        name: 'SQL',
        image: '',
      },
      {
        name: 'Tailwind CSS',
        image: '',
      },
    ],
  },
  {
    id: 3,
    name: 'Axon Chatbot',
    image: 'temp/3.jpg',
    description:
      'Axon chatbot is an ai powered bot that can answer your questions',
    link: '',
    techStack: [
      {
        name: 'Next Js',
        image: '',
      },
      {
        name: 'Nest Js',
        image: '',
      },
      {
        name: 'Tailwind CSS',
        image: '',
      },
    ],
  },
];
