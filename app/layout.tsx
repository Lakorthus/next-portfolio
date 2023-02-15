'use client';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { AuthProvider } from '../context/auth/AuthContext';
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
        <AuthProvider>
          <PrimaryLayout justify="items-center">{children}</PrimaryLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
export default RootLayout;
