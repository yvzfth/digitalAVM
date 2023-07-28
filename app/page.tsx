'use client';
import Cards from '@/components/Cards';
import CategoryContainer from '@/components/Cards/CategoryContainer';
import Hero from '@/components/Home/Hero';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import { Grid } from '@nextui-org/react';
import SuggestionCard from '@/components/Cards/SuggestionCard';
import Footer from '@/components/Footer';
import Layout from './layout';
// import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto'>
        <Hero />
        <Cards />
        <CategoryContainer />
        <Products title='International top sellers' />
        <Grid.Container gap={2} justify='center'>
          <Grid xs={12} sm={6}>
            <SuggestionCard />
          </Grid>
          <Grid xs={12} sm={6}>
            <SuggestionCard />
          </Grid>
        </Grid.Container>
        <Products title='New international customers purchased' />
      </div>
      <Footer />
    </div>
  );
}
