export interface IHero {
  sampleTextProp: string;
}

const Hero: React.FC<IHero> = ({ sampleTextProp }) => {
  return <div className={`text-2xl text-green-900`}>{sampleTextProp}</div>;
};

export default Hero;
