'use client';

import HomeCard from '../../components/cards/home/HomeCard';

export interface IProjects {}

const Projects: React.FC<IProjects> = () => {
  return (
    <>
      <HomeCard
        title="Projects"
        id="1"
        active="true"
        index={1}
        handleClick={(id) => console.log(id)}
      />
      <HomeCard
        title="Projects"
        id="1"
        active="false"
        index={1}
        handleClick={(id) => console.log(id)}
      />
      <HomeCard
        title="Projects"
        id="1"
        active="false"
        index={1}
        handleClick={(id) => console.log(id)}
      />
    </>
  );
};

export default Projects;
