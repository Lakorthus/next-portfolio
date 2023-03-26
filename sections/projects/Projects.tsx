'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { HomeCard } from '../../components';
import projectsData from '../../data/projects';
import map from '../../public/map.png';
import { staggerContainer, textVariant2 } from '../../utils/motion';

export interface IProjects {}

const Projects: React.FC<IProjects> = () => {
  const [active, setActive] = useState('project-2');
  return (
    <section id="projects" className={`flexCenter flex-col paddings relative`}>
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`krona-one my-4 font-bold text-xl sm:text-3xl sm:my-8`}
      >
        Some Projects
      </motion.h2>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto flex flex-col`}
      >
        <div className="relative flex flex-col md:flex-row  gap-12 z-30">
          <Image
            src={map}
            alt="contact map"
            className="w-full h-auto object-cover absolute -z-10"
            priority
          />
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
