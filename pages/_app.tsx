import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import CartContextProvider from '../context/CartContext';
import LikeContextProvider from '@/context/LikeContext';
import { useSSR } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/react';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { isBrowser } = useSSR();
  return (
    <SessionProvider session={session}>
      <Toaster />
      <LikeContextProvider>
        <CartContextProvider>
          {isBrowser ? (
            <NextUIProvider>
              <Component {...pageProps} />
            </NextUIProvider>
          ) : (
            <div></div>
          )}
        </CartContextProvider>
      </LikeContextProvider>
    </SessionProvider>
  );
}
