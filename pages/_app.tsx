import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Toaster } from 'react-hot-toast';
// import { CityContext } from '../context/CityContext';
import { SessionProvider } from 'next-auth/react';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      {/* <CityContext.Provider value={props?.city}> */}
      <Toaster />
      <Component {...pageProps} />
      {/* </CityContext.Provider> */}
    </SessionProvider>
  );
}
