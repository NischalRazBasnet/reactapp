import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Intro from './Intro';
import Techno from './Techno';
import Myinfo from './Myinfo';

export default function Home() {
  return (
    <div>
      <div>
        <Intro />
        <Techno />
        <Myinfo />
      </div>
    </div>
  );
}
