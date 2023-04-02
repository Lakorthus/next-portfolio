import { PrimaryLayout } from '../components';
import AnalyticsInfo from '../context/analytics/AnalyticsInfo';
import '../styles/globals.css';

function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PrimaryLayout>{children}</PrimaryLayout>
        <AnalyticsInfo />
      </body>
    </html>
  );
}
export default RootLayout;
