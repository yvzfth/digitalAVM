import Navbar from '@/components/Home/Navbar';
import defaultTitle, { title } from '@/utils/title';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className='mt-20'>
        <div>{defaultTitle}</div>
        <div>{title}</div>
      </main>
    </div>
  );
};

export default Home;
