import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoLogInOutline } from 'react-icons/io5';
import { CiShoppingTag } from 'react-icons/ci';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
const Navbar = () => {
  const router = useRouter();
  return (
    <div className='flex items-center justify-around gap-2 border-b p-2 fixed top-0 backdrop-blur-md w-full z-50'>
      <div onClick={() => router.push('/home')}>
        <div className='md:hidden'>
          <Button
            size={'sm'}
            auto
            light
            rounded
            color={'primary'}
            icon={<CiShoppingTag className='text-xl' />}
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
          >
            Digital AVM
          </Button>
        </div>
      </div>
      <div className='flex'>
        <select
          className='border rounded-full px-2 py-2 hidden md:block -mr-[2.2rem] z-10'
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
        <div className='relative border rounded-full'>
          <input
            className='rounded-full pl-4 md:pl-10 pr-10 py-2 h-full overflow-hidden focus:outline-none '
            placeholder="Digital Avm'de ara"
            type='text'
          />
          <FiSearch className='absolute inset-y-0 right-0 text-slate-400 pr-2 pointer-events-none w-[2.1rem] h-[2.1rem]' />
        </div>
      </div>
      <div className=''>
        <div className='md:hidden flex gap-2'>
          <Button
            rounded='true'
            ghost
            auto
            size={'sm'}
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
            onClick={() => router.push('/basket')}
          >
            <div className='flex gap-1 items-center'>
              <HiOutlineShoppingBag className='text-xl' />
            </div>
          </Button>
        </div>
        <div className='hidden md:flex md:gap-2'>
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
      </div>
    </div>
  );
};

export default Navbar;
