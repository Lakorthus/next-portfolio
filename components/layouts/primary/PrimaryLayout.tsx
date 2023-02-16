import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <div
        {...divProps}
        className={`min-h-screen flex flex-col lg:flex-row ${justify}`}
      >
        <Header />
        <main className="relative w-full flex-1 flex justify-center items-center">
          {children}
        </main>
      </div>
    </>
  );
};

export default PrimaryLayout;
