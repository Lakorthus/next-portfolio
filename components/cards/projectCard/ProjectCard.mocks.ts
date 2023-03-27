import project from '../../../public/caimito.png';
import { IProjectCard } from './ProjectCard';

const base: IProjectCard = {
  title: 'Project Title',
  text: 'Project text',
  gitHub: 'https://github.com',
  live: 'https://live.com',
  span: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
  imgUrl: project,
};

export const mockProjectCardProps = {
  base,
};
