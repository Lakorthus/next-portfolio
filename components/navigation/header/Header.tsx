import Link from 'next/link';
import AuthButton from '../../buttons/auth/AuthButton';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between sticky z-10 top-0 overflow-hidden bg-slate-100 rounded-b ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link className="hover:underline text-sm" href="/">
          Home
        </Link>
        <Link className="hover:underline text-sm" href="/">
          Categories
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <Link className="hover:underline hidden sm:inline" href="/">
          Gmail
        </Link>
        <Link className="hover:underline hidden sm:inline" href="/">
          Images
        </Link>
        <AuthButton className="text-black hover:scale-105 bg-slate-400 hover:bg-blue-100" />
      </div>
    </header>
  );
};

export default Header;
