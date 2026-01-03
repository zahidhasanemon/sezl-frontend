"use client";

import Image from "next/image";
import about1 from "@/public/assets/about1.jpg";
import aboutLogo from "@/public/assets/aboutLogo.png";
import { motion } from "motion/react";

export default function OverviewSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overview_section_div"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="2xl:max-w-177.75 lg:max-w-130"
      >
        <h2 className="about_us_heading 2xl:max-w-156.5 lg:max-w-130 mb-6">
          Overview of Sirajganj
          <span className="font-normal">
            {" "}
            Economic Zone Limited (SEZL)
          </span>
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="zone_text"
        >
          Sirajganj Economic Zone Limited is the largest Economic Zone to
          become the driving force of sustainable development in
          Bangladesh. The project will play an indispensable role in
          generating a wide range of employment opportunities as well as
          production activities in the Northern part of Bangladesh. It has
          got all the potential to contribute to the countries industrial
          development.
        </motion.p>
        <motion.h6
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="key_points_title"
        >
          Key points of SEZL:
        </motion.h6>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="list-disc"
        >
          <li className="key_points_list_item">
            This is the largest & well-planned private economic zone
          </li>
          <li className="key_points_list_item">
            {"It\'s located in a well-populated area and thus local employment opportunity can be created"}
          </li>
          <li className="key_points_list_item">
            It confirms lucrative location which is important for
            potential investors
          </li>
          <li className="key_points_list_item">
            It ensures strong communication network
          </li>
          <li className="key_points_list_item">
            It upholds highest level of services
          </li>
        </motion.ul>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src={about1}
            alt="about1"
            className="lg:h-132.5 w-132.5 object-cover rounded-[10px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Image
            src={aboutLogo}
            alt="aboutLogo"
            className="absolute -bottom-14 -left-16.25 lg:block hidden"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
