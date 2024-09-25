'use client';

import Image from 'next/image';
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

function Slider2() {
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
        className="w-full h-full"
      >
        <SwiperSlide className="w-full h-full">
          <Image src="/slider2/image1.jpg" alt="" width={700} height={700} />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <Image src="/slider2/image2.png" alt="" width={700} height={700} />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <Image src="/slider2/image3.png" alt="" width={700} height={700} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider2