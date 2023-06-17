import Cards from '@/components/Home/Cards';
import Products from '@/components/Home/Products';
import Suggest from '@/components/Home/Cards/SuggestionCard';
import React from 'react';
import { Grid } from '@nextui-org/react';

import axios from 'axios';
import Layout from '@/components/Layout';
import Banner from '@/components/Home/Banner';
import CategoryContainer from '@/components/Home/Cards/CategoryContainer';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await axios
//     .get(
//       `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.ABSTRACTAPI_API_KEY}&fields=latitude,longitude,city,postal_code`
//     )
//     .then((res) => res.data)
//     .catch(function (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.log(error.response.data);
//         console.log(error.response.status);
//         console.log(error.response.headers);
//       } else if (error.request) {
//         // The request was made but no response was received
//         // `error.request` is an instance of XMLHttpRequest in the browser
//         // and an instance of http.ClientRequest in node.js
//         console.log(error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.log('Error', error.message);
//       }
//     });
//   const city = res?.city + ', ' + res?.postal_code;
//   // const address = await axios
//   //   .get(
//   //     `https://us1.locationiq.com/v1/search?key=${process.env.LOCATION_IQ_ACCESS_TOKEN}&city=${res.city}&postalCode=${res.postal_code}&format=json`
//   //     // `https://us1.locationiq.com/v1/reverse.php?key=${process.env.LOCATION_IQ_ACCESS_TOKEN}&lat=${res.latitude}&lon=${res.longitude}&format=json`
//   //   )
//   //   .then((res) => res?.data);
//   // const displayAddress = address.at(0).display_name;
//   return {
//     props: {
//       city: res?.city + ', ' + res?.postal_code,
//       // city: displayAddress.substring(
//       //   0,
//       //   displayAddress.indexOf(',', displayAddress.indexOf(',') + 1)
//       // ),
//     }, // will be passed to the page component as props
//   };
// };
const Home = (props: any) => {
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

  if (isLoading) return <p>Loading...</p>;
  if (!city) return <p>No city</p>;

  return (
    <Layout city={city}>
      <div className='container mx-auto'>
        <Banner />
        <Cards />
        <CategoryContainer />
        <Products title='International top sellers' />
        <Grid.Container gap={2} justify='center'>
          <Grid xs={12} sm={6}>
            <Suggest />
          </Grid>
          <Grid xs={12} sm={6}>
            <Suggest />
          </Grid>
        </Grid.Container>
        <Products title='New international customers purchased' />
      </div>
    </Layout>
  );
};

export default Home;
