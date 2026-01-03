"use client"

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import arrow_green from "@/public/assets/arrow_green.svg";
import service1 from "@/public/assets/service1.png";
import service2 from "@/public/assets/service2.png";
import service3 from "@/public/assets/service3.png";
import service4 from "@/public/assets/service4.png";
import service5 from "@/public/assets/service5.png";

export default function Services() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true });

  return (
    <section ref={servicesRef} className="container_main_div md:pt-25 pt-5 md:pb-32 pb-5 px-4 2xl:px-0">
      <div className="service_section_header md:pb-16.25 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about_us_badge uppercase">Services</div>
          <h2 className="service_section_title">
            Our Core <span className="font-light">Services</span>
          </h2>
          {/* Description */}
          <p className="about_us_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy
            tex
          </p>
        </motion.div>
        <motion.div 
          className="mt-auto"
          initial={{ opacity: 0, x: 30 }}
          animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            href="#"
            className="arrow_btn group hover:border hover:border-[#1E552A] w-50.5 mt-5 lg:mt-0"
          >
            <div className="arrow_btn_icon_bg">
              <Image src={arrow_green} alt="Arrow Right" />
            </div>
            <span>Check All Services</span>
          </Link>
        </motion.div>
      </div>

      <div className="relative bg-white mt-6 lg:mt-0">
        {/* Watermark text */}
        <h2 className="absolute inset-0 flex items-center justify-center text-[110px] font-bold text-green-800/5 select-none">
          SEZ Core Services
        </h2>

        {/* Dotted curved lines */}
        <svg
          className="absolute inset-0 w-full h-full lg:block hidden"
          viewBox="0 0 1000 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M200 120 Q350 500 500 120"
            stroke="#2F7D32"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
          <path
            d="M500 120 Q650 500 800 120"
            stroke="#2F7D32"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
        </svg>

        {/* Service circles */}
        <div className="relative max-w-[1340px] mx-auto grid lg:grid-cols-6 lg:gap-y-24 gap-y-6 place-items-center ">
          {/* Top Left */}
          <motion.div 
            className="service_circle col-span-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={servicesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Image
              src={service1}
              alt="Legal service"
              width={80}
              height={80}
            />
            <p className="service_circle_title">Legal service</p>
          </motion.div>

          {/* Top Center */}
          <motion.div 
            className="service_circle col-span-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={servicesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Image
              src={service2}
              alt="Manufacturing service"
              width={80}
              height={80}
            />
            <p className="service_circle_title">Manufacturing service</p>
          </motion.div>

          {/* Top Right */}
          <motion.div 
            className="service_circle col-span-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={servicesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Image
              src={service3}
              alt="Administrative service"
              width={80}
              height={80}
            />
            <p className="service_circle_title">Administrative service</p>
          </motion.div>

          {/* Empty spacer */}
          <div className="lg:block hidden" />

          {/* Bottom Left */}
          <motion.div 
            className="service_circle col-span-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={servicesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Image
              src={service4}
              alt="Human Resource"
              width={80}
              height={80}
            />
            <p className="service_circle_title">Human Resource</p>
          </motion.div>

          {/* Bottom Right */}
          <motion.div 
            className="service_circle col-span-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={servicesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Image
              src={service5}
              alt="Construction service"
              width={80}
              height={80}
            />
            <p className="service_circle_title">Construction service</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
