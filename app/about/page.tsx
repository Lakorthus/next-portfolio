'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFolderFill, BsMarkdownFill } from 'react-icons/bs';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';

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
        className={`absolute right-4 top-0 text-3xl cursor-pointer lg:hidden lg:opacity-0 z-50 flex opacity-100`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <AiOutlineClose /> : <HiOutlineMenu />}
      </div>

      <div className={`flex ml-0.5 overflow-hidden lg:h-128 h-96 relative`}>
        <motion.div
          className={`flex flex-col mt-24 lg:text-lg text-sm`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: '100px',
              opacity: 0,
            },
            visible: {
              y: '-370px',
              opacity: 1,
              transition: {
                type: 'spring',
                delay: 0.2,
                duration: 2,
              },
            },
          }}
        >
          <span className={`opacity-10`}>20</span>
          <span className={`opacity-10`}>21</span>
          <span className={`opacity-10`}>22</span>
          <span className={`opacity-10`}>23</span>
          <span className={`opacity-10`}>24</span>
          <span className={`opacity-10`}>25</span>
          <span className={`opacity-10`}>26</span>
          <span className={`opacity-10`}>27</span>
          <span className={`opacity-10`}>28</span>
          <span className={`opacity-10`}>29</span>
          <span className={`opacity-10`}>30</span>
          <span className={`opacity-10`}>31</span>
          <span className={`opacity-10`}>32</span>
          <span className={`opacity-10`}>33</span>
          <span className={`opacity-10`}>34</span>
          <span className={`opacity-10`}>35</span>
          <span className={`opacity-30`}>36</span>
          <span className={`opacity-60`}>37</span>
          <span>38</span>
          <span>39</span>
          <span>40</span>
          <span>41</span>
          <span>42</span>
          <span>43</span>
          <span>44</span>
          <span>45</span>
          <span>46</span>
          <span>47</span>
          <span>48</span>
          <span>49</span>
          <span>50</span>
          <span>51</span>
          <span>52</span>
          <span className={`opacity-60`}>53</span>
          <span className={`opacity-30`}>54</span>
          <span className={`opacity-10`}>55</span>
        </motion.div>
        <div
          className={`w-px h-96 ml-2 lg:ml-4 bg-gradient-to-b from-transparent via-white to-transparent`}
        ></div>
        <div
          className={`w-px h-44 m-auto ml-2 lg:ml-4 bg-gray-300 bg-opacity-20`}
        ></div>
        <motion.div
          className={`flex flex-col justify-center ml-3.5 text-gray-500 text-lg`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: '300px',
              opacity: 0,
            },
            visible: {
              y: '0px',
              opacity: 1,
              transition: {
                type: 'spring',
                delay: 0.2,
                duration: 3,
              },
            },
          }}
        >
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span className={`-ml-3.5`}> /** </span>
          <span style={{ fontWeight: 'bold' }}>* About me</span>
          <span>* Creative and self-starting Front-End Developer</span>
          <span>* with 2 years experience and maintaining</span>
          <span>* responsive websites.</span>
          <span>* Proficient in HTML, CSS, JavaScript</span>
          <span>* and React plus modern libraries and frameworks.</span>

          <span className={`-ml-3.5`}>*/</span>
        </motion.div>
      </div>
      {showMenu && (
        <motion.div
          className={`bg-[#010409] h-screen mt-28 p-4 lg:w-96 w-80 hidden absolute right-0 overflow-auto`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              x: '100px',
              opacity: 0,
            },
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                type: 'spring',
                delay: 2,
              },
            },
          }}
        >
          <div>
            <h3 className="font-bold ml-3.5 mb-2.5 lg:text-2xl text-xl">
              Explorer
            </h3>
            <div>
              <span style={{ marginLeft: '5px' }}>MY INTERESTS</span>
              <div className={`mt-1.5 flex flex-col lg:text-lg text-base`}>
                <div
                  onClick={() => setShowReact(!showReact)}
                  className={`flex gap-1 cursor-pointer w-fit`}
                >
                  <span>
                    {showReact ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: 'rgb(235,203,139)' }}>
                    <BsFolderFill />
                  </span>
                  <span> React</span>
                </div>
                <AnimatePresence>
                  {showReact && (
                    <motion.div
                      className={`ml-7 text-[#81A1C1]`}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: '-20px',
                          opacity: 0,
                        },
                        visible: {
                          y: '0',
                          opacity: 1,
                          transition: {
                            type: 'spring',
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: '-20px',
                          opacity: 0,
                          transition: {
                            type: 'spring',
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> reusable components.md
                      </p>
                      <p>
                        <BsMarkdownFill /> routing.md
                      </p>
                      <p>
                        <BsMarkdownFill /> fetching api.md
                      </p>
                      <p>
                        <BsMarkdownFill /> context api.md
                      </p>
                      <p>
                        <BsMarkdownFill /> redux.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={`mt-1.5 flex flex-col lg:text-lg text-base`}>
                <div
                  onClick={() => setShowNext(!showNext)}
                  className={`flex gap-1 cursor-pointer w-fit`}
                >
                  <span>
                    {showNext ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: 'rgb(136,192,208)' }}>
                    <BsFolderFill />
                  </span>
                  <span> Next</span>
                </div>
                <AnimatePresence>
                  {showNext && (
                    <motion.div
                      className={`ml-7 text-[#81A1C1]`}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: '-20px',
                          opacity: 0,
                        },
                        visible: {
                          y: '0',
                          opacity: 1,
                          transition: {
                            type: 'spring',
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: '-20px',
                          opacity: 0,
                          transition: {
                            type: 'spring',
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> reusable components.md
                      </p>
                      <p>
                        <BsMarkdownFill /> routing.md
                      </p>
                      <p>
                        <BsMarkdownFill /> fetching api.md
                      </p>
                      <p>
                        <BsMarkdownFill /> SSR.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={`mt-1.5 flex flex-col lg:text-lg text-base`}>
                <div
                  onClick={() => setShowLibrary(!showLibrary)}
                  className={`flex gap-1 cursor-pointer w-fit`}
                >
                  <span>
                    {showLibrary ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: 'rgb(191,97,106)' }}>
                    <BsFolderFill />
                  </span>
                  <span> Library</span>
                </div>
                <AnimatePresence>
                  {showLibrary && (
                    <motion.div
                      className={`ml-7 text-[#81A1C1]`}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: '-20px',
                          opacity: 0,
                        },
                        visible: {
                          y: '0',
                          opacity: 1,
                          transition: {
                            type: 'spring',
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: '-20px',
                          opacity: 0,
                          transition: {
                            type: 'spring',
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> material ui.md
                      </p>
                      <p>
                        <BsMarkdownFill /> bootstrap.md
                      </p>
                      <p>
                        <BsMarkdownFill /> tailwind css.md
                      </p>
                      <p>
                        <BsMarkdownFill /> framer motion.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={`mt-1.5 flex flex-col lg:text-lg text-base`}>
                <div
                  onClick={() => setShowHtml(!showHtml)}
                  className={`flex gap-1 cursor-pointer w-fit`}
                >
                  <span>
                    {showHtml ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: 'rgb(163,190,140)' }}>
                    <BsFolderFill />
                  </span>
                  <span> Html & CSS</span>
                </div>
                <AnimatePresence>
                  {showHtml && (
                    <motion.div
                      className={`ml-7 text-[#81A1C1]`}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: '-20px',
                          opacity: 0,
                        },
                        visible: {
                          y: '0',
                          opacity: 1,
                          transition: {
                            type: 'spring',
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: '-20px',
                          opacity: 0,
                          transition: {
                            type: 'spring',
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> responsive website.md
                      </p>
                      <p>
                        <BsMarkdownFill /> grid flexbox.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={`mt-1.5 flex flex-col lg:text-lg text-base`}>
                <div
                  onClick={() => setShowFree(!showFree)}
                  className={`flex gap-1 cursor-pointer w-fit`}
                >
                  <span>
                    {showFree ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: 'whitesmoke' }}>
                    <BsFolderFill />
                  </span>
                  <span> Free Time</span>
                </div>
                <AnimatePresence>
                  {showFree && (
                    <motion.div
                      className={`ml-7 text-[#81A1C1]`}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: '-20px',
                          opacity: 0,
                        },
                        visible: {
                          y: '0',
                          opacity: 1,
                          transition: {
                            type: 'spring',
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: '-20px',
                          opacity: 0,
                          transition: {
                            type: 'spring',
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> read quran.md
                      </p>
                      <p>
                        <BsMarkdownFill /> play video games.md
                      </p>
                      <p>
                        <BsMarkdownFill /> hang out with friends.md
                      </p>
                      <p>
                        <BsMarkdownFill /> learn new things.md
                      </p>
                      <p>
                        <BsMarkdownFill /> building side project.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
