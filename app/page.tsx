'use client';

import Image from 'next/image';
import Link from 'next/link';
import Search from '../components/utility/search/Search';
import GoogleImage from '../public/Google.png';

const Home = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36b">
      <Image
        src={GoogleImage}
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      <Search />
      <p>
        Google offered in:{' '}
        <Link className="underline text-blue-600" href="/">
          Spanish
        </Link>
      </p>
    </section>
  );
};

export default Home;
