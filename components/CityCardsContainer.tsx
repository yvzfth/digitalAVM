import React from 'react';
import CityCard from './CityCard';
import axios from 'axios';
import { Button, SelectChangeEvent } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { LocationOn, WhereToVote } from '@mui/icons-material';
import cities from '@/lib/cities';
import CitySelect from './CitySelect';

const cityImages: { [key: string]: string } = {
  İSTANBUL:
    'https://static.nationalgeographic.co.uk/files/styles/image_3200/public/ngt_we_bistanbul_gettyimages-668990458_hr.jpg?w=1600&h=900',
  ANKARA: 'https://d3rh8btizouuof.cloudfront.net/images/sehir/ankara.jpg',
  İZMİR:
    'http://jackroaming.com/wp-content/uploads/2021/11/Best-Things-to-do-in-Izmir-Turkey-featured-Izmir-Clock-Tower.jpg',
};

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
  }, [lat, lon, city]);

  return (
    <div
      style={{ backgroundImage: `url(${cityImages[city!]})` }}
      className={
        city
          ? `w-full h-[20rem] sm:h-[30rem] md:h-[40rem] lg:h-[50rem] bg-cover bg-center`
          : 'py-8'
      }
    >
      <div
        className={city ? 'hidden' : 'flex gap-4  flex-wrap justify-center '}
      >
        <div onClick={() => setCity('İSTANBUL')}>
          <CityCard cityName='İstanbul' citySrc={cityImages.İSTANBUL} />
        </div>
        <div onClick={() => setCity('ANKARA')}>
          <CityCard cityName='Ankara' citySrc={cityImages.ANKARA} />
        </div>
        <div onClick={() => setCity('İZMİR')}>
          <CityCard cityName='İzmir' citySrc={cityImages.İZMİR} />
        </div>
      </div>
      <div
        className={
          city
            ? 'flex items-center justify-center gap-2 pt-8 h-full'
            : 'flex items-center justify-center gap-2 pt-8 '
        }
      >
        <div className='bg-transparent backdrop-blur-md p-4 rounded-xl'>
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
      </div>
      {/* <hr className='border-gray-500 mx-10' /> */}
    </div>
  );
};

export default CityCardsContainer;
