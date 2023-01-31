import React from 'react';
import Link from 'next/link';

import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import MailOutline from '@mui/icons-material/MailOutline';
import Twitter from '@mui/icons-material/Twitter';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer className='bg-[var(--primary-color)] py-4 mt-8'>
      <div className='flex items-center justify-center mx-auto py-4 lg:hidden'>
        <img src='logo.svg' alt='' className='h-20' />
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:px-10'>
        <div className='flex gap-4 justify-evenly items-start py-4 lg:w-full lg:justify-around'>
          <div className=' hidden lg:flex'>
            <img src='logo.svg' alt='' className='h-20' />
          </div>
          <div className='text-center text-gray-200'>
            <div className='font-semibold'>Kurumsal</div>
            <div>Hakkımızda</div>
            <div>İletişim</div>
            <div>S.S.S.</div>
          </div>
          <div className='text-center  text-gray-200'>
            <div className='font-semibold'>Hızlı Linkler</div>
            <div>DigitalAVM</div>
            <div>DigiYemek</div>
          </div>

          <div>
            <div className='flex md:gap-6 gap-4 justify-center items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                width={50}
                height={50}
                fill='currentColor'
                className='text-gray-200'
              >
                <path d='M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                width={50}
                height={50}
                fill='currentColor'
                className='text-gray-200'
              >
                <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <hr className='border-gray-500 mx-10' />
      <div className='container  text-center text-white flex flex-col mx-auto justify-center lg:flex-row w-full lg:items-center lg:space-x-4'>
        <p className='text-sm text-gray-400 pt-4'>
          Copyright &copy; {new Date().getFullYear()} Dijital AVM. All rights
          reserved.
        </p>
        <div className='flex space-x-8 pt-4 mx-auto lg:mx-0 '>
          <Link href={'https://facebook.com'} target='_blank'>
            <Facebook className='text-4xl' />
          </Link>
          <Link href={'https://twitter.com'} target='_blank'>
            <Twitter className='text-4xl' />
          </Link>
          <Link href={'https://instagram.com'} target='_blank'>
            <Instagram className='text-4xl' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
