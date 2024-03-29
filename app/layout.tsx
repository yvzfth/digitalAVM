'use client';
import './globals.css';
// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
const inter = Inter({ subsets: ['latin'] });
import { NextUIProvider, useSSR } from '@nextui-org/react';
import LikeContextProvider from '@/context/LikeContext';
import CartContextProvider from '@/context/CartContext';
import { Toaster } from 'react-hot-toast';
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isBrowser } = useSSR();
  return (
    <html lang='en'>
      <SessionProvider>
        <Toaster />
        <LikeContextProvider>
          <CartContextProvider>
            <body className={inter.className}>{children}</body>
          </CartContextProvider>
        </LikeContextProvider>
      </SessionProvider>
    </html>
  );
}
