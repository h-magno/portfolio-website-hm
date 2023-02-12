'use client';
import './globals.css';

import { Anek_Telugu } from '@next/font/google';

const anekTelugu = Anek_Telugu({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={anekTelugu.className} lang="en">
      <head />

      <body>{children}</body>
    </html>
  );
}
