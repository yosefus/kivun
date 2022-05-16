import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ height: '80px' }} />
      <div style={{ minHeight: '90vh' }}>{children}</div>
    </>
  );
}
