import Navbar from '@/components/Home/Navbar';
import Cards from '@/components/Home/Cards';
import Products from '@/components/Home/Products';
import Suggest from '@/components/Home/Cards/Suggest';
import React from 'react';
import { Grid } from '@nextui-org/react';
import Footer from '@/components/Home/Footer';
import axios from 'axios';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios
    .get(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.ABSTRACTAPI_API_KEY}&fields=latitude,longitude,city,postal_code`
    )
    .then((res) => res.data);

  const address = await axios
    .get(
      `https://us1.locationiq.com/v1/search?key=${process.env.LOCATION_IQ_ACCESS_TOKEN}&city=${res.city}&postalCode=${res.postal_code}&format=json`
      // `https://us1.locationiq.com/v1/reverse.php?key=${process.env.LOCATION_IQ_ACCESS_TOKEN}&lat=${res.latitude}&lon=${res.longitude}&format=json`
    )
    .then((res) => res?.data);
  const displayAddress = address.at(0).display_name;
  return {
    props: {
      city: displayAddress.substring(
        0,
        displayAddress.indexOf(',', displayAddress.indexOf(',') + 1)
      ),
    }, // will be passed to the page component as props
  };
};
const Home = (props: any) => {
  return (
    <div>
      <Navbar city={props?.city} />
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
      <Footer />
    </div>
  );
};

export default Home;
