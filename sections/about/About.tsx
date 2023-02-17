export interface IAbout {
  sampleTextProp: string;
}

const About: React.FC<IAbout> = ({ sampleTextProp }) => {
  return (
    <div className={`text-2xl text-green-900`}>
      {sampleTextProp}
      <div className="gradient-03 z-0" />
    </div>
  );
};

export default About;
