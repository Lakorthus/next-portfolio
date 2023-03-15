import { Suspense } from 'react';
import { TabProjects } from '../../components';

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const Portfolio = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="gradient-03 z-0" />
      <TabProjects />

      <div className="gradient-04 z-0" />
    </Suspense>
  );
};

export default Portfolio;
