'use client';
import ShoppingCart from '@/components/Cards/ShoppingCart';
import Layout from '@/components/Layout';
import { CartContext } from '@/context/CartContext';
import { LikeContext } from '@/context/LikeContext';
import products from '@/utils/products';
import { Button } from '@nextui-org/react';
import _ from 'lodash';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const Likes = () => {
  const router = useRouter();
  const { data, setData } = React.useContext(CartContext);
  const { likes, setLikes } = React.useContext(LikeContext);

  const handleClick = (id: string) => {
    if (!data.some((item) => item === id)) setData([...data, id!]);
  };
  const handleLike = (id: string) => {
    if (!likes.some((item) => item === id)) setLikes([...likes, id]);
    else setLikes(likes.filter((like) => like !== id));
  };
  return (
    <Layout>
      <div className='container mx-auto px-4'>
        {likes && (
          <div className={`bg-white shadow-md p-4 rounded-lg w-fit`}>
            <h2 className='text-lg font-bold mb-4'>Likes</h2>

            {likes?.map((id) => {
              const product = products.find((product) => product.id === id);

              return (
                <div
                  key={product?.id}
                  className='mb-2'
                  onClick={() =>
                    router.push('/products/' + _.kebabCase(product?.title))
                  }
                >
                  <div className='flex items-center justify-between gap-4'>
                    <Button
                      auto
                      shadow
                      color={'error'}
                      className='z-20 hover:scale-110 transition-all duration-300 ease-in-out'
                      css={{ p: 5, h: 'fit-content' }}
                      onPress={() => handleLike(id)}
                    >
                      {!likes.includes(product?.id!) ? (
                        <BsHeart className='text-xl' />
                      ) : (
                        <BsHeartFill className='text-xl' />
                      )}
                    </Button>
                    <div className='w-20 h-20'>
                      <img
                        className='w-20 h-20 rounded-xl'
                        src={product?.img}
                        alt=''
                      />
                    </div>
                    <div>{product?.title}</div>
                    <div>{product?.price.toFixed(2) + '₺'}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Likes;
