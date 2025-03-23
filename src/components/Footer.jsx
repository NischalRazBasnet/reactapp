import React from 'react';

export default function Footer() {
  return (
    <footer className='relative w-full h-[250px] mt-10 max-sm:h-[200px]'>
      {/* using svg */}
      {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#000000'
          fillOpacity='1'
          d='M0,192L1440,64L1440,320L0,320Z'
        ></path>
      </svg>
      <div className='absolute bottom-0 inset-x-0 top-[50%] flex flex-col justify-center items-center text-white'>
        <h1 className='text-xl font-bold'>Develop By</h1>
        <h1 className='text-lg'>Some One Anonymous</h1>
      </div> */}
      <div
        className='absolute top-0 left-0 h-full w-full bg-black'
        style={{ clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%, 0% 100%)' }}
      ></div>
      <div className='absolute text-white inset-x-0 bottom-0 top-[50%] text-center flex flex-col items-center justify-center max-sm:bottom-10'>
        <h3>Developed By</h3>
        <h3 className='font-normal'>Some One Anonymous</h3>
      </div>
    </footer>
  );
}
