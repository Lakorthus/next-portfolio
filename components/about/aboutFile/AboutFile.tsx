'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BsFolderFill, BsMarkdownFill } from 'react-icons/bs';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

export interface IAboutFile {
  variants?: any;
  title: string;
  listItems: string[];
  yellow?: boolean;
  blue?: boolean;
  red?: boolean;
  green?: boolean;
  // eslint-disable-next-line no-unused-vars
  handleDoubleClick: (format: string) => void;
}

const AboutFile: React.FC<IAboutFile> = ({
  variants,
  title,
  listItems,
  yellow,
  blue,
  red,
  green,
  handleDoubleClick,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (title == 'React') setShow(true);
  }, [title]);

  return (
    <div className={`mt-1.5 flex flex-col lg:text-lg text-base`}>
      <div className={`flex flex-col gap-1`}>
        <div
          onClick={() => setShow(!show)}
          className={`flex items-center gap-1 cursor-pointer ${
            show ? 'bg-[#2E3440]' : ''
          }`}
        >
          {show ? <FiChevronDown /> : <FiChevronRight />}

          <BsFolderFill
            className="mx-1 "
            style={{
              color: `${
                yellow
                  ? 'rgb(235,203,139)'
                  : blue
                  ? 'rgb(136,192,208)'
                  : red
                  ? 'rgb(191,97,106)'
                  : green
                  ? 'rgb(163,190,140)'
                  : 'whitesmoke'
              }`,
            }}
          />

          <span className="text-info opacity-80"> {title}</span>
        </div>
        {show && (
          <AnimatePresence>
            {listItems?.map((item, index) => {
              let format = item ? item.toLowerCase().replaceAll(' ', '_') : '';
              return (
                <motion.div
                  className={`flex items-center w-full gap-2 pl-7 list-none text-[#81A1C1] cursor-pointer hover:bg-[#232730]`}
                  initial="hidden"
                  animate="visible"
                  exit="go"
                  variants={variants}
                  key={index}
                  onDoubleClick={() => handleDoubleClick(format)}
                >
                  <BsMarkdownFill /> {format ? format : '(empty)'}
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default AboutFile;
