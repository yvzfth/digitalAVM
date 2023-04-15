import React, { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoLogInOutline } from 'react-icons/io5';

import { SlLocationPin } from 'react-icons/sl';
import { Badge, Button, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import AccountButton from './AccountButton';
import SearchBar from './SearchBar';
import CategoriesDropdown from './CategoriesDropdown';
import { CartContext } from '@/context/CartContext';
const Navbar = ({ city }: { city?: string }) => {
  const session = useSession();
  const router = useRouter();
  const { data, setData } = useContext(CartContext);
  return (
    <div className='border-b p-2 fixed top-0 backdrop-blur-md w-full z-50 bg-white bg-opacity-90 shadow-md'>
      <div className='container flex items-center justify-between mx-auto gap-2 '>
        <div>
          <div className='md:hidden'>
            <Button
              size={'sm'}
              auto
              light
              rounded
              color={'primary'}
              css={{ px: 4 }}
              onClick={() => router.push('/')}
            >
              Digital AVM
            </Button>
          </div>
          <div className='hidden md:block'>
            <Button
              auto
              light
              rounded
              color={'primary'}
              onClick={() => router.push('/')}
            >
              Digital AVM
            </Button>
          </div>
        </div>

        <div className='flex justify-between px-0 sm:px-2 md:px-4  w-full'>
          <div className='flex gap-4'>
            <CategoriesDropdown />
            <div className='hidden xl:flex gap-4 items-center'>
              <Button light auto css={{ px: 10 }}>
                İndirimli
              </Button>
              <Button light auto css={{ px: 10 }}>
                Yeni Gelenler
              </Button>
              <Button light auto css={{ px: 10 }}>
                Ücretsiz Kargo
              </Button>
            </div>
          </div>
          <SearchBar />
        </div>

        <div className='flex items-center '>
          <div className='flex items-center justify-center md:gap-2'>
            {session.status !== 'authenticated' ? (
              <Button
                rounded
                light
                auto
                size={'md'}
                css={{ p: 4 }}
                onClick={() => router.push('/signin')}
              >
                <div className='flex gap-1 items-center'>
                  <IoLogInOutline className='text-4xl lg:text-3xl' />{' '}
                  <div className='hidden lg:block'>Giriş</div>
                </div>
              </Button>
            ) : (
              <AccountButton />
            )}
            <Badge
              color='error'
              content={data.length}
              isInvisible={data.length <= 0}
            >
              <Button
                rounded
                light
                auto
                size={'md'}
                style={{ margin: '-6px', padding: 0 }}
                // css={{ px: 4 }}
                onClick={() => router.push('/cart')}
              >
                <HiOutlineShoppingBag className='text-3xl' />
              </Button>
            </Badge>
          </div>
          {city && (
            <div className='hidden sm:block sm:pl-2'>
              <div
                aria-label='Konum'
                className='flex items-center cursor-default'
              >
                <SlLocationPin className='text-xl' />
                <div className='grid grid-flow-row'>
                  {city?.split(' ').map((text, index) => (
                    <Text
                      key={index}
                      className='pl-1 text-center select-none'
                      size={'$sm'}
                    >
                      {text}
                    </Text>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
