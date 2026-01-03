"use client";

import Image from "next/image";
import about3 from "@/public/assets/about3.png";
import { motion } from "motion/react";

const years = ["2016", "2017", "2018", "2019"];

const historyCards = [
  {
    title: "Government approval",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    title: "License as Developer and Operator",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    title: "Land handed over",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    title: "Development starts",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
];

export default function HistorySection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="history_section"
    >
      <div className="history_inner_div">
        {/* TOP IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="history_top_img"
        >
          <Image
            src={about3}
            alt="SEZ History"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="history_contacts">
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="history_contact_title"
          >
            Brief History of SEZ
          </motion.h2>

          {/* TIMELINE */}
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="history_timeline"
          >
            {/* Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute left-0 right-0 top-16.5 h-px bg-white/30 origin-left"
            />

            {years.map((year) => (
              <motion.div
                key={year}
                variants={timelineItemVariants}
                whileHover={{ scale: 1.1 }}
                className="history_timeline_year"
              >
                <motion.span
                  whileHover={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                  className="history_timeline_year_single"
                >
                  {year}
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.2 }}
                  className="history_timeline_dot"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CARDS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="history_card_grid"
          >
            {historyCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="history_card_div"
              >
                <h4 className="history_card_title">{card.title}</h4>
                <p className="history_card_text">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
