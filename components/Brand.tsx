import React from 'react';

const Brand = ({ brandSrc }: { brandSrc: string }) => {
  return (
    <div className='w-[20rem] max-w-[20rem] min-w-[20rem] h-[12rem] p-4 border border-[var(--primary-color)] rounded-xl shadow-xl'>
      <img src={brandSrc} alt='' className='w-full h-full object-contain' />
    </div>
  );
};

export default Brand;
