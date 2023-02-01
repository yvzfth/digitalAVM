import React from 'react';

const Brand = ({ brandSrc }: { brandSrc: string }) => {
  return (
    <div
      className='w-[10rem] min-w-[10rem] max-w-[10rem]
    sm:w-[12rem] sm:min-w-[12rem] sm:max-w-[12rem] 
    md:w-[20rem] md:max-w-[20rem] md:min-w-[20rem] 
    h-[6rem] sm:h-[8rem] md:h-[12rem] 
    p-4 border border-[var(--primary-color)] 
    rounded-xl shadow-xl hover:scale-105 hover:bg-[rgba(13,25,152,.2)]'
    >
      <img src={brandSrc} alt='' className='w-full h-full object-contain' />
    </div>
  );
};

export default Brand;
