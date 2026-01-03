"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import aboutLogo from "@/public/assets/aboutLogo.png";
import arrow_green from "@/public/assets/arrow_green.svg";
import about1 from "@/public/assets/about1.jpg";

export default function AboutUs() {
  const collageRef = useRef(null);
  const collageInView = useInView(collageRef, { once: true, margin: "-100px" });
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });

  const fbIcon = 'fa-brands fa-facebook-f';
  const XIcon = 'fa-brands fa-twitter';
  const instaIcon = 'fa-brands fa-instagram';

  // Animation variants for images
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Animation for center logo badge
  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Animation variants for content elements
  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Animation variants for stats
  const statVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Animation variants for social icons
  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -90
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };


  return (
    <section className="about_us px-4 2xl:px-0">
      <div className="about_us_main_div">
        {/* LEFT: Image collage */}
        <div className="mx-auto" ref={collageRef}>
          <div className="relative grid grid-cols-2 gap-4">
            {/* Image 1 */}
            <motion.div
              className="col-span-1 row-span-2 rounded-2xl overflow-hidden mt-[33px] mb-4 2xl:w-[308px] 2xl:h-[502px] h-[251px]"
              variants={imageVariants}
              initial="hidden"
              animate={collageInView ? "visible" : "hidden"}
              transition={{ delay: 0 }}
            >
              <Image
                src={about1}
                alt="about1"
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="relative 2xl:w-[264px] 2xl:h-[264px] w-auto h-40 rounded-2xl overflow-hidden"
              variants={imageVariants}
              initial="hidden"
              animate={collageInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/assets/bg.jpg"
                alt="Image 2"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              className="relative 2xl:w-[264px] 2xl:h-[264px] w-auto h-40 rounded-2xl overflow-hidden"
              variants={imageVariants}
              initial="hidden"
              animate={collageInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <Image
                src="/assets/about3.png"
                alt="Image 3"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Center logo badge */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={logoVariants}
              initial="hidden"
              animate={collageInView ? "visible" : "hidden"}
            >
              <div className="">
                <Image src={aboutLogo} alt="SEZL Logo" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="flex gap-5 flex-col lg:flex-row lg:justify-between lg:items-center" ref={contentRef}>
          {/* left side content */}
          <div className="about_us_content">
            {/* Badge */}
            <motion.span
              className="about_us_badge"
              variants={contentVariants}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              transition={{ delay: 0 }}
            >
              ABOUT US
            </motion.span>

            {/* Heading */}
            <motion.h2
              className="about_us_heading"
              variants={contentVariants}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
            >
              Sirajganj Economic
              <span className="font-normal">Zone Limited (SEZL)</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="about_us_description"
              variants={contentVariants}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              Sirajganj Economic Zone Limited (SEZL) is at the forefront of
              industrial development, offering a strategic gateway for
              businesses to thrive. We provide a comprehensive ecosystem
              designed to foster innovation, attract investment, and support
              sustainable growth for our partners.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <Link href="#">
                <motion.button
                  className="arrow_btn group hover:border hover:border-[#1E552A] lg:mt-16.25 mt-6 w-28.75"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="arrow_btn_icon_bg">
                    <Image src={arrow_green} alt="Arrow Right" />
                  </div>
                  <span>See All</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
          {/* right side content */}
          <div>
            {/* Stats */}
            <div className="">
              <motion.div
                variants={statVariants}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
              >
                <h3 className="status_count">10+</h3>
                <p className="experience">01. Years of Experience</p>
              </motion.div>

              <motion.div
                variants={statVariants}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                transition={{ delay: 0.5 }}
              >
                <h3 className="status_count">240+</h3>
                <p className="experience">02. Successful Projects</p>
              </motion.div>
            </div>

            {/* Social icons (demo) */}
            <motion.div
              className="social_icons"
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
            >
              <motion.i
                className={`${fbIcon} text-black text-3xl cursor-pointer`}
                variants={iconVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              ></motion.i>
              <motion.i
                className={`${XIcon} text-black text-3xl cursor-pointer`}
                variants={iconVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              ></motion.i>
              <motion.i
                className={`${instaIcon} text-black text-3xl cursor-pointer`}
                variants={iconVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              ></motion.i>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
