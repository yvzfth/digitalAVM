import React from 'react';
import Link from 'next/link';

import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';

import Twitter from '@mui/icons-material/Twitter';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    <footer className='border-t bg-slate-50 py-4 mt-8'>
      <div className='flex items-center justify-center mx-auto py-4 lg:hidden'>
        <img src='/logo.svg' alt='' className='h-20' />
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:px-10'>
        <div className='flex gap-4 justify-evenly items-start py-4 lg:w-full lg:justify-around'>
          <div className=' hidden lg:flex '>
            <img src='/logo.svg' alt='' className='h-20' />
          </div>
          <div className='text-center text-gray-600'>
            <div className='font-semibold pb-2'>Kurumsal</div>
            <div>Hakkımızda</div>
            <div>İletişim</div>
            <div>S.S.S.</div>
          </div>
          <div className='hidden sm:block'>
            <SocialMediaIcons />
          </div>

          <div>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <img
                className='w-[8rem] '
                src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'
                alt=''
              />
              <img
                className='w-[8rem]'
                src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='mx-auto sm:hidden'>
          <SocialMediaIcons />
        </div>
      </div>
      <hr className='border-gray-200 mx-10' />
      <div className='container  text-center text-white flex flex-col mx-auto justify-center lg:flex-row w-full lg:items-center lg:space-x-4'>
        <p className='text-sm text-gray-400 pt-4'>
          Copyright &copy; {new Date().getFullYear()} Dijital AVM. All rights
          reserved.
        </p>
        {/* <div className='flex space-x-8 pt-4 mx-auto lg:mx-0 '>
          <Link href={'https://facebook.com'} target='_blank'>
            <Facebook className='text-4xl' />
          </Link>
          <Link href={'https://twitter.com'} target='_blank'>
            <Twitter className='text-4xl' />
          </Link>
          <Link href={'https://instagram.com'} target='_blank'>
            <Instagram className='text-4xl' />
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
