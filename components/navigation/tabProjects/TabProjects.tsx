'use client';
import { useState } from 'react';
import Pokemon from '../../../projects/pokemon/Pokemon';
import Three from '../../../projects/three/Three';
import Weather from '../../../projects/weather/Weather';
import ProjectCard, { IProjectCard } from '../../cards/projectCard/ProjectCard';

export interface ITabProjects {
  liveProjects: IProjectCard[];
}

const TabProjects: React.FC<ITabProjects> = ({ liveProjects }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <ul className="ml-1 flex list-none flex-wrap gap-4 p-4" role="tablist">
        <li
          className={`
            flex flex-1 justify-center items-center text-center bg-secondary text-info
            ${
              openTab === 1
                ? 'bg-opacity-100 underline rounded-full'
                : 'bg-opacity-80'
            }
          `}
        >
          <a
            className={
              'text-2xl font-semibold uppercase leading-normal shadow-lg'
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
            aria-label="See tickets in progress"
          >
            Live
          </a>
        </li>
        <li
          className={`flex flex-1 justify-center items-center text-center bg-accent text-info
            ${
              openTab === 2
                ? ' bg-opacity-100 underline rounded-full'
                : 'bg-opacity-80 '
            }
          `}
        >
          <a
            className={
              'block px-2 py-3 text-2xl font-semibold uppercase leading-normal shadow-lg '
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
            aria-label="See completed tickets"
          >
            Interactives
          </a>
        </li>
      </ul>
      <div className="relative mb-6 flex flex-col rounded shadow-lg">
        <div
          className={`max-w-[1440px] grid grid-cols-1 
            ${openTab === 1 ? 'block' : 'hidden'}
          `}
          id="link1"
        >
          {liveProjects &&
            liveProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                text={project.text}
                span={project.span}
                live={project.live}
                gitHub={project.gitHub}
                imgUrl={project.imgUrl}
              />
            ))}
        </div>
        <div
          className={`max-w-[1440px] grid grid-cols-1
            ${openTab === 2 ? 'block' : 'hidden'}
          `}
          id="link2"
        >
          <ProjectCard
            title={'Three.js'}
            text={
              'This is a React component that uses the @react-three/fiber and @react-three/drei libraries to create a 3D scene with two canvas elements. Each canvas contains some 3D objects with different shapes and materials, and they can be interacted with using mouse clicks and hovering. The useFrame hook is used to update the objects positions and rotations every frame.'
            }
            span={[
              'React',
              'Three.js',
              'React Three Fiber',
              'React Three Drei',
            ]}
          >
            <Three />
          </ProjectCard>
          <ProjectCard
            title={'Pokemon'}
            text={
              'This is a React component that generates a random Pokemon using the PokeAPI and displays its image, name, ID number, and type. It also includes a button to generate a new random Pokemon.'
            }
            span={['React', 'TypeScript', 'React Hooks', 'Tailwind CSS']}
          >
            <Pokemon />
          </ProjectCard>
          <ProjectCard
            title={'Weather App'}
            text={
              'This project is a React-based weather application that uses the OpenWeatherMap API to display the current weather and temperature of a location. Users can search for the weather of any location by entering the location name in the search bar. The UI is designed using Tailwind CSS. Overall, it is a simple and effective application.'
            }
            span={['React', 'Tailwind CSS', 'OpenWeatherMap API']}
          >
            <Weather />
          </ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default TabProjects;
