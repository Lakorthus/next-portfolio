import Link from 'next/link';
import { usePreview } from '../../lib/sanity.preview';
import Movies from '../movies/Movies';

export interface IMoviePreview {
  query: string;
  queryParams?: { [key: string]: any };
}

const MoviePreview: React.FC<IMoviePreview> = ({ query, queryParams }) => {
  const data = usePreview(null, query, queryParams);

  return (
    <>
      <Movies movies={data} />
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
};

export default MoviePreview;
