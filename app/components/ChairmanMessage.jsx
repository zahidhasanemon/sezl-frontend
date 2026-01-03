"use client";

import Image from "next/image";
import chairman from "@/public/assets/chairman.png";
import { motion } from "motion/react";

export default function ChairmanMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="about_us_chairman_section"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
          <div>
            <Image
              src={chairman}
              alt="chairman"
              className="chairman_image"
            />
          </div>

          <h4 className="chairman_name">A Matin Chowdhury</h4>
          <h6 className="chairman_position">Chairman</h6>
          <p className="chairman_company_name">
            Sirajganj Economic Zone Ltd
          </p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-199"
      >
        {/* Heading */}
        <h2 className="about_us_heading max-w-156.5 mb-6">
          Chairmans
          <span className="font-normal"> Welcome Message</span>
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="chairman_message_text"
        >
          It is a great pleasure for me to welcome and address Investors
          both National – International to Sirajganj Economic Zone Ltd.,
          the largest Private Special Economic Zone of Bangladesh. With
          the objective of achieving investment, development and
          employment, we are a group of successful Industrialists who
          joined hands to embark on this very challenging and difficult
          project.
          <br /> <br />
          We are embarking on it for meeting the economic needs of our
          country, at the same time create an environment for quality
          employment and enterprises.
          <br /> <br />
          The Board of Directors who have individual success and
          contribution to industry and society are aware of the
          predicaments for setting up industrial venture in Bangladesh,
          therefore, have ensured that all of these road blocks are
          eliminated for our investors and that they can come and set up
          units on a plug and play basis avoiding the non-production
          issues.
          <br /> <br />
          To achieve the objective, we have hired the best possible
          Consultants like Pricewaterhouse Coopers Ltd. (PWC) and others
          for advising us to set up this global standard project keeping
          in mind sustainability, environmental compliance records,
          recycle, etc.
          <br /> <br />
          A capable team of dedicated Professionals are running and
          setting up these units and we are looking forward to your
          participation. Should there be any queries, please do not
          hesitate to contact me and Members of my Board for any
          clarification and support.
          <br /> <br />
          Thanking you and looking forward to seeing you in our Zone.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
