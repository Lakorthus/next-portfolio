import { About, Hero } from '../sections/';
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
      </div>
    </div>
  );
};

export default Home;
