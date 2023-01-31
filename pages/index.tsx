import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
// import styles from '@/styles/Home.module.css'
import Navbar from 'components/Navbar';
import CityCard from '@/components/CityCard';
import CityCardsContainer from '@/components/CityCardsContainer';
import BrandsContainer from '@/components/BrandsContainer';
import Footer from '@/components/Footer';

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
      <main className='mt-20 mb-10 divide-y'>
        <CityCardsContainer />
        <BrandsContainer />
      </main>
      <Footer />
    </>
  );
}
