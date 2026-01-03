"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import testimonial1 from "@/public/assets/testimonial1.jpg";
import comma from "@/public/assets/comma.png";
import { EffectCards } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    {
        name: "Daniel K.",
        role: "Senior Executive",
        text: `Before working with this team, I felt lost. Now I feel confident in my financial roadmap and I’m finally saving consistently. I didn’t know where to start with my finances.`,
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
    const testimonialRef = useRef(null);
    const testimonialInView = useInView(testimonialRef, { once: true });

    return (
        <section ref={testimonialRef} className="max-w-7xl mx-auto px-4 md:py-20 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 items-center">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={testimonialInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="about_us_badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        TESTIMONIALS
                    </motion.span>
                    <motion.h2
                        className="service_section_title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Life-Changing Journeys, <span className="font-light">Told by Our Clients</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={testimonialInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Image src={comma} alt="comma" />
                    </motion.div>
                </motion.div>

                {/* CENTER + RIGHT */}
                <motion.div
                    className="lg:col-span-2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={testimonialInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Swiper
                        modules={[Navigation, EffectCards]}
                        navigation={{
                            nextEl: ".swiper-next",
                            prevEl: ".swiper-prev",
                        }}
                        spaceBetween={40}
                        slidesPerView={1}
                        loop={true}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                                    {/* IMAGE */}
                                    <motion.div
                                        className="relative w-52 h-72 mx-auto"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={testimonialInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        {/* Multiple layered shadows */}
                                        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 -translate-x-6 bg-gray-300/40 rounded-2xl -rotate-3 h-3/4" />
                                        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 -translate-x-3 bg-gray-300/60 rounded-2xl -rotate-2 h-3/4" />

                                        {/* Main image with white border */}
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden z-10 border-4 border-white shadow-xl">
                                            <Image
                                                src={testimonial1}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </motion.div>

                                    {/* TEXT */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        <p className="text-[#2D2D2D] leading-relaxed mb-6 text-xl italic">
                                            {item.text}
                                        </p>

                                        <p className="font-bold text-[#2D2D2D] text-xl">
                                            {item.name}
                                        </p>
                                        <p className="text-[#2D2D2D]">
                                            {item.role}
                                        </p>
                                    </motion.div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* NAVIGATION - Outside SwiperSlide to prevent sliding */}
                        <motion.div
                            className="flex right-4 md:right-80 bottom-0 z-20 absolute gap-6 justify-center"
                            initial={{ opacity: 0 }}
                            animate={testimonialInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <motion.button
                                className="swiper-prev text-[#1C4B4280] hover:text-[#1C4B42] text-2xl cursor-pointer"
                            >
                                ←
                            </motion.button>
                            <motion.button
                                className="swiper-next text-[#1C4B4280] hover:text-green-700 text-2xl cursor-pointer"
                            >
                                →
                            </motion.button>
                        </motion.div>
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}

