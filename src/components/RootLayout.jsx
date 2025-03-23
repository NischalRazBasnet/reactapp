import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';

export default function RootLayout() {
  return (
    <div className='flex flex-col min-h-screen max-w-[1700px] mx-auto'>
      <div className='flex-1'>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
