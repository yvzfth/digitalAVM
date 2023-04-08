import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoLogInOutline } from 'react-icons/io5';

import { SlLocationPin } from 'react-icons/sl';
import { Avatar, Button, Popover } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { UserTwitterCard } from './UserCard';
const Navbar = ({ city }: { city?: string }) => {
  const session = useSession();
  const router = useRouter();
  const [query, setQuery] = React.useState<string>('');
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
        <form
          action='/search'
          onSubmit={(e) => {
            e.preventDefault();
            router.push('/search?q=' + query);
            setQuery('');
          }}
        >
          <div className='flex'>
            <select
              className='border rounded-full pl-2 py-2 hidden md:block -mr-[2.2rem] z-10 text-xs'
              name=''
              id=''
              defaultValue={''}
            >
              <option value='' disabled>
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
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <Button
                type='submit'
                light
                css={{
                  h: 'fit-content',
                  position: 'absolute',
                  minWidth: 'fit-content',
                  p: 0,
                  mr: 4,
                }}
                className='inset-y-0 right-0 text-center flex items-center '
                onClick={() => router.push('/search?q=' + query)}
              >
                <FiSearch className='w-[2.1rem] h-[2.1rem] text-slate-400 py-1' />
              </Button>
            </div>
          </div>
        </form>
        <div className='flex items-center'>
          <div className='flex items-center md:gap-2'>
            {session.status !== 'authenticated' ? (
              <Button
                rounded='true'
                ghost
                auto
                css={{ p: 4, '@lg': { p: '$md' } }}
                onClick={() => router.push('/signin')}
              >
                <div className='flex gap-1 items-center'>
                  <IoLogInOutline className='text-3xl lg:text-xl' />{' '}
                  <div className='hidden lg:block'>Giriş</div>
                </div>
              </Button>
            ) : (
              <Popover>
                <Popover.Trigger>
                  {session.data?.user?.image ? (
                    <Avatar src={session.data?.user?.image} />
                  ) : (
                    <Avatar text={session?.data?.user?.name?.charAt(0)} />
                  )}
                </Popover.Trigger>
                <Popover.Content>
                  <UserTwitterCard></UserTwitterCard>
                </Popover.Content>
              </Popover>
            )}

            <Button
              rounded
              bordered={false}
              // ghost
              light
              color={'primary'}
              auto
              size={'md'}
              style={{ margin: '2px', padding: 0 }}
              // css={{ px: 4 }}
              onClick={() => router.push('/cart')}
            >
              <HiOutlineShoppingBag className='text-4xl m-1' />
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
