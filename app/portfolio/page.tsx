import { Suspense } from 'react';
import Pokemon from '../../projects/pokemon/Pokemon';

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const Portfolio = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="max-w-[1440px] grid grid-cols-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="gradient-03 z-0" />
        <Pokemon />
      </div>
    </Suspense>
  );
};

export default Portfolio;
