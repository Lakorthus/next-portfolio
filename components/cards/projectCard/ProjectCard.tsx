import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { BsRecordBtnFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

export interface IProjectCard {
  title: string;
  text: string;
  live?: string;
  gitHub?: string;
  imgUrl: StaticImageData;
  span: string[];
}

const ProjectCard: React.FC<IProjectCard> = ({
  title,
  text,
  live,
  gitHub,
  imgUrl,
  span,
}) => {
  return (
    <div className="card items-center lg:card-side shadow-xl m-2 gap-2 cursor-pointer rounded-lg hover:shadow-xl  transform hover:-translate-y-1 transition-all duration-200">
      <div className="flexCenter rounded-3xl p-2 bg-primary max-w-lg">
        <Image
          className="object-contain w-full h-full overflow-visible"
          src={imgUrl}
          alt="Project"
          priority
        />
      </div>
      <div className="card-body gap-4 bg-opactity-80 bg-accent rounded-3xl max-w-lg">
        <h2 className={`krona-one text-info card-title text-lg`}>
          {title?.toUpperCase()}
        </h2>
        <div className="flexCenter">
          <p
            className={`krona-one font-light text-sm transition-all duration-200`}
          >
            Tech Stack:
          </p>
          <div>
            {span.map((span, key) => (
              <span
                key={key}
                className="krona-one font-light text-xs rounded-full px-2 align-top float-right animate-pulse "
              >
                #{span}
              </span>
            ))}
          </div>
        </div>

        <p
          className={`font-light text-md transition-all duration-200 text-justify`}
        >
          {text}
        </p>

        <div className="card-actions justify-end mt-4">
          <Link
            target="_blank"
            rel="noreferrer"
            href={gitHub ? gitHub : ''}
            className={`${
              gitHub ? 'btn btn-primary w-24 flex flex-col' : 'hidden'
            } `}
          >
            GitHub
            <FaGithub />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={live ? live : ''}
            className={`${
              live ? 'btn btn-primary w-24 flex flex-col' : 'hidden'
            } `}
          >
            Live
            <BsRecordBtnFill className="text-base-100 bg-red-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
