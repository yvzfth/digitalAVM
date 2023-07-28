'use client';
import MultiActionAreaCard from '@/components/Cards/Card';
import Layout from '@/components/Layout';
import products from '@/utils/products';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const [city, setCity] = React.useState<string | undefined>();
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const getLocation = async () => {
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
      const city = res?.city + ', ' + res?.postal_code;
      setCity(city);
      setLoading(false);
    };
    getLocation();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (!city) return <div>No city</div>;

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(String(query).toLowerCase()!) ||
      product.categories?.includes(String(query))
  );
  return (
    <Layout city={city}>
      <div className='mx-4'>
        {/* <ProductList /> */}
        <div className='container p-4 flex flex-wrap items-center justify-center md:justify-start gap-4 mx-auto'>
          {filteredProducts.map((product, index) => (
            <MultiActionAreaCard
              key={index}
              id={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
              stock={product.stock}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
