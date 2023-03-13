export interface IProjectCard {
  children: React.ReactNode;
  title: string;
  text: string;
  span?: Array<string>;
}

const ProjectCard: React.FC<IProjectCard> = ({
  children,
  title,
  text,
  span,
}) => {
  return (
    <div
      className={`card items-center justify-between m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200o bg-dark-primary`}
    >
      <div className="m-3 flex flex-col">
        <h2 className={`font-bold text-lg mb-2 text-dark-hot`}>
          {title?.toUpperCase()}

          {span?.map((span, key) => (
            <span
              key={key}
              className="text-sm text-dark-dark font-mono bg-light-light inline rounded-full px-2 align-top float-right animate-pulse"
            >
              #{span}
            </span>
          ))}
        </h2>
        <p
          className={`font-light font-mono text-sm transition-all duration-200 hover:text-dark-hot`}
        >
          {text}
        </p>
      </div>
      <div className="p-3 flex flex-col w-full">{children}</div>
    </div>
  );
};

export default ProjectCard;
