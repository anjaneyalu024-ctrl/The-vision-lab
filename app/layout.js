'use client';

import { Inter } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const cormorant = Cormorant_Garamond({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <main className={`${inter.className} ${cormorant.className}`}>{children}</main>
  );
}