'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/app/swiperStyles.css';

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import one from "@/public/assets/casousel/one.webp";
import three from "@/public/assets/casousel/three.webp";


export default function Carousel({ height = '400px' }) {
  const images = [one, three];
  return (
    <div className="carousel-container" style={{ height }}>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor
        keyboard={{ enabled: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        scrollbar={{ draggable: true }}
        navigation
        pagination={{ clickable: true }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <img
              src={images[i % images.length].src}
              alt={`Slide ${i + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
