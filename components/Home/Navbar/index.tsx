import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoLogInOutline } from 'react-icons/io5';
import { CiShoppingTag } from 'react-icons/ci';
import { SlLocationPin } from 'react-icons/sl';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';

const Navbar = ({ city }: { city?: string }) => {
  const router = useRouter();

  return (
    <div className='border-b p-2 fixed top-0 backdrop-blur-md w-full z-50 bg-white bg-opacity-90 shadow-md'>
      <div className='container flex items-center justify-between mx-auto gap-2 '>
        <div onClick={() => router.push('/home')}>
          <div className='md:hidden'>
            <Button
              size={'sm'}
              auto
              light
              rounded
              color={'primary'}
              css={{ px: 4 }}
              icon={<CiShoppingTag className='text-xl' />}
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
              icon={<CiShoppingTag className='text-xl' />}
              onClick={() => router.push('/')}
            >
              Digital AVM
            </Button>
          </div>
        </div>
        <div className='flex'>
          <select
            className='border rounded-full pl-2 py-2 hidden md:block -mr-[2.2rem] z-10 text-xs'
            name=''
            id=''
          >
            <option value='' disabled selected>
              Kategoriler
            </option>
            <option value='Yeni Gelenler'>Yeni Gelenler</option>
            <option value='İndirimli'>İndirimli</option>
            <option value='Kargo Bedava'>Kargo Bedava</option>
            <option value='Çok Satanlar'>Çok Satanlar</option>
          </select>
          <div className='relative border rounded-full w-auto'>
            <input
              className='rounded-full pl-4 md:pl-10 pr-10 py-2 h-full overflow-hidden focus:outline-none w-[10rem] sm:w-[12rem] md:w-[13rem] sm:focus:w-[15rem] md:focus:w-[18rem] lg:focus:w-[20rem] transition-all duration-300 ease-in-out text-sm'
              placeholder="Digital Avm'de ara"
              type='text'
            />
            <FiSearch className='absolute inset-y-0 right-0 text-slate-400 mr-2 py-1 text-center flex items-center pointer-events-none w-[2.1rem] h-[2.1rem]' />
          </div>
        </div>
        <div className='flex items-center'>
          <div className='lg:hidden flex gap-2'>
            <Button
              rounded='true'
              ghost
              auto
              size={'sm'}
              css={{ px: 4 }}
              onClick={() => router.push('/signin')}
            >
              <div className='flex gap-1 items-center'>
                <IoLogInOutline className='text-xl' />
              </div>
            </Button>
            <Button
              rounded='true'
              ghost
              auto
              size={'sm'}
              css={{ px: 4 }}
              onClick={() => router.push('/basket')}
            >
              <div className='flex gap-1 items-center'>
                <HiOutlineShoppingBag className='text-xl' />
              </div>
            </Button>
          </div>
          <div className='hidden lg:flex md:gap-2'>
            <Button
              rounded='true'
              ghost
              auto
              onClick={() => router.push('/signin')}
            >
              <div className='flex gap-1 items-center'>
                <IoLogInOutline className='text-xl' /> <div>Giriş</div>
              </div>
            </Button>
            <Button
              rounded='true'
              ghost
              auto
              onClick={() => router.push('/basket')}
            >
              <div className='flex gap-1 items-center'>
                <HiOutlineShoppingBag className='text-xl' />
                <div>Sepet</div>
              </div>
            </Button>
          </div>
          {city && (
            <div className='hidden sm:block sm:pl-2'>
              <Button
                color={'default'}
                light
                auto
                rounded
                aria-label='Konum'
                css={{ lineHeight: '$sm', px: 10 }}
              >
                <SlLocationPin className='text-xl' />
                <div className='grid grid-flow-row'>
                  {city?.split(' ').map((text, index) => (
                    <div key={index} className='pl-1 '>
                      {text}
                    </div>
                  ))}
                </div>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
