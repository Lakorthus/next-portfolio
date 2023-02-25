'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { BsFolderFill, BsMarkdownFill } from 'react-icons/bs';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

export interface IAboutFile {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  variants?: any;
  title: string;
  listItems: string[];
  yellow?: boolean;
  blue?: boolean;
  red?: boolean;
  green?: boolean;
}

const AboutFile: React.FC<IAboutFile> = ({
  state,
  setState,
  variants,
  title,
  listItems,
  yellow,
  blue,
  red,
  green,
}) => {
  return (
    <div className={`mt-1.5 flex flex-col lg:text-lg text-base`}>
      <div
        onClick={() => setState(!state)}
        className={`flex flex-col gap-1 cursor-pointer w-fit`}
      >
        <span className="flex gap-1 cursor-pointer w-fit ">
          {state ? <FiChevronDown /> : <FiChevronRight />}

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
        </span>
        {state && (
          <AnimatePresence>
            {listItems?.map((item, index) => (
              <motion.div
                className={`flex items-center gap-2 ml-7 list-none text-[#81A1C1]`}
                initial="hidden"
                animate="visible"
                exit="go"
                variants={variants}
                key={index}
              >
                <BsMarkdownFill /> {item}
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default AboutFile;
