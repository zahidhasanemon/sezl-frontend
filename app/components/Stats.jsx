"use client"

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import bg2 from "@/public/assets/bg2.jpg";

export default function Stats() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <section ref={statsRef} className="px-4">
      <motion.div 
        className="relative mx-auto rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <Image
          src={bg2}
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#1E552ACC]" />

        {/* Content */}
        <div className="relative z-10 flex md:gap-10 gap-6 px-8 lg:py-[114px] py-6 text-white max-w-[1340px] mx-auto justify-between flex-col lg:flex-row">
          {/* Left Content */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold leading-snug max-w-md">
              Lorem Ipsum is simply <br />
              dummy text of the <br />
              <span className="font-normal">printing</span>
            </h2>
          </motion.div>

          {/* Right Stats */}
          <div className="flex flex-col lg:gap-[70px] gap-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="stats_title">1,041</h3>
              <p className="stats_subtitle">Acres of Land</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="stats_title">300k+</h3>
              <p className="stats_subtitle">Skilled Workforce</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="stats_title">Prime</h3>
              <p className="stats_subtitle">Connectivity Hub</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
