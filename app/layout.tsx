import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import { Footer } from './components/footer';
import { Nav } from './components/nav';
import { ModalProvider } from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';

const font = Urbanist({ subsets: ['latin'] });

// TODO Metadata for each page
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
        <ModalProvider />
        <ToastProvider />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
