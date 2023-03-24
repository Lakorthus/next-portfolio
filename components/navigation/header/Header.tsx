'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import avatar from '../../../public/navbar.png';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  const activeSegment = useSelectedLayoutSegment();
  const links = [
    { label: 'Home', path: '/', targetSegment: null },
    { label: 'About', path: '/about', targetSegment: 'about' },
    { label: 'Projects', path: '/portfolio', targetSegment: 'portfolio' },
    { label: 'Contact', path: '/contact', targetSegment: 'contact' },
  ];
  return (
    <header
      {...headerProps}
      className={`navbar h-[3rem] justify-between xPaddings bg-tranparent w-full fixed top-0 left-0 right-0 z-50 gap-2 md:top-4`}
    >
      <div className="hidden sm:flex animate-pulse">
        <Image
          className="h-18 w-auto"
          src={avatar}
          alt="Avatar of Julio Velezmoro"
          priority
        />
      </div>

      <div
        className={`krona-one flex-1 flex justify-end items-center text-info gap-4 sm:gap-8 md:text-xl`}
      >
        {links.map((singleRoute, idx) => {
          return (
            <Link
              key={idx}
              href={singleRoute.path}
              passHref
              className={`flex cursor-pointer transition-colors duration-300 font-semibold ${
                activeSegment === singleRoute.targetSegment
                  ? `underline underline-offset-4 scale-125`
                  : ``
              }`}
            >
              {singleRoute.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
