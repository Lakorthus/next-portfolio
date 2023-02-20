'use client';
import { About, Contact, Hero, Projects } from '../sections/';
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Projects />
      </div>
      <div className="relative">
        <Contact />
        <div className="gradient-04 z-0" />
      </div>
    </div>
  );
};

export default Home;
