import MultiActionAreaCard from '@/components/Home/Cards/MuiCard';
import Navbar from '@/components/Home/Navbar';
import products from '@/utils/products';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios
    .get(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.ABSTRACTAPI_API_KEY}&fields=latitude,longitude,city,postal_code`
    )
    .then((res) => res.data)
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser
        // and an instance of http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    });

  // const address = await axios
  //   .get(
  //     `https://us1.locationiq.com/v1/search?key=${process.env.LOCATION_IQ_ACCESS_TOKEN}&city=${res.city}&postalCode=${res.postal_code}&format=json`
  //     // `https://us1.locationiq.com/v1/reverse.php?key=${process.env.LOCATION_IQ_ACCESS_TOKEN}&lat=${res.latitude}&lon=${res.longitude}&format=json`
  //   )
  //   .then((res) => res?.data);
  // const displayAddress = address.at(0).display_name;
  return {
    props: {
      city: res.city + ', ' + res.postal_code,
      // city: displayAddress.substring(
      //   0,
      //   displayAddress.indexOf(',', displayAddress.indexOf(',') + 1)
      // ),
    }, // will be passed to the page component as props
  };
};

const Search = ({ city }: { city: string }) => {
  const router = useRouter();
  const query = router.query;
  console.log(query.q);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(String(query.q).toLowerCase()!)
  );
  return (
    <div>
      <Navbar city={city} />
      <main className='mt-20'>
        {/* <ProductList /> */}
        <div className='container p-4 flex flex-wrap items-center justify-center md:justify-start gap-4 mx-auto'>
          {filteredProducts.map((product, index) => (
            <MultiActionAreaCard
              key={index}
              title={product.title}
              img={product.img}
              price={product.price}
              stock={product.stock}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Search;
