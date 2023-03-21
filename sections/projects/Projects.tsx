'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HomeCard } from '../../components';
import projectsData from '../../data/projects';

import { staggerContainer, textVariant2 } from '../../utils/motion';

export interface IProjects {}

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
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-12">
          <div className="gradient-04 -z-10" />
          {projectsData &&
            projectsData.map((project, index) => (
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
