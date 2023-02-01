import React from 'react';
import Brand from './Brand';

const brands = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png',
  'https://files.sikayetvar.com/lg/cmp/65/6541.svg?1522650125',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Logo_of_Mango_%28new%29.svg/2560px-Logo_of_Mango_%28new%29.svg.png',
  'https://aydinli-polo.b-cdn.net/static_omnishop/polo690/assets/images/branding/USPA-LOGO-NEW.svg',
];

let randomBrand: string = brands[Math.floor(Math.random() * brands.length)];

const BrandsContainer = () => {
  const getRandomBrand = () => {
    let notIncludingPreviousBrandArr = brands?.filter(
      (el) => el !== randomBrand
    );
    if (notIncludingPreviousBrandArr?.length === 0) return;
    let index = Math.floor(
      Math.random() * notIncludingPreviousBrandArr?.length
    );
    randomBrand = notIncludingPreviousBrandArr[index];
    return randomBrand;
  };
  return (
    <div className='py-8'>
      <div className='text-center text-4xl pb-8 text-[var(--primary-color)] font-semibold'>
        Popüler Markalar
      </div>
      <div className='space-y-4 [&>*]:hover:animate-paused'>
        <div className='flex gap-4 w-full animate-marquee '>
          {[...Array(10)].map((e, i) => {
            return <Brand key={i} brandSrc={getRandomBrand()!} />;
          })}
        </div>

        <div className='flex gap-4 w-full  animate-marquee2 '>
          {[...Array(10)].map((e, i) => {
            return <Brand key={i} brandSrc={getRandomBrand()!} />;
          })}
        </div>
        <div className='flex gap-4 w-full  animate-marquee '>
          {[...Array(10)].map((e, i) => {
            return <Brand key={i} brandSrc={getRandomBrand()!} />;
          })}
        </div>
        <div className='flex gap-4 w-full  animate-marquee2 '>
          {[...Array(10)].map((e, i) => {
            return <Brand key={i} brandSrc={getRandomBrand()!} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandsContainer;
