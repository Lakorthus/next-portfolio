import { SanityDocument } from '@sanity/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Movie from '../components/movie/Movie';
import { client } from '../lib/sanity.client';

const query = groq`*[_type == "movie" && slug.current == $slug][0]{
  title,
  poster,
  overview
}`;

// Prepare Next.js to know which routes already exist
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "movie" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.slug ?? `` };

  const movie = await client.fetch(query, queryParams);

  return {
    props: {
      data: { movie },
    },
  };
};
function Page({ data }: { data: { movie: SanityDocument } }) {
  return <Movie movie={data.movie} />;
}

Page.getLayout = (page: any) => {
  return <PrimaryLayout justify="items-center">{page}</PrimaryLayout>;
};
export default Page;
