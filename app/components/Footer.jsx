"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import arrow_green from "@/public/assets/arrow_green.svg";
import message from "@/public/assets/message.png";
import footerlogo from "@/public/assets/footerlogo.png";
import footer_arrow from "@/public/assets/footer_arrow.png";

export default function CTAAndFooter() {
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true });

  const fbIcon = 'fa-brands fa-facebook-f';
  const XIcon = 'fa-brands fa-twitter';
  const linkedin = 'fa-brands fa-linkedin';
  const pinterestIcon = 'fa-brands fa-pinterest';

  const telephoneIcon = 'fa-solid fa-phone';
  const mailIcon = 'fa-solid fa-envelope';

  return (
    <footer ref={footerRef} className="w-full">
      {/* CTA SECTION */}
      <motion.section
        className="cta_section relative"
        initial={{ opacity: 0, y: 50 }}
        animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/footerbg.jpg" // change later
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="bg_layer" />
        </div>

        {/* Content */}
        <div className="cta_contents">
          <motion.h2
            className="cta_heading"
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to Explore Your Next Big
          </motion.h2>
          <motion.p
            className="cta_heading2"
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Opportunity?
          </motion.p>

          <motion.div
            className="cta_btn_div"
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="#">
              <motion.button
                className="consultation_btn group hover:border hover:border-[#1E552A] lg:mt-16.25 mt-6 pr-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="consultation_icon_bg">
                  <Image src={arrow_green} alt="Arrow Right" />
                </div>
                <span>Schedule Your Free Consultation</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* NEWSLETTER BAR */}
      <motion.section
        className="newsletter_bar"
        initial={{ opacity: 0, y: 30 }}
        animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="newsletter_contents">
          <p className="newslegger_text">Subscribe to our newsletter!</p>

          <motion.div
            className="newsletter_input_div"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={footerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input
              type="email"
              placeholder="Type your email address"
              className="newsletter_input"
            />
            <motion.button
              className="newsletter_btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src={message} alt="message" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.section
        className="bg-[#044512] text-white pt-14 pb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* LOGO */}
          <motion.div
            className="md:block flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={footerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src={footerlogo} // change later
              alt="SEZL Logo"
            />
          </motion.div>

          {/* ADDRESS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="font-semibold mb-3">Our Address</h4>
            <p>
              123 Investment Lane, Sirajganj,
              <br />
              Bangladesh
            </p>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="font-semibold mb-3">Contact Us</h4>
            <p className="footer_contact_items max-w-max">
                <i className={`${telephoneIcon} text-yellow-300`}></i>
              <span>+880 123 456 7890</span>
            </p>
            <p className="footer_contact_items max-w-max">
                <i className={`${mailIcon} text-yellow-300`}></i>
              <span>info@sezl.gov.bd</span>
            </p>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h4 className="font-semibold mb-3">Social Links</h4>
            <div className="flex gap-1.5">
              <motion.div
                className="footer_social_icons"
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`${fbIcon} text-yellow-300 text-2xl`}></i>
              </motion.div>
              <motion.div
                className="footer_social_icons"
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`${XIcon} text-yellow-300 text-2xl`}></i>
              </motion.div>
              <motion.div
                className="footer_social_icons"
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`${linkedin} text-yellow-300 text-2xl`}></i>
              </motion.div>
              <motion.div
                className="footer_social_icons"
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`${pinterestIcon} text-yellow-300 text-2xl`}></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* BOTTOM */}
        <motion.div
          className="text-[10px] lg:flex max-w-7xl mx-auto xl:gap-10 mt-5 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="lg:w-[400px] mx-4 md:mx-0 flex justify-center md:justify-start">
            © {new Date().getFullYear()} Sirajganj Economic Zone Ltd. All rights reserved.
          </span>
          <div className="border-t-[0.5px] border-white max-w-[937px] flex justify-start md:gap-8 gap-2 w-full mt-2 md:flex-row flex-col pt-2">
            <Link
              className="footer_bottom_arrow"
              href="about-us"
            >
              <span>About us</span>
              <Image
                src={footer_arrow}
                alt="footer_arrow"
                className="h-[11px] w-[11px]"
              />
            </Link>
            <Link
              className="footer_bottom_arrow"
              href="#"
            >
              <span>Our services</span>
              <Image
                src={footer_arrow}
                alt="footer_arrow"
                className="h-[11px] w-[11px]"
              />
            </Link>
            <Link
              className="footer_bottom_arrow"
              href="#"
            >
              <span>Teams</span>
              <Image
                src={footer_arrow}
                alt="footer_arrow"
                className="h-[11px] w-[11px]"
              />
            </Link>
            <Link
              className="footer_bottom_arrow"
              href="#"
            >
              <span>Awards</span>
              <Image
                src={footer_arrow}
                alt="footer_arrow"
                className="h-[11px] w-[11px]"
              />
            </Link>
            <Link
              className="footer_bottom_arrow"
              href="#"
            >
              <span>Contact</span>
              <Image
                src={footer_arrow}
                alt="footer_arrow"
                className="h-[11px] w-[11px]"
              />
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </footer>
  );
}
