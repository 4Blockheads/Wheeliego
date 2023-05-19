/**
 * @author    : Jaenk-99
 * @description : HomePage 작업
 **/
'use client';
import Image from 'next/image';
import React from 'react';

import { $Button, $HomeWrap, $ImagesDiv, $TextsDiv } from './style';

const Home = () => {
  return (
    <$HomeWrap>
      <$ImagesDiv>
        <Image priority={true} fill={true} src="/toki1.png" alt="toki1" />
        <Image priority={true} fill={true} src="/toki2.png" alt="toki2" />
      </$ImagesDiv>
      <$TextsDiv>
        Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam
        nonummy nibh euismod tinci- dunt ut laoreet dolore magna aliquam erat
        volut- pat. Ut wisi enim ad minim veniam, quis nostrud
        <$Button>POST NOW</$Button>
      </$TextsDiv>
    </$HomeWrap>
  );
};

export default Home;
