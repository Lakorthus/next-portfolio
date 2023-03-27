import projectsData from '../../../data/projects';
import { ITabProjects } from './TabProjects';

const base: ITabProjects = {
  liveProjects: projectsData,
};

export const mockTabProjectsProps = {
  base,
};
