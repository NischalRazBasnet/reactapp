import React from 'react';
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header className='bg-black text-white py-3 px-10 flex items-baseline justify-between relative top-0 sticky'>
      <NavLink to={'/'}>
        <h1 className='text-2xl'>Demo</h1>
      </NavLink>

      <nav className='space-x-5'>
        <NavLink
          className={(e) => (e.isActive ? 'text-amber-600' : '')}
          to={'/about'}
        >
          About
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? 'text-amber-600' : '')}
          to={'/contact'}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
