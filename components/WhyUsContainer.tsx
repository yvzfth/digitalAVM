import React from 'react';
import WhyUsCard from './WhyUsCard';

const WhyUsContainer = () => {
  return (
    <div className='mt-8'>
      <div className='text-4xl text-[var(--primary-color)] font-semibold text-center py-8'>
        Neden Biz?
      </div>
      <div className='flex gap-4 flex-col md:flex-row flex-wrap justify-center items-center'>
        <WhyUsCard src='location.svg' title='İlinizi seçin' />
        <WhyUsCard src='safeshopping.svg' title='Güvenli Alışveriş' />
        <WhyUsCard src='shoppingbag.svg' title='Hızlı Teslimat' />
      </div>
    </div>
  );
};

export default WhyUsContainer;
