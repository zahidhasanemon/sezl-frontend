"use client"

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import bg from "@/public/assets/bg.jpg";
import why1 from "@/public/assets/why1.png";
import why2 from "@/public/assets/why2.png";
import why3 from "@/public/assets/why3.png";
import why4 from "@/public/assets/why4.png";
import VideoColorSpace  from "./VideoSection"

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
              <VideoColorSpace bg={bg} />
            </motion.div>

            {/* Right: Cards */}
            <div className="space-y-6 flex flex-col items-end">
              {/* Card 1 */}
              <motion.div
                className="why_card bg-white hover:bg-[#1E552A] group"
                initial={{ opacity: 0, x: 50 }}
                animate={whyInvestInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ x: -10, transition: { duration: 0.2 } }}
              >
                <div className="why_card_icon_bg">
                  <Image src={why1} alt="Why Invest Icon" className="" />
                </div>
                <div>
                  <h3 className="why_card_title text-[#1E552A] group-hover:text-white transition-colors duration-300">
                    Continuous GDP Growth
                  </h3>
                  <p className="text-[#1E552A] group-hover:text-white transition-colors duration-300">
                    Ranked 39th worldwide with 8.2% GDP rate in 2019,
                    Bangladesh has made a major advancement in the economic
                    sector.
                  </p>
                </div>
              </motion.div>
              {/* Card 2 */}
              <motion.div
                className="why_card bg-white hover:bg-[#1E552A] group max-w-[512px]"
                initial={{ opacity: 0, x: 50 }}
                animate={whyInvestInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ x: -10, transition: { duration: 0.2 } }}
              >
                <div className="why_card_icon_bg">
                  <Image src={why2} alt="Why Invest Icon" className="" />
                </div>
                <div>
                  <h3 className="why_card_title text-[#1E552A] group-hover:text-white transition-colors duration-300">
                    Strategic Location
                  </h3>
                  <p className="text-[#1E552A] group-hover:text-white transition-colors duration-300">
                    The location of Bangladesh in South Asia makes it very
                    convenient for any successful industrial venture.
                  </p>
                </div>
              </motion.div>
              {/* Card 3 */}
              <motion.div
                className="why_card bg-white hover:bg-[#1E552A] group"
                initial={{ opacity: 0, x: 50 }}
                animate={whyInvestInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ x: -10, transition: { duration: 0.2 } }}
              >
                <div className="why_card_icon_bg">
                  <Image src={why3} alt="Why Invest Icon" className="" />
                </div>
                <div>
                  <h3 className="why_card_title text-[#1E552A] group-hover:text-white transition-colors duration-300">
                    Cost-efficient Human Resource
                  </h3>
                  <p className="text-[#1E552A] group-hover:text-white transition-colors duration-300">
                    Compared to the manpower of other industrially enriched
                    countries, managing Bangladesh workforce is much
                    more cost-effective.
                  </p>
                </div>
              </motion.div>
              {/* Card 4 */}
              <motion.div
                className="why_card bg-white hover:bg-[#1E552A] group max-w-[512px]"
                initial={{ opacity: 0, x: 50 }}
                animate={whyInvestInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ x: -10, transition: { duration: 0.2 } }}
              >
                <div className="why_card_icon_bg">
                  <Image src={why4} alt="Why Invest Icon" className="" />
                </div>
                <div>
                  <h3 className="why_card_title text-[#1E552A] group-hover:text-white transition-colors duration-300">
                    Energetic Manpower
                  </h3>
                  <p className="text-[#1E552A] group-hover:text-white transition-colors duration-300">
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
