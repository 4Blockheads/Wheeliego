/**
 * @author    : Jaenk-99
 * @description : HomePage 작업
 **/
'use client';
import Image from 'next/image';
import React from 'react';

import {
  $Button,
  $ButtonDiv,
  $HomeWrap,
  $ImageLeft,
  $ImageRight,
  $ImagesDiv,
  $TextsDiv,
  $WhiteButton
} from './style';

const Home = () => {
  return (
    <$HomeWrap>
      <$ImagesDiv>
        <$ImageLeft>
          <Image
            priority={true}
            src="/tokiLeft.png"
            alt="tokiLeft"
            width="400"
            height="500"
          />
        </$ImageLeft>
        <$ImageRight>
          <Image
            priority={true}
            src="/tokiRight.png"
            alt="tokiRight"
            width="350"
            height="50"
          />
        </$ImageRight>
      </$ImagesDiv>
      <$TextsDiv>
        Welcome to Unitoki, the intergalactic hub of social networking in the
        web3.0 universe! 🚀✨ Are you tired of the same old web2.0 social
        networks that feel like they're stuck in the Stone Age? Well, prepare to
        embark on an extraterrestrial journey into the world of Unitoki, where
        we've combined the fun and excitement of social networking with the
        limitless possibilities of the web3.0 era!a
        <$ButtonDiv>
          <$Button>POST NOW</$Button>
          <$WhiteButton>Find Signal</$WhiteButton>
        </$ButtonDiv>
      </$TextsDiv>
    </$HomeWrap>
  );
};

export default Home;
