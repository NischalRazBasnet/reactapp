import React from 'react';

export default function Svg({ effects, d }) {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 512 512'
        stroke='currentColor'
        strokeWidth={0}
        height={150}
        width={150}
        className={`${effects} hover:text-rose-500 hover:scale-125 transition-all`}
      >
        <path d={d}></path>
      </svg>
    </div>
  );
}
