"use client";

import { motion } from "motion/react";

const cards = [
  {
    title: "Our History",
    description: "Founded with a vision to transform the industrial landscape, SEZL has grown into a beacon of economic development, attracting global investment and fostering local prosperity through strategic planning and execution."
  },
  {
    title: "Mission & Vision",
    description: "Founded with a vision to transform the industrial landscape, SEZL has grown into a beacon of economic development, attracting global investment and fostering local prosperity through strategic planning and execution."
  },
  {
    title: "Core Services",
    description: "Founded with a vision to transform the industrial landscape, SEZL has grown into a beacon of economic development, attracting global investment and fostering local prosperity through strategic planning and execution."
  }
];

export default function OverviewCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="overview_cards_section_div"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
          className="overview_card"
        >
          <div className="overview_card_icon_bg" />
          <h5 className="overview_card_title">{card.title}</h5>
          <p className="text-[#2D2D2D]">{card.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
