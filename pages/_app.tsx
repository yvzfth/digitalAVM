import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Toaster } from 'react-hot-toast';
import { CityContext } from '../context/CityContext';

export default function App({
  Component,
  pageProps: { props, ...pageProps },
}: AppProps) {
  return (
    <CityContext.Provider value={props?.city}>
      <Toaster />
      <Component {...pageProps} />
    </CityContext.Provider>
  );
}
