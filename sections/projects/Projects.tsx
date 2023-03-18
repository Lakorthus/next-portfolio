'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HomeCard } from '../../components';
import caimito from '../../public/caimito.png';
import projectOne from '../../public/frame.png';
import letchat from '../../public/letchat.png';
import portfolio from '../../public/portfolio.png';
import vegan from '../../public/vegan.png';

import { staggerContainer, textVariant2 } from '../../utils/motion';

export interface IProjects {}

export const exploreprojects = [
  {
    id: 'project-1',
    imgUrl: projectOne,
    title: 'Project Metarvese',
  },
  {
    id: 'project-2',
    imgUrl: vegan,
    title: 'La Vegan Loca',
  },
  {
    id: 'project-3',
    imgUrl: letchat,
    title: 'LetChat',
  },
  {
    id: 'project-4',
    imgUrl: caimito,
    title: 'Caimito',
  },
  {
    id: 'project-5',
    imgUrl: portfolio,
    title: 'Old Portfolio',
  },
];
const Projects: React.FC<IProjects> = () => {
  const [active, setActive] = useState('project-2');
  return (
    <section className={`flexCenter flex-col paddings relative`} id="projects">
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`my-4 font-bold md:text-[40px] text-[34px] md:my-8 tracking-[15px]`}
      >
        Projects
      </motion.h2>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto flex flex-col`}
      >
        <div className="gradient-04 -z-10" />
        <div className="flex lg:flex-row flex-col">
          {exploreprojects.map((project, index) => (
            <HomeCard
              key={project.id}
              id={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
