import React from 'react';
import { NavLink, Outlet } from 'react-router';

export default function Home() {
  return (
    <div>
      <h1 className='text-4xl'>This is a homepage</h1>
      <nav className='space-x-5'>
        <NavLink to={'/'}>Page1</NavLink>
        <NavLink to={'/page-2'}>Page2</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
