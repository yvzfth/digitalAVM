import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Rating } from '@mui/material';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { Button, Text } from '@nextui-org/react';
import products from '@/utils/products';
export default function MultiActionAreaCard({
  title,
  img,
  price,
  stock,
}: IProduct) {
  const [liked, setLiked] = React.useState<boolean>(false);
  return (
    <div className='relative'>
      <Button
        auto
        // light
        color={'error'}
        className='absolute top-10 left-4 z-20 hover:scale-150 transition-all duration-300 ease-in-out'
        css={{ p: 5, h: 'fit-content' }}
        onClick={() => setLiked((pre) => !pre)}
      >
        {!liked ? <BsHeart /> : <BsHeartFill />}
      </Button>
      <Card
        sx={{
          minWidth: { xs: 400, sm: 225 },
          maxWidth: { xs: 400, sm: 225 },
          minHeight: { xs: 200, sm: 400 },
          height: { xs: 200, sm: 400 },
          borderRadius: '.875rem',
          boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.2)',
        }}
      >
        <CardActionArea
          sx={{
            height: '100%',
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              sm: 'repeat(1, minmax(0, 1fr))',
            },
            gridTemplateRows: {
              xs: 'repeat(1, minmax(0, 1fr))',
              sm: 'repeat(2, minmax(0, 1fr))',
            },
            alignItems: 'start',
            justifyContent: 'start',
            borderRadius: '.875rem',
          }}
        >
          <CardMedia
            component='img'
            image={img}
            alt='green iguana'
            sx={{
              minHeight: 200,
              height: 200,
            }}
          />
          <CardContent sx={{ height: '100%' }}>
            <div className=''>
              <Text className='overflow-clip break-words max-h-[50px]'>
                {title}
              </Text>
              <div className='flex items-center gap-1'>
                <Rating
                  name='half-rating-read'
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  size='small'
                />
                <Text className='text-xs'>(2345)</Text>
              </div>
              <Text className='text-xs text-gray-600'>
                600+ bought in past month
              </Text>
              <Text className='text-xl my-1' color='primary'>
                {price}₺
              </Text>
              {stock < 20 && (
                <Text
                  color='error'
                  className='text-xs text-clip overflow-clip max-h-[1rem] h-[1rem]'
                >
                  Only {stock} left in stock - order soon.
                </Text>
              )}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className='absolute bottom-4 right-4 z-20 transition-all duration-300 ease-in-out'>
        <Button
          auto
          rounded
          size={'xs'}
          color={'gradient'}
          css={{ p: 5, h: 'fit-content' }}
          // onClick={() => setLiked((pre) => !pre)}
        >
          Sepete Ekle
        </Button>
      </div>
    </div>
  );
}
