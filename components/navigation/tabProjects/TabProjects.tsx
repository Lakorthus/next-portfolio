'use client';
import { useState } from 'react';
import Pokemon from '../../../projects/pokemon/Pokemon';
import Weather from '../../../projects/weather/Weather';

export interface ITabProjects {}

const TabProjects: React.FC<ITabProjects> = () => {
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
          <Pokemon />
          <Weather />
          <Pokemon />
        </div>
        <div
          className={`max-w-[1440px] grid grid-cols-1
            ${openTab === 2 ? 'block' : 'hidden'}
          `}
          id="link2"
        >
          <Pokemon />
          <Pokemon />
          <Pokemon />
        </div>
      </div>
    </div>
  );
};

export default TabProjects;
