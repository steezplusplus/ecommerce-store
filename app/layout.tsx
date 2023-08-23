import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import { Footer } from './components/footer';
import { Nav } from './components/nav';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
};

// TODO <main />
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
