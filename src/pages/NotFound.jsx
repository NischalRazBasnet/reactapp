import React from 'react';

export default function NotFound() {
  return (
    <div className='h-screen min-w-full flex flex-col justify-center items-center space-y-5'>
      <h1 className='font-bold text-red-500 text-4xl'>404 Page Not Found</h1>

      <button className='bg-black px-2 text-white py-1 rounded-sm self-center'>
        Go Back TO Home
      </button>
    </div>
  );
}
