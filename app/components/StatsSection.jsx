"use client";

import Image from "next/image";
import bg2 from "@/public/assets/bg2.jpg";
import { motion } from "motion/react";

const stats = [
  { number: "1,041", text: "Acres of Land" },
  { number: "300k+", text: "Skilled Workforce" },
  { number: "Prime", text: "Connectivity Hub" },
  { number: "$2B+", text: "Total Investment" }
];

export default function StatsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="px-4 mb-5"
    >
      <div className="relative mx-auto rounded-2xl overflow-hidden lg:h-87.5 h-auto">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={bg2}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#1E552ACC]" />

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="about_us_stats_contents"
        >
          {/* Right Stats */}
          <div className="about_us_stats_grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + (index * 0.1),
                    ease: "backOut"
                  }}
                  className="about_us_stats_number"
                >
                  {stat.number}
                </motion.h3>
                <p className="about_us_stats_number_text">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
