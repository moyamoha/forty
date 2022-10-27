import React from 'react';
import BackButton from './BackButton';

export default function Layout({ children }) {
  return (
    <div>
      <BackButton></BackButton>
      {children}
    </div>
  );
}
