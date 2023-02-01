import React from 'react';

const WhyUsCard = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className='group w-[14rem] h-[16rem] relative flex flex-col items-center justify-center shadow-sm rounded-xl transition-all duration-500 p-4'>
      <img
        src={src}
        className='group-hover:scale-[1.005] object-contain w-full h-full'
        width={130}
        height={130}
      />
      <h1 className='mt-4 text-2xl text-[var(--primary-color)]'>{title}</h1>
    </div>
  );
};

export default WhyUsCard;
