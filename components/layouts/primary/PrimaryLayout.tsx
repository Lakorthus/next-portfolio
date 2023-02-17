import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <div {...divProps} className={`primaryLayout`}>
        <Header />

        <main className="w-full h-screen flex flex-col justify-center items-center bg-neutral overflow-hidden">
          {children}
        </main>
      </div>
    </>
  );
};

export default PrimaryLayout;
