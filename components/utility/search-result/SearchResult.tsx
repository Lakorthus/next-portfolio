import Link from 'next/link';
import { ISearchData } from '../../../lib/search/types';

export type ISearchResult = ISearchData & React.ComponentPropsWithoutRef<'div'>;

const SearchResult: React.FC<ISearchResult> = ({
  path,
  title,
  description,
  className,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className={`flex flex-col w-5/6 max-w-screen-md space-y-1 ${className} `}
    >
      <Link
        className="cursor:pointer hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        href={path || '/'}
      >
        <p>{path}</p>
        <p className="text-blue-600 text-xl ">{title}</p>
      </Link>
      <p>{description}</p>
    </div>
  );
};

export default SearchResult;
