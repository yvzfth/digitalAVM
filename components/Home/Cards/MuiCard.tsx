import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Rating } from '@mui/material';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { Button, Text } from '@nextui-org/react';
export default function MultiActionAreaCard({ stock }: { stock?: number }) {
  const [liked, setLiked] = React.useState<boolean>(false);
  return (
    <div className='relative'>
      <Button
        auto
        // light
        color={'error'}
        className='absolute top-8 left-[193px] z-20 hover:scale-125 transition-all duration-300 ease-in-out '
        css={{ p: 5, h: 'fit-content' }}
        onClick={() => setLiked((pre) => !pre)}
      >
        {!liked ? <BsHeart /> : <BsHeartFill />}
      </Button>
      <Card
        sx={{
          maxWidth: 225,
          minHeight: 400,
          height: 400,
          borderRadius: '.875rem',
          boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.2)',
        }}
      >
        <CardActionArea
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start',
          }}
        >
          <CardMedia
            component='img'
            height='200'
            image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
            alt='green iguana'
            sx={{ height: '200px', minHeight: '200px' }}
          />
          <CardContent>
            <Text>Lizard</Text>
            <Text>
              <div className='overflow-clip break-words h-[50px]'>
                Lizards are a widespread group of squamate reptiles
              </div>
              <div className='flex items-center gap-1'>
                <Rating
                  name='half-rating-read'
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  size='small'
                />
                <span className='text-xs'>(2345)</span>
              </div>
              <div className='text-xs text-gray-600'>
                600+ bought in past month
              </div>
              <Text className='text-xl my-1' color='primary'>
                1500₺
              </Text>
              {stock && (
                <Text color='error' className='text-xs'>
                  Only {stock} left in stock - order soon.
                </Text>
              )}
            </Text>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
