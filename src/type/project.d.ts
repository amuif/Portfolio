export type TTechStack = {
  name: string;
  image: string;
};
export type TProject = {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
  techStack: TTechStack[];
};
