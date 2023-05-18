/**
 * @author    : gogleset
 * @description : Header 부분 Navigation bar
 **/
'use client';
import Image from 'next/image';
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
      <div className="image-box">
        <Image
          style={{ cursor: 'pointer' }}
          priority={true}
          fill={true}
          onClick={handleClick}
          src="/logo.png"
          alt="logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <nav>
        <ul>
          <Link href="/post">Post</Link>
        </ul>
        <button className="button">connected wallet</button>
      </nav>
    </$Header>
  );
};

export default Header;
