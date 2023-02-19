'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import HomeCard from '../../components/cards/home/HomeCard';
import { staggerContainer, textVariant2 } from '../../utils/motion';

export interface IProjects {}

export const exploreprojects = [
  {
    id: 'project-1',
    imgUrl: '/google.png',
    title: 'The Hogwarts',
  },
  {
    id: 'project-2',
    imgUrl: '/google.png',
    title: 'The Upside Down',
  },
  {
    id: 'project-3',
    imgUrl: '/google.png',
    title: 'Kadirojo Permai',
  },
  {
    id: 'project-4',
    imgUrl: '/google.png',
    title: 'Paradise Island',
  },
  {
    id: 'project-5',
    imgUrl: '/google.png',
    title: 'Hawkins Labs',
  },
];
const Projects: React.FC<IProjects> = () => {
  const [active, setActive] = useState('project-2');
  return (
    <section className={`flexCenter flex-col paddings`} id="explore">
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`my-4 font-bold md:text-[40px] text-[34px] text-white md:my-8`}
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
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
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
