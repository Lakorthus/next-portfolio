export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className={`text-2xl text-green-900`}>{sampleTextProp}</div>;
};

export default BaseTemplate;
