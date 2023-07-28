import Footer from './Footer';
import React, { ReactElement } from 'react';
import HeadComponent from './HeadComponent';
import Navbar from './Navbar';
export default function Layout({
  children,
  city,
  title,
  description,
}: {
  children: ReactElement;
  city?: string;
  title?: string;
  description?: string;
}) {
  return (
    <>
      <HeadComponent title={title} description={description} />
      <Navbar city={city} />
      <main className='min-h-screen mt-20'>{children}</main>
      <Footer />
    </>
  );
}
