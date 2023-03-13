import { IProjectCard } from './ProjectCard';

const base: IProjectCard = {
  children: '{{component}}',
  title: 'Project Title',
  text: 'Project text',
  span: ['span1', 'span2', 'span3'],
};

export const mockProjectCardProps = {
  base,
};
