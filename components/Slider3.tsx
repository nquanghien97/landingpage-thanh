'use client';

import Image from 'next/image';
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

function Slider3() {
  return (
    <div className="overflow-hidden w-full mb-4">
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={20}
        navigation
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000
        }}
        className="w-full h-[600px]"
      >
        <SwiperSlide className="w-full h-full flex items-center justify-center">
          <div className="bg-[url('/slider3/image1.jpg')] bg-center bg-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex items-center justify-center">
          <div className="bg-[url('/slider3/image2.png')] bg-center bg-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex items-center justify-center">
          <div className="bg-[url('/slider3/image3.jpg')] bg-center bg-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex items-center justify-center">
          <div className="bg-[url('/slider3/image4.jpg')] bg-center bg-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex items-center justify-center">
          <div className="bg-[url('/slider3/image5.jpg')] bg-center bg-cover w-full h-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider3