'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenu } from 'react-icons/hi';
import { AboutFile, AboutSpan } from '../../components';
import { commentAbout, explorerAbout, folderAbout } from '../../utils/motion';

const About = () => {
  const [showReact, setShowReact] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const [showHtml, setShowHtml] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showFree, setShowFree] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div
      className={`relative h-screen flex items-center justify-between yPaddings pl-16 md:pl-32  lg:pl-72`}
    >
      <div className="gradient-02 z-0" />
      <div
        className={` text-3xl cursor-pointer lg:hidden flex opacity-100`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <AiOutlineClose /> : <HiOutlineMenu />}
      </div>

      <div className={`flex ml-0.5  lg:h-128 h-96 relative`}>
        <AboutSpan start={1} end={33} />

        <motion.div
          className={`flex flex-col justify-center ml-3.5 text-gray-500 text-lg`}
          initial="hidden"
          animate="visible"
          variants={commentAbout}
        >
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
        </motion.div>
      </div>
      {showMenu && (
        <motion.div
          className={`bg-[#010409] h-screen mt-28 p-4 lg:w-96 w-80 hidden absolute right-0 overflow-auto`}
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

              <AboutFile
                title="React"
                listItems={[
                  'reusable components.md',
                  'routing.md',
                  'fetching api.md',
                  'context api.md',
                  'redux.md',
                ]}
                setState={setShowReact}
                state={showReact}
                variants={folderAbout}
                yellow
              />
              <AboutFile
                title="Next"
                listItems={[
                  'reusable components.md',
                  'routing.md',
                  'fetching api.md',
                  'SSR.md',
                ]}
                setState={setShowNext}
                state={showNext}
                variants={folderAbout}
                blue
              />
              <AboutFile
                title="Library"
                listItems={[
                  'material ui.md',
                  'bootstrap.md',
                  'tailwind Css.md',
                  'framer motion.md',
                ]}
                setState={setShowLibrary}
                state={showLibrary}
                variants={folderAbout}
                red
              />
              <AboutFile
                title="Html & CSS"
                listItems={[
                  'responsive website.md',
                  'grid flexbox.md',
                  'Sass sCss.md',
                  'animation.md',
                ]}
                setState={setShowHtml}
                state={showHtml}
                variants={folderAbout}
                green
              />
              <AboutFile
                title="Free Time"
                listItems={[
                  'read science fiction.md',
                  'play video games.md',
                  'hang out with friends.md',
                  'learn new things.md',
                  'building side project.md',
                ]}
                setState={setShowFree}
                state={showFree}
                variants={folderAbout}
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
