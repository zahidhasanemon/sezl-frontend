"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import testimonial1 from "@/public/assets/testimonial1.jpg";
import comma from "@/public/assets/comma.png";
import { EffectCards } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    {
        name: "Daniel K.",
        role: "Senior Executive",
        text: `Before working with this team, I felt lost. Now I feel confident in my financial roadmap and I’m finally saving consistently. I didn’t know where to start with my finances. They made everything simple and actionable.`,
        image: "/assets/testimonial1.jpg",
    },
    {
        name: "Sarah M.",
        role: "Product Manager",
        text: `Their guidance completely transformed the way I manage my finances. Everything feels clear and achievable now.`,
        image: "/testimonial-2.jpg",
    },
    {
        name: "John D.",
        role: "Product Manager",
        text: `Their guidance completely transformed the way I manage my finances. Everything feels clear and achievable now.`,
        image: "/testimonial-2.jpg",
    },
    {
        name: "Emily R.",
        role: "Product Manager",
        text: `Their guidance completely transformed the way I manage my finances. Everything feels clear and achievable now.`,
        image: "/testimonial-2.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:py-20 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 items-center">

                {/* LEFT */}
                <div>
                    <span className="about_us_badge">
                        TESTIMONIALS
                    </span>
                    <h2 className="service_section_title">
                        Life-Changing Journeys, <span className="font-light">Told by Our Clients</span>
                    </h2>
                    <Image src={comma} alt="comma"/>
                </div>

                {/* CENTER + RIGHT */}
                <div className="lg:col-span-2">
                    <Swiper
                        modules={[Navigation, EffectCards]}
                        navigation={{
                            nextEl: ".swiper-next",
                            prevEl: ".swiper-prev",
                        }}
                        spaceBetween={40}
                        slidesPerView={1}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                                    {/* IMAGE */}
                                    <div className="relative w-64 h-80 mx-auto">
                                        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-gray-200 rounded-2xl" />
                                        <Image
                                            src={testimonial1}
                                            alt={item.name}
                                            fill
                                            className="object-cover rounded-2xl relative z-10"
                                        />
                                    </div>

                                    {/* TEXT */}
                                    <div>
                                        <p className="text-[#2D2D2D] leading-relaxed mb-6 text-xl">
                                            {item.text}
                                        </p>

                                        <p className="font-bold text-[#2D2D2D] text-xl">
                                            {item.name}
                                        </p>
                                        <p className="text-[#2D2D2D]">
                                            {item.role}
                                        </p>
                                        {/* NAVIGATION */}
                                        <div className="flex gap-6 mt-8 justify-start ">
                                            <button className="swiper-prev text-green-700 text-2xl">
                                                ←
                                            </button>
                                            <button className="swiper-next text-green-700 text-2xl">
                                                →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>
            </div>
        </section>
    );
}
