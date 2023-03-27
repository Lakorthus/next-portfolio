'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { AboutFile, AboutSpan } from '../../components';
import aboutData from '../../data/about';
import { commentAbout, explorerAbout, folderAbout } from '../../utils/motion';

const About = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [title, setTitle] = useState('');

  const handleDoubleClick = (format: string) => {
    const storedTabs = JSON.parse(localStorage.getItem('openTabs') || '[]');
    if (!storedTabs.includes(format)) {
      const updatedTabs = [...storedTabs, format];
      localStorage.setItem('openTabs', JSON.stringify(updatedTabs));
    }
    setTitle(format);
  };

  return (
    <section className={`h-screen flexCenter flex-col paddings`}>
      <h2 className="krona-one mb-4 text-4xl tracking-tight font-extrabold text-center">
        Contact Me
      </h2>
      <div className="gradient-02 z-0" />
      <div className="bg-[#121216] w-full h-[80%] flex justify-start relative overflow-hidden">
        <div className="flex justify-start w-full relative">
          <div className="absolute md:relative h-full z-20">
            {showMenu && (
              <motion.div
                className={`bg-[#18181c] p-4 hidden overflow-auto h-full w-[310px] carousel carousel-vertical`}
                initial="hidden"
                animate="visible"
                variants={explorerAbout}
              >
                <div className="bg-[#121216] border-8 border-[#121216] h-full p-4 text-info">
                  <h3 className="font-bold ml-3.5 mb-2.5 lg:text-2xl text-xl">
                    Explorer
                  </h3>
                  <div>
                    <span style={{ marginLeft: '5px' }}>MY INTERESTS</span>
                    {aboutData.map((item, index) => (
                      <AboutFile
                        key={index}
                        title={item.title}
                        listItems={item.listItems}
                        variants={folderAbout}
                        yellow={item.yellow}
                        blue={item.blue}
                        red={item.red}
                        green={item.green}
                        handleDoubleClick={handleDoubleClick}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={commentAbout}
            className={`flex-1`}
          >
            <div
              className={`bg-[#18181c] absolute flex items-center justify-start w-full h-12 z-20 p-4 overflow-auto carousel carousel-center`}
            >
              {title && (
                <h5 className="p-4 bg-[#121216] relative min-w-[12.5rem]">
                  {title}{' '}
                  <span className="absolute top-2 right-2 p-1 bg-slate-600 text-xs cursor-pointer">
                    x
                  </span>
                </h5>
              )}
            </div>
            <div className={`flex items-center justify-start h-full ml-2`}>
              <AboutSpan start={14} end={50} />
              <div className={`flex flex-col text-gray-500 text-lg ml-6`}>
                <span className={`-ml-3.5`}> / ** </span>
                <h2 className={`font-bold`}>
                  <span>*</span>About me
                </h2>
                <p>
                  <span>*</span> Creative and self-starting Front-End Developer
                  <br />
                  <span>*</span> with 2 years experience and maintaining
                  <br />
                  <span>*</span> responsive websites.
                  <br />
                  <span>*</span> Proficient in HTML, CSS, JavaScript
                  <br />
                  <span>*</span> and React plus modern libraries and frameworks.
                </p>
                <span className={`-ml-3.5`}>* /</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div
          className={` text-3xl cursor-pointer flex opacity-100 z-30 text-info`}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <CgMenuGridR /> : <CgMenuGridR />}
        </div>
      </div>
    </section>
  );
};

export default About;
