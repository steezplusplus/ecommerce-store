import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { ModalProvider } from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';
import { Nav } from './_components/nav';
import { Footer } from './_components/footer';
import './globals.css';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={font.className}>
        <Analytics />
        <ModalProvider />
        <ToastProvider />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
