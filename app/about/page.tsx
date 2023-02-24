'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenu } from 'react-icons/hi';
import { AboutFile } from '../../components';
import {
  explorerAbout,
  folderAbout,
  span2About,
  spanAbout,
} from '../../utils/motion';

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

      <div className={`flex ml-0.5  lg:h-128 h-96 relative`}>
        <motion.div
          className={`flex flex-col mt-24 lg:text-lg text-sm`}
          initial="hidden"
          animate="visible"
          variants={spanAbout}
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
          variants={span2About}
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
