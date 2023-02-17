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
      <div className="relative">
        {/* <GetStarted /> */}
        <div className="gradient-04 z-0" />
        {/* <WhatsNew /> */}
      </div>
      {/* <World /> */}
      <div className="relative">
        {/* <Insights /> */}
        <div className="h-screen bg-red-300 z-0" />
        {/* <Feedback /> */}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
