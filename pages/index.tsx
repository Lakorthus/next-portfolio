import type { SanityDocument } from '@sanity/client';
import { groq } from 'next-sanity';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Movies from '../components/movies/Movies';
import { client } from '../lib/sanity.client';

const query = groq`*[_type == "movie" && defined(slug.current)]{
  _id,
  title, 
  slug,
  poster,
  releaseDate
}`;
export const getStaticProps = async () => {
  const data = await client.fetch(query);

  return { props: { data } };
};

const Home = ({ data }: { data: SanityDocument[] }) => {
  return (
    <section className="flex justify-center w-full">
      <Movies movies={data} />
    </section>
  );
};

export default Home;

Home.getLayout = (page: any) => {
  return <PrimaryLayout justify="items-center">{page}</PrimaryLayout>;
};
