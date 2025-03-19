import React from 'react';

export default function Footer() {
  return (
    <footer className='relative'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#000000'
          fillOpacity='1'
          d='M0,192L1440,64L1440,320L0,320Z'
        ></path>
      </svg>
      <div className='absolute bottom-0 inset-x-0 top-[50%] flex flex-col justify-center items-center text-white'>
        <h1 className='text-xl font-bold'>Develop By</h1>
        <h1 className='text-lg'>Some One Anonymous</h1>
      </div>
    </footer>
  );
}
