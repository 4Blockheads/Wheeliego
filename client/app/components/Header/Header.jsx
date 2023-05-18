/**
 * @author    : gogleset
 * @description : Header 부분 Navigation bar
 **/
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import $Header from './style';

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    return router.push('/');
  };
  return (
    <$Header>
      <h1 onClick={handleClick}>유니토키</h1>
      <nav>
        <ul>
          <Link href="/post">Post</Link>
        </ul>
        <button>Connected wallet</button>
      </nav>
    </$Header>
  );
};

export default Header;
