export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 bg-slate-100 text-slate-500 sticky bottom-0 z-50 ${className}`}
    >
      <p>United Kingdom</p>
    </footer>
  );
};

export default Footer;
