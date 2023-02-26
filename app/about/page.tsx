'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';

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
    </div>
  );
};

export default About;
