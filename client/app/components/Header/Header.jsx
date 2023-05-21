/**
 * @author    : gogleset, Jaenk
 * @description : Header 부분 Navigation bar
 **/
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useNetwork } from 'wagmi';

import { ConnectWallet } from './ConnectWallet';
import { $ButtonsDiv, $Header, $ImageDiv, $Nav, $SearchButton } from './style';

const Header = () => {
  const router = useRouter();
  const { chain } = useNetwork();
  console.log('chain', chain);

  const handleClick = () => {
    return router.push('/');
  };
  return (
    <$Header>
      <$ImageDiv>
        <Image
          style={{ cursor: 'pointer' }}
          priority={true}
          width="250"
          height="125"
          onClick={handleClick}
          src="/logo.png"
          alt="logo"
        />
      </$ImageDiv>
      <$Nav>
        <span
          onClick={() => {
            return router.push('/');
          }}
        >
          Home
        </span>
        <span
          onClick={() => {
            return router.push('/post');
          }}
        >
          Post
        </span>
        <span
          onClick={() => {
            return router.push("/myPage");
          }}
        >
          My page
        </span>
        <span>Point</span>
      </$Nav>
      <$ButtonsDiv>
        <$SearchButton>
          <Image className="image" src="/search.png" width="20" height="20" />
          Search
        </$SearchButton>
        <ConnectWallet />
      </$ButtonsDiv>
    </$Header>
  );
};

export default Header;
