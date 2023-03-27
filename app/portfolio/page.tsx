import { Suspense } from 'react';
import { TabProjects } from '../../components';

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const Portfolio = () => {
  return (
    <Suspense fallback={<Loading />}>
      <section className="mt-8 paddings innerWidth px-2 mx-auto max-w-screen-md text-info sm:mt-4">
        <h2 className="krona-one mb-4 text-4xl tracking-tight font-extrabold text-center">
          Recent Projects
        </h2>
        <p className="krona-one mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Projects builds using diverse technologies.
          <br />
          <span className="underline mt-4 text-accent">
            🚧 Under construction 🚧
          </span>
        </p>
        <TabProjects />
      </section>
    </Suspense>
  );
};

export default Portfolio;
