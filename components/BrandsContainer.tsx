import React from 'react';
import Brand from './Brand';

const BrandsContainer = () => {
  return (
    <div className='space-y-4'>
      <div className='text-center text-4xl py-4'>Popüler Markalar</div>
      <div className='flex gap-6 w-full  animate-marquee '>
        <Brand brandSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png' />
        <Brand brandSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png' />
        <Brand brandSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png' />
        <Brand brandSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png' />
        <Brand brandSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png' />
        <Brand brandSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png' />
      </div>

      <div className='flex gap-6 w-full  animate-marquee2 '>
        <Brand brandSrc='https://files.sikayetvar.com/lg/cmp/65/6541.svg?1522650125' />
        <Brand brandSrc='https://files.sikayetvar.com/lg/cmp/65/6541.svg?1522650125' />
        <Brand brandSrc='https://files.sikayetvar.com/lg/cmp/65/6541.svg?1522650125' />
        <Brand brandSrc='https://files.sikayetvar.com/lg/cmp/65/6541.svg?1522650125' />
        <Brand brandSrc='https://files.sikayetvar.com/lg/cmp/65/6541.svg?1522650125' />
        <Brand brandSrc='https://files.sikayetvar.com/lg/cmp/65/6541.svg?1522650125' />
      </div>
      <div className='flex gap-6 w-full  animate-marquee '>
        <Brand brandSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Logo_of_Mango_%28new%29.svg/2560px-Logo_of_Mango_%28new%29.svg.png' />
        <Brand brandSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Logo_of_Mango_%28new%29.svg/2560px-Logo_of_Mango_%28new%29.svg.png' />
        <Brand brandSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Logo_of_Mango_%28new%29.svg/2560px-Logo_of_Mango_%28new%29.svg.png' />
        <Brand brandSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Logo_of_Mango_%28new%29.svg/2560px-Logo_of_Mango_%28new%29.svg.png' />
        <Brand brandSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Logo_of_Mango_%28new%29.svg/2560px-Logo_of_Mango_%28new%29.svg.png' />
        <Brand brandSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Logo_of_Mango_%28new%29.svg/2560px-Logo_of_Mango_%28new%29.svg.png' />
      </div>
      <div className='flex gap-6 w-full  animate-marquee2 '>
        <Brand brandSrc='https://aydinli-polo.b-cdn.net/static_omnishop/polo690/assets/images/branding/USPA-LOGO-NEW.svg' />
        <Brand brandSrc='https://aydinli-polo.b-cdn.net/static_omnishop/polo690/assets/images/branding/USPA-LOGO-NEW.svg' />
        <Brand brandSrc='https://aydinli-polo.b-cdn.net/static_omnishop/polo690/assets/images/branding/USPA-LOGO-NEW.svg' />
        <Brand brandSrc='https://aydinli-polo.b-cdn.net/static_omnishop/polo690/assets/images/branding/USPA-LOGO-NEW.svg' />
        <Brand brandSrc='https://aydinli-polo.b-cdn.net/static_omnishop/polo690/assets/images/branding/USPA-LOGO-NEW.svg' />
        <Brand brandSrc='https://aydinli-polo.b-cdn.net/static_omnishop/polo690/assets/images/branding/USPA-LOGO-NEW.svg' />
      </div>
    </div>
  );
};

export default BrandsContainer;
