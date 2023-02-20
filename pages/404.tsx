import Link from 'next/link';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import '../styles/globals.css';

export default function FourOhFour() {
  return (
    <>
      <div className="flex flex-col items-center">
        <PrimaryLayout>
          <div className="flexCenter">
            <h1>404 - Page Not Found</h1>

            <Link href="/">Go back home</Link>
          </div>
        </PrimaryLayout>
      </div>
    </>
  );
}
