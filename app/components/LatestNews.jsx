"use client"

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import arrow_green from "@/public/assets/arrow_green.svg";
import news1 from "@/public/assets/news1.png";
import news2 from "@/public/assets/news2.png";
import news3 from "@/public/assets/news3.png";

export default function LatestNews() {
  const newsRef = useRef(null);
  const newsInView = useInView(newsRef, { once: true });

  return (
    <section ref={newsRef} className="bg-[#F8F8F8]">
      <div className="container_main_div md:pt-18.75 pt-5 md:pb-26.25 pb-5 px-4 2xl:px-0">
        <motion.div 
          className="service_section_header md:pb-8 pb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={newsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="about_us_badge uppercase">Insights</span>
            <h2 className="service_section_title">
              Latest News & <br />{" "}
              <span className="font-light">Insights</span>
            </h2>
            {/* Description */}
            <p className="about_us_description mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make.
            </p>
          </div>
          <motion.div 
            className="mt-auto"
            initial={{ opacity: 0, x: 30 }}
            animate={newsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="#">
              <button className="arrow_btn group hover:border hover:border-[#1E552A] lg:mt-16.25 mt-6 w-50">
                <div className="arrow_btn_icon_bg">
                  <Image src={arrow_green} alt="Arrow Right" />
                </div>
                <span>Check All Insights</span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
        {/* card div */}
        <div className="news_cards_div">
          {/* card 1 */}
          <motion.div 
            className="news_card_main_div"
            initial={{ opacity: 0, y: 50 }}
            animate={newsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <Image src={news1} alt="News 1" className="news_card_img" />
            <span className="news_card_header">ECONOMY</span>
            <h4 className="news_card_title">
              SEZL Signs Landmark Deal with Global Textile Manufacturer
            </h4>
            <p className="news_card_date">Oct 26, 2023</p>
          </motion.div>
          {/* card 2 */}
          <motion.div 
            className="news_card_main_div"
            initial={{ opacity: 0, y: 50 }}
            animate={newsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <Image src={news2} alt="News 2" className="news_card_img" />
            <span className="news_card_header">ECONOMY</span>
            <h4 className="news_card_title">
              The Future of Sustainable Industrialization in Bangladesh
            </h4>
            <p className="news_card_date">Oct 26, 2023</p>
          </motion.div>
          {/* card 3 */}
          <motion.div 
            className="news_card_main_div"
            initial={{ opacity: 0, y: 50 }}
            animate={newsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <Image src={news3} alt="News 3" className="news_card_img" />
            <span className="news_card_header">ECONOMY</span>
            <h4 className="news_card_title">
              SEZL Signs Landmark Deal with Global Textile Manufacturer
            </h4>
            <p className="news_card_date">Oct 26, 2023</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}