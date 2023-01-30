import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
// import styles from '@/styles/Home.module.css'
import Navbar from 'components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dijital AVM</title>
        <meta name='description' content='Dijital AVM' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <main className='mt-20'>
        <div className='w-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit
          tempore exercitationem velit deserunt voluptatem eos perspiciatis a
          quam, quod unde eaque minima, inventore nemo! Quaerat iure nihil quis
          minus!
        </div>

        <div className='w-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit
          tempore exercitationem velit deserunt voluptatem eos perspiciatis a
          quam, quod unde eaque minima, inventore nemo! Quaerat iure nihil quis
          minus!
        </div>

        <div className='w-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit
          tempore exercitationem velit deserunt voluptatem eos perspiciatis a
          quam, quod unde eaque minima, inventore nemo! Quaerat iure nihil quis
          minus!
        </div>

        <div className='w-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit
          tempore exercitationem velit deserunt voluptatem eos perspiciatis a
          quam, quod unde eaque minima, inventore nemo! Quaerat iure nihil quis
          minus!
        </div>

        <div className='w-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit
          tempore exercitationem velit deserunt voluptatem eos perspiciatis a
          quam, quod unde eaque minima, inventore nemo! Quaerat iure nihil quis
          minus!
        </div>

        <div className='w-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit
          tempore exercitationem velit deserunt voluptatem eos perspiciatis a
          quam, quod unde eaque minima, inventore nemo! Quaerat iure nihil quis
          minus!
        </div>

        <div className='w-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit
          tempore exercitationem velit deserunt voluptatem eos perspiciatis a
          quam, quod unde eaque minima, inventore nemo! Quaerat iure nihil quis
          minus!
        </div>

        <div className='w-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit
          tempore exercitationem velit deserunt voluptatem eos perspiciatis a
          quam, quod unde eaque minima, inventore nemo! Quaerat iure nihil quis
          minus!
        </div>
      </main>
    </>
  );
}
