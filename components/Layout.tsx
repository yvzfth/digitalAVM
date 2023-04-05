import Footer from './Home/Footer';
import React, { ReactElement } from 'react';
import HeadComponent from './HeadComponent';
export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <HeadComponent />
      <main className='min-h-[300px]'>{children}</main>
      <Footer />
    </>
  );
}
