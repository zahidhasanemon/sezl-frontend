"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Continuous GDP Growth",
    desc:
      "Sirajganj Economic Zone Limited (SEZL) is at the forefront of industrial development, offering a strategic gateway for businesses to thrive.",
    image: "/assets/slide1.jpg",
  },
  {
    title: "Industrial Excellence",
    desc:
      "World-class infrastructure with sustainable industrial solutions.",
    image: "/assets/about1.jpg",
  },
  {
    title: "Future Ready Zone",
    desc:
      "Designed to support long-term economic transformation.",
    image: "/assets/bg.jpg",
  },
];

export default function FeaturedSlider() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="rounded-3xl overflow-hidden"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[420px] lg:h-[520px]">

              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-8 max-w-xl text-white">
                <h3 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {item.desc}
                </p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
