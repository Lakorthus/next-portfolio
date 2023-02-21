import { Header } from '../../index';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <div {...divProps} className={`overflow-hidden`}>
        <Header />

        {children}
      </div>
    </>
  );
};

export default PrimaryLayout;
