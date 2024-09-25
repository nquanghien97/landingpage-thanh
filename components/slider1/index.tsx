'use client';

import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

function Slider1() {
  return (
    <div className="px-4">
      <div className="overflow-hidden w-full h-[650px]">
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={20}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000
        }}
        className="w-full h-full"
      >
        <SwiperSlide className="w-full h-full">
            <div className="w-full h-full bg-[url('/slide1/cuc-quan-ly-thuc-pham-va-duoc-pham-hoa-ky.png')] bg-cover bg-center" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
            <div className="w-full h-full bg-[url('/slide1/giay-chung-nhan.png')] bg-cover bg-center" />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}

export default Slider1