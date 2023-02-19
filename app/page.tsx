import { About, Hero, Projects } from '../sections/';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
