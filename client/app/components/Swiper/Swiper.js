/**
 * @author    : gogleset
 * @description : 옆으로 슬라이드 하는 효과를 주는 swiper를 사용합니다.
 **/
'use client';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

export default swiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
