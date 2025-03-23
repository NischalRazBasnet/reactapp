import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Intro() {
  return (
    <div>
      <div
        id='hero-section'
        className='grid grid-cols-2 items-center max-sm:grid-cols-1 place-items-center'
      >
        <div>
          <DotLottieReact
            className='max-sm:w-[300px]'
            src='https://lottie.host/3730583f-6a2f-4618-a462-ae15fa86fdff/nIi9VTpD1F.lottie'
            loop
            autoplay
          />
        </div>
        <div className='space-y-3 px-15 max-sm:text-center'>
          <h1 className='sm:text-justify'>Hi, I am John</h1>
          <p className='text-red-400'>Some Dev, Freelancer, Rounder</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas
            magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum
            laborum dolor sapiente sed delectus aspernatur eius sint itaque
            rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia
            sit. Eaque, explicabo quam!
          </p>
        </div>
      </div>
    </div>
  );
}
