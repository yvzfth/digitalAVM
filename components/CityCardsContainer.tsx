import React from 'react';
import CityCard from './CityCard';
import axios from 'axios';
import { Button, SelectChangeEvent } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { LocationOn, WhereToVote } from '@mui/icons-material';
import cities from '@/lib/cities';
import CitySelect from './CitySelect';

const CityCardsContainer = () => {
  const [lat, setLat] = React.useState<number | null>(null);
  const [lon, setLon] = React.useState<number | null>(null);
  const [status, setStatus] = React.useState<string | null>(null);
  const [city, setCity] = React.useState<string | null>('');

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setCity(event.target.value);
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log('no service');
      setStatus('Geolocation is not supported by your browser');
      setStatus('Locating...');
      axios
        .get(
          `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.ABSTRACTAPI_API_KEY}&fields=city`
        )
        .then((response: any) => {
          setCity(cities[String(response.data.city)]);
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (err) => {
          setStatus(err.message);
          setStatus('Locating...');
          axios
            .get(
              `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.ABSTRACTAPI_API_KEY}&fields=city`
            )
            .then((response: any) => {
              setCity(cities[String(response.data.city)]);
            })
            .catch((error: any) => {
              console.log(error);
            });
        }
      );
    }
  };
  React.useEffect(() => {
    const getCity = async () => {
      if (lat && lon)
        setCity(
          await axios
            .get(
              `https://us1.locationiq.com/v1/reverse.php?key=${process.env.LOCATION_IQ_ACCESS_TOKEN}&lat=${lat}&lon=${lon}&format=json`
            )
            .then((res) => res.data.address.city.toUpperCase())
        );
    };
    getCity();
  }, [lat, lon]);

  return (
    <div>
      <div className='flex gap-2 flex-wrap justify-center '>
        <CityCard
          cityName='İstanbul'
          citySrc='https://static.nationalgeographic.co.uk/files/styles/image_3200/public/ngt_we_bistanbul_gettyimages-668990458_hr.jpg?w=1600&h=900'
        />
        <CityCard
          cityName='Ankara'
          citySrc='https://d3rh8btizouuof.cloudfront.net/images/sehir/ankara.jpg'
        />
        <CityCard
          cityName='İzmir'
          citySrc='http://jackroaming.com/wp-content/uploads/2021/11/Best-Things-to-do-in-Izmir-Turkey-featured-Izmir-Clock-Tower.jpg'
        />
      </div>
      <div className='flex items-center justify-center gap-2 my-8'>
        {!city ? (
          <Button
            onClick={getLocation}
            color={'primary'}
            sx={{
              minHeight: 0,
              minWidth: 0,
              padding: '1rem',
              borderRadius: '100%',
            }}
            // to set button's extra padding resizable min-h and min-w
            className='inline-block'
          >
            {status !== 'Locating...' ? (
              <LocationOn />
            ) : (
              <CircularProgress size='1.2rem' />
            )}
          </Button>
        ) : (
          <Button
            disabled
            sx={{
              minHeight: 0,
              minWidth: 0,
              padding: '1rem',
              borderRadius: '100%',
            }}
            className='inline-block'
          >
            <WhereToVote />
          </Button>
        )}

        <CitySelect city={city!} handleSelectChange={handleSelectChange} />
      </div>
      {/* <hr className='border-gray-500 mx-10' /> */}
    </div>
  );
};

export default CityCardsContainer;
