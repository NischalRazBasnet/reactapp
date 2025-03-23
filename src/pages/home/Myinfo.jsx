import React from 'react';

export default function Myinfo() {
  return (
    <div className='flex flex-col items-center space-y-5'>
      <h1>Who am I</h1>
      <div className='h-[400px] w-[400px] bg-black text-white rounded-full border-4 border-green-400 flex justify-center items-center max-sm:size-[300px]'>
        <div>
          <p>Name : Some Person</p>
          <p>Email: someperson@gmail.com</p>
          <p>Tel:9777777</p>
          <p>Age:90</p>
          <p>Experience:python, java, dart</p>
        </div>
      </div>
    </div>
  );
}
