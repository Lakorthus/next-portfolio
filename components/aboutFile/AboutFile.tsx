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
      <ul
        onClick={() => setState(!state)}
        className={`flex gap-1 cursor-pointer w-fit`}
      >
        <span>{state ? <FiChevronDown /> : <FiChevronRight />}</span>
        <span
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
        >
          <BsFolderFill />
        </span>
        <span> {title}</span>
      </ul>
      {state && (
        <AnimatePresence>
          {listItems?.map((item, index) => (
            <motion.li
              className={`ml-7 list-none text-[#81A1C1]`}
              initial="hidden"
              animate="visible"
              exit="go"
              variants={variants}
              key={index}
            >
              <BsMarkdownFill /> {item}
            </motion.li>
          ))}
        </AnimatePresence>
      )}
    </div>
  );
};

export default AboutFile;
