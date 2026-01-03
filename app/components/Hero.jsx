"use client"

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import download from "@/public/assets/download.png";
import dean from "@/public/assets/dean.png";
import kerala from "@/public/assets/kerala.png";
import nitech from "@/public/assets/nitech.png";
import root from "@/public/assets/root.png";
import pad from "@/public/assets/pad.png";
import Navbar from "./Navbar";

export default function Hero() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <section className="container_inner rounded-[20px] overflow-hidden">
      <motion.div
        ref={heroRef}
        className="relative lg:min-h-[900px] min-h-[700px] rounded-[20px] overflow-hidden"
      >
        {/* Flipped background ONLY */}
        <div className="absolute inset-0 bg-[url('/assets/bg.jpg')] bg-cover bg-center -scale-x-100" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Normal content (NOT flipped) */}
        <Navbar />

        <motion.div
          className="relative xl:pt-[231px] pt-[150px] xl:pl-[295px] px-5 max-w-[914px]"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-white md:text-[64px] text-3xl font-light"
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="font-bold">Pioneering Economic</span> Growth in
            the Heart of Bangladesh
          </motion.h1>

          <motion.p
            className="text-white pt-6 pb-7"
            initial={{ opacity: 0, x: -30 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover unparalleled investment opportunities at Sirajganj
            Economic Zone, where strategic location meets world-class
            infrastructure and sustainable development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a href="#" className="arrow_btn max-w-55.5 group">
              <div className="arrow_btn_icon_bg">
                <Image src={download} alt="Arrow Right" />
              </div>
              <span>Download Brochure</span>
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 -mt-10 bg-white/10 backdrop-blur rounded-b-[20px] py-6 px-6">
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex items-center lg:gap-[122px] gap-10 lg:overflow-visible lg:justify-center"
              animate={{
                x: [0, -1000]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
            >
              {[...Array(4)].map((_, setIndex) => (
                <div key={`set-${setIndex}`} className="flex items-center lg:gap-[122px] gap-10">
                  <motion.div
                    className="slide"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={dean}
                      alt="dean"
                      className="min-w-[99px] h-[75px] object-contain"
                    />
                  </motion.div>
                  <motion.div
                    className="slide"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={kerala}
                      alt="kerala"
                      className="min-w-[99px] h-[75px] object-contain"
                    />
                  </motion.div>
                  <motion.div
                    className="slide"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={nitech}
                      alt="nitech"
                      className="min-w-[99px] h-[75px] object-contain"
                    />
                  </motion.div>
                  <motion.div
                    className="slide"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={root}
                      alt="root"
                      className="min-w-[99px] h-[75px] object-contain"
                    />
                  </motion.div>
                  <motion.div
                    className="slide"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={pad}
                      alt="pad"
                      className="min-w-[99px] h-[75px] object-contain"
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
