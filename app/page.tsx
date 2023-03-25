import { Suspense } from 'react';
import { About, Hero, Projects } from '../sections';

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="overflow-hidden">
        <Hero />
        <div className="relative">
          <About />
          <div className="gradient-03 z-0" />
          <Projects />
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
