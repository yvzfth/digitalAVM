import Layout from '@/components/Layout';
import products from '@/utils/products';
import { Rating } from '@mui/material';
import { Button, Text } from '@nextui-org/react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { TbTruckReturn } from 'react-icons/tb';
const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find(
    (product) => _.kebabCase(product.title) === slug
  );
  const [quantity, setQuantity] = React.useState<number>(0);

  // ------------ CHANGE BELOW --------------

  return (
    <Layout>
      <div className='container grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-8 mx-auto p-4'>
        <div className=' flex flex-col'>
          <img src={product?.img} alt='product' className='rounded-md' />
          <div className='flex justify-between py-4 [&_img]:h-[8rem] [&_img]:w-[8rem] [&_img]:rounded-md'>
            <img src={product?.img} alt='product' className='' />
            <img src={product?.img} alt='product' />
            <img src={product?.img} alt='product' />
          </div>
        </div>
        <div className='divide-y flex flex-col'>
          <div className='mb-4'>
            <Text h1 className='text-3xl font-bold mb-4'>
              {product?.title}
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              deserunt autem quia
            </Text>
            <div className='flex items-center gap-1 pt-2'>
              <Rating
                name='half-rating-read'
                defaultValue={2.5}
                precision={0.5}
                readOnly
                size='small'
              />
              <Text className='text-xs'>(2345)</Text>
            </div>
          </div>

          <div className='py-4'>
            <Text className='text-2xl font-bold'>{product?.price}₺</Text>
          </div>

          <div className='py-4'>
            <Text className='text-lg pb-2'>Renk Seçiniz</Text>
            <div className='flex items-center gap-4'>
              <div className='rounded-full border overflow-hidden'>
                <div className='w-8 h-4 bg-orange-200'></div>
                <div className='w-8 h-4 bg-orange-400'></div>
              </div>
              <div className='rounded-full border overflow-hidden'>
                <div className='w-8 h-4 bg-blue-200'></div>
                <div className='w-8 h-4 bg-blue-400'></div>
              </div>
              <div className='rounded-full border overflow-hidden'>
                <div className='w-8 h-4 bg-rose-200'></div>
                <div className='w-8 h-4 bg-rose-400'></div>
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <div className='flex '>
                <button
                  className='rounded-l-full border-l border-t border-b px-4 py-2 bg-slate-100 hover:bg-slate-50'
                  onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                >
                  -
                </button>
                <Text id='quantity' className='px-4 py-2 border bg-slate-100'>
                  {quantity}
                </Text>
                <button
                  className='rounded-r-full border-r border-b border-t px-4 py-2 bg-slate-100 hover:bg-slate-50'
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <Text>
                Only <span className='text-red-500'>12 Items</span> left do not
                miss it!
              </Text>
            </div>

            <Button size='lg' css={{ w: '50%' }}>
              Add to Cart
            </Button>
          </div>
          <div className='py-4'>
            <div className='border mb-2 p-2 rounded-md flex gap-2 items-start'>
              <CiDeliveryTruck className='text-3xl text-orange-400' />
              <div>
                <Text className='text-lg font-bold mb-2'>Free Delivery</Text>
                <Text>Enter your postal code for delivery availability</Text>
              </div>
            </div>
            <div className='border mb-2 p-2 rounded-md flex gap-2'>
              <TbTruckReturn className='text-3xl text-orange-400' />
              <div>
                <Text className='text-lg font-bold mb-2'>Return Delivery</Text>
                <Text>Free 30 days delivery returns.</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
