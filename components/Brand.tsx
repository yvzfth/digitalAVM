import React from 'react';

const Brand = ({ brandSrc }: { brandSrc: string }) => {
  return (
    <div className='w-[20rem] max-w-[20rem] min-w-[20rem]'>
      <img src={brandSrc} alt='' className='w-[20rem]' />
    </div>
  );
};

export default Brand;
