import React from 'react';

const WhyUsCard = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className='group relative flex flex-col items-center justify-center shadow-sm rounded-xl transition-all duration-500 w-fit p-4'>
      <img
        src={src}
        className='rounded-lg group-hover:scale-[1.005]'
        width={130}
        height={130}
      />
      <h1 className='mt-4 text-2xl text-[var(--primary-color)]'>{title}</h1>
    </div>
  );
};

export default WhyUsCard;
