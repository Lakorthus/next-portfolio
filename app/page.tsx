import { About, Hero } from '../sections/';
const Home = () => {
  return (
    <>
      <Hero sampleTextProp="Hello from Hero" />
      <div className="relative">
        <About sampleTextProp="Hello from About" />
        <div className="gradient-03 z-0" />
        {/* <Explore /> */}
      </div>
    </>
  );
};

export default Home;
