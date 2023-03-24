import { Header } from '../../../components';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  className?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  className,
  ...divProps
}) => {
  return (
    <>
      <div {...divProps} className={`overflow-hidden ${className}`}>
        <Header />
        {children}
      </div>
    </>
  );
};

export default PrimaryLayout;
