"use client"

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import bg from "@/public/assets/bg.jpg";
import why1 from "@/public/assets/why1.png";
import why2 from "@/public/assets/why2.png";
import why3 from "@/public/assets/why3.png";
import why4 from "@/public/assets/why4.png";

export default function WhyInvest() {
  const whyInvestRef = useRef(null);
  const whyInvestInView = useInView(whyInvestRef, { once: true });

  return (
    <section ref={whyInvestRef}>
      <div className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Header, Image and Description */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={whyInvestInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="">
                <span className="about_us_badge uppercase">
                  WHY WORK WITH ME
                </span>
                <h2 className="service_section_title">
                  Why Invest in <span className="font-light">Bangladesh</span>
                </h2>
              </div>
              <p className="about_us_description mt-0 pb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <Image
                  src={bg}
                  alt="Industrial landscape in Bangladesh"
                  className="w-full h-[350px] md:h-[440px] object-cover"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Play button */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/50 shadow-xl">
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: Cards */}
            <div className="space-y-6 flex flex-col items-end">
              {/* Card 1 */}
              <motion.div 
                className="why_card bg-[#1E552A]"
                initial={{ opacity: 0, x: 50 }}
                animate={whyInvestInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ x: -10, transition: { duration: 0.2 } }}
              >
                <div className="why_card_icon_bg">
                  <Image src={why1} alt="Why Invest Icon" className="" />
                </div>
                <div>
                  <h3 className="why_card_title text-white">
                    Continuous GDP Growth
                  </h3>
                  <p className="text-white">
                    Ranked 39th worldwide with 8.2% GDP rate in 2019,
                    Bangladesh has made a major advancement in the economic
                    sector.
                  </p>
                </div>
              </motion.div>
              {/* Card 2 */}
              <motion.div 
                className="why_card bg-white max-w-[512px]"
                initial={{ opacity: 0, x: 50 }}
                animate={whyInvestInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ x: -10, transition: { duration: 0.2 } }}
              >
                <div className="why_card_icon_bg">
                  <Image src={why2} alt="Why Invest Icon" className="" />
                </div>
                <div>
                  <h3 className="why_card_title text-[#1E552A]">
                    Strategic Location
                  </h3>
                  <p className="text-[#2D2D2D]">
                    The location of Bangladesh in South Asia makes it very
                    convenient for any successful industrial venture.
                  </p>
                </div>
              </motion.div>
              {/* Card 3 */}
              <motion.div 
                className="why_card bg-white"
                initial={{ opacity: 0, x: 50 }}
                animate={whyInvestInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ x: -10, transition: { duration: 0.2 } }}
              >
                <div className="why_card_icon_bg">
                  <Image src={why3} alt="Why Invest Icon" className="" />
                </div>
                <div>
                  <h3 className="why_card_title text-[#1E552A]">
                    Cost-efficient Human Resource
                  </h3>
                  <p className="text-[#2D2D2D]">
                    Compared to the manpower of other industrially enriched
                    countries, managing Bangladesh workforce is much
                    more cost-effective.
                  </p>
                </div>
              </motion.div>
              {/* Card 4 */}
              <motion.div 
                className="why_card bg-white max-w-[512px]"
                initial={{ opacity: 0, x: 50 }}
                animate={whyInvestInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ x: -10, transition: { duration: 0.2 } }}
              >
                <div className="why_card_icon_bg">
                  <Image src={why4} alt="Why Invest Icon" className="" />
                </div>
                <div>
                  <h3 className="why_card_title text-[#1E552A]">
                    Energetic Manpower
                  </h3>
                  <p className="text-[#2D2D2D]">
                    Bangladesh has produced a vast number of skilled workforce
                    in recent years who are prepared for diversified
                    industrial activities.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
