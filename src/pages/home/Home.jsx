import React from 'react';
import Intro from './Intro';
import Techno from './Techno';
import Myinfo from './Myinfo';

export default function Home() {
  return (
    <div className=' space-y-15'>
      <Intro />
      <Techno />
      <Myinfo />
    </div>
  );
}
