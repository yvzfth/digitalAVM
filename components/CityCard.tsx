import React from 'react';

const CityCard = ({
  cityName,
  citySrc,
}: {
  cityName: string;
  citySrc: string;
}) => {
  return (
    <div className='group relative w-[20rem] h-[13rem] bg-black rounded-xl shadow-xl overflow-hidden transition-all duration-500'>
      <img
        src={citySrc}
        className='opacity-80 w-[20rem] h-[13rem] rounded-lg group-hover:scale-[1.02] object-cover'
      />
      <h1 className='absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        {cityName}
      </h1>
    </div>
  );
};

export default CityCard;
