'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { AboutFile, AboutSpan } from '../../components';
import aboutData from '../../utils/about';
import { commentAbout, explorerAbout, folderAbout } from '../../utils/motion';

const About = () => {
  const [showReact, setShowReact] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const [showHtml, setShowHtml] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showFree, setShowFree] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const doubleClick = () => {
    console.log('double click');
  };
  return (
    <div className={`h-screen flexCenter yPaddings xPaddings`}>
      <div className="gradient-02 z-0" />

      <div className="bg-black w-full h-[80%] flex justify-between relative overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={commentAbout}
          className={`flex justify-end w-full max-w-[800px] h-full`}
        >
          <div className={`flexCenter`}>
            <AboutSpan start={14} end={50} />
            <div className={`flex flex-col text-gray-500 text-lg`}>
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

        <div
          className={` text-3xl cursor-pointer flex opacity-100 z-30`}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <CgMenuGridR /> : <CgMenuGridR />}
        </div>
        {showMenu && (
          <motion.div
            className={`bg-[#010409] p-4 hidden absolute overflow-auto h-full min-w-[280px] carousel carousel-vertical`}
            initial="hidden"
            animate="visible"
            variants={explorerAbout}
          >
            <div>
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
                    state={
                      item.title === 'React'
                        ? showReact
                        : item.title === 'Next.js'
                        ? showNext
                        : item.title === 'HTML'
                        ? showHtml
                        : item.title === 'Library'
                        ? showLibrary
                        : item.title === 'Free'
                        ? showFree
                        : false
                    }
                    setState={
                      item.title === 'React'
                        ? setShowReact
                        : item.title === 'Next.js'
                        ? setShowNext
                        : item.title === 'HTML'
                        ? setShowHtml
                        : item.title === 'Library'
                        ? setShowLibrary
                        : item.title === 'Free'
                        ? setShowFree
                        : () => {}
                    }
                    variants={folderAbout}
                    yellow={item.yellow}
                    blue={item.blue}
                    red={item.red}
                    green={item.green}
                    handleDoubleClick={doubleClick}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default About;
