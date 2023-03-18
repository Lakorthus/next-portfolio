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
}

const AboutFile: React.FC<IAboutFile> = ({
  variants,
  title,
  listItems,
  yellow,
  blue,
  red,
  green,
}) => {
  const [show, setShow] = useState(false);

  const handleDoubleClick = (file: string) => {
    console.log(file);
  };

  useEffect(() => {
    if (title == 'React') setShow(true);
  }, [title]);

  return (
    <div className={`mt-1.5 flex flex-col lg:text-lg text-base`}>
      <div className={`flex flex-col gap-1 cursor-pointer w-fit`}>
        <div
          onClick={() => setShow(!show)}
          className="flex items-center gap-1 cursor-pointer w-fit "
        >
          {show ? <FiChevronDown /> : <FiChevronRight />}

          <BsFolderFill
            className="mx-1"
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

          <span> {title}</span>
        </div>
        {show && (
          <AnimatePresence>
            {listItems?.map((item, index) => {
              let format = item ? item.toLowerCase().replaceAll(' ', '_') : '';
              return (
                <motion.div
                  className={`flex items-center gap-2 ml-7 list-none text-[#81A1C1]`}
                  initial="hidden"
                  animate="visible"
                  exit="go"
                  variants={variants}
                  key={index}
                  onDoubleClick={
                    format ? () => handleDoubleClick(format) : undefined
                  }
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
