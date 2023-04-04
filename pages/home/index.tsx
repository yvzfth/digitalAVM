import Navbar from '@/components/Home/Navbar';
import Cards from '@/components/Home/Cards';
import Products from '@/components/Home/Products';
import Suggest from '@/components/Home/Cards/Suggest';
import React from 'react';
import { Grid } from '@nextui-org/react';
const Home = () => {
  return (
    <div>
      <Navbar />
      <main className='mt-20'>
        <Cards />
        <Products />
        <Grid.Container gap={2} justify='center'>
          <Grid xs={12} sm={6}>
            <Suggest />
          </Grid>
          <Grid xs={12} sm={6}>
            <Suggest />
          </Grid>
        </Grid.Container>
        <Products />
      </main>
    </div>
  );
};

export default Home;
