import Image from "next/image";
import director1 from "@/public/assets/director1.png";
import director2 from "@/public/assets/director2.png";
import director3 from "@/public/assets/director3.png";
import director4 from "@/public/assets/director4.png";
import arrow_link from "@/public/assets/arrow_link.png";
import leadership from "@/public/assets/leadership.png";
import Link from "next/link";
import Navbar from "../components/Navbar";
import CTAAndFooter from "../components/Footer";
import arrow_green from "@/public/assets/arrow_green.svg";
import bg2 from "@/public/assets/bg2.jpg";
import HeroCommon from "../components/HeroCommon";

export default function page() {
  return (
    <div className="bg-[#F8F8F8]">
      {/* nav bar */}
      <div className="border-b border-white mb-20">
        <Navbar />
      </div>
      {/* main content */}
      <div>
        {/* hero secition */}
        <HeroCommon title="Management Team" />
        {/* rest of the about us page content */}
        <div className="common_page_container">
          {/* services section */}
          <div className="container_main_div md:pt-11 pt-5 md:pb-15 pb-5 px-4 2xl:px-0">
            <div className="service_section_header">
              <div>
                <span className="about_us_badge uppercase">Directors Team</span>
                <h2 className="service_section_title">
                  Your Financial Success <br />
                  <span className="font-light">
                    Starts With the Right People
                  </span>
                </h2>
              </div>
              <div className="mt-auto">
                {/* Description */}
                <p className="about_us_description mt-3">
                  SEZL is guided by a strong leadership consortium with a
                  strategic vision for sustainable industrial development and
                  investor success.
                </p>
              </div>
            </div>
          </div>

          {/* director card section */}
          <div className="director_card_grid">
            {/* card 1 */}
            <div className="director_card_div">
              <Image
                src={director1}
                alt="director1"
                className="director_card_img"
              />
              <div className="director_card_content">
                <div className="">
                  <h5 className="director_card_title">Ms. Nadia Chowdhury</h5>
                  <p className="director_card_subtitle">Director, Operations</p>
                </div>
                <Image
                  src={arrow_link}
                  alt="arrow_link"
                  className="director_card_link_img"
                />
              </div>
            </div>
            {/* card 2 */}
            <div className="director_card_div">
              <Image
                src={director2}
                alt="director2"
                className="director_card_img"
              />
              <div className="director_card_content">
                <div className="">
                  <h5 className="director_card_title">Ms. Nadia Chowdhury</h5>
                  <p className="director_card_subtitle">Director, Operations</p>
                </div>
                <Image
                  src={arrow_link}
                  alt="arrow_link"
                  className="director_card_link_img"
                />
              </div>
            </div>
            {/* card 3 */}
            <div className="director_card_div">
              <Image
                src={director3}
                alt="director3"
                className="director_card_img"
              />
              <div className="director_card_content">
                <div className="">
                  <h5 className="director_card_title">Ms. Nadia Chowdhury</h5>
                  <p className="director_card_subtitle">Director, Operations</p>
                </div>
                <Image
                  src={arrow_link}
                  alt="arrow_link"
                  className="director_card_link_img"
                />
              </div>
            </div>
            {/* card 4 */}
            <div className="director_card_div">
              <Image
                src={director4}
                alt="director4"
                className="director_card_img"
              />
              <div className="director_card_content">
                <div className="">
                  <h5 className="director_card_title">Ms. Nadia Chowdhury</h5>
                  <p className="director_card_subtitle">Director, Operations</p>
                </div>
                <Image
                  src={arrow_link}
                  alt="arrow_link"
                  className="director_card_link_img"
                />
              </div>
            </div>
            {/* card 5 */}
            <div className="director_card_div">
              <Image
                src={director3}
                alt="director1"
                className="director_card_img"
              />
              <div className="director_card_content">
                <div className="">
                  <h5 className="director_card_title">Ms. Nadia Chowdhury</h5>
                  <p className="director_card_subtitle">Director, Operations</p>
                </div>
                <Image
                  src={arrow_link}
                  alt="arrow_link"
                  className="director_card_link_img"
                />
              </div>
            </div>
            {/* card 6 */}
            <div className="director_card_div">
              <Image
                src={director1}
                alt="director1"
                className="director_card_img"
              />
              <div className="director_card_content">
                <div className="">
                  <h5 className="director_card_title">Ms. Nadia Chowdhury</h5>
                  <p className="director_card_subtitle">Director, Operations</p>
                </div>
                <Image
                  src={arrow_link}
                  alt="arrow_link"
                  className="director_card_link_img"
                />
              </div>
            </div>
            {/* card 7 */}
            <div className="director_card_div">
              <Image
                src={director4}
                alt="director1"
                className="director_card_img"
              />
              <div className="director_card_content">
                <div className="">
                  <h5 className="director_card_title">Ms. Nadia Chowdhury</h5>
                  <p className="director_card_subtitle">Director, Operations</p>
                </div>
                <Image
                  src={arrow_link}
                  alt="arrow_link"
                  className="director_card_link_img"
                />
              </div>
            </div>
            {/* card 8 */}
            <div className="director_card_div">
              <Image
                src={director2}
                alt="director1"
                className="director_card_img"
              />
              <div className="director_card_content">
                <div className="">
                  <h5 className="director_card_title">Ms. Nadia Chowdhury</h5>
                  <p className="director_card_subtitle">Director, Operations</p>
                </div>
                <Image
                  src={arrow_link}
                  alt="arrow_link"
                  className="director_card_link_img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Strategic section */}
        <section className="px-4 mb-5">
          <div className="relative mx-auto rounded-2xl overflow-hidden lg:h-87.5 h-auto">
            {/* Background Image */}
            <Image
              src={bg2}
              alt="Background"
              fill
              className="object-cover"
              priority
            />

            {/* Color Overlay */}
            <div className="absolute inset-0 bg-[#1E552ACC]" />

            {/* Content */}
            <div className="about_us_stats_contents md:py-12.5 py-7">
              {/* Right Stats */}
              <div className="text-center text-white max-w-169.25">
                <h2 className="strategic_title">
                  Learn More About Our <br />
                  <span className="font-light"> Strategic Alliances</span>
                </h2>
                <p>
                  Discover the partnerships that drive our success and create
                  unparalleled opportunities for growth and innovation.
                </p>
                <div className="cta_btn_div">
                  <Link href="#">
                    <button className="service_btn bg-white">
                      <div className="see_all_btn_icon_bg bg-[#2ECC71]">
                        <Image src={arrow_green} alt="Arrow Right" />
                      </div>
                      <span>Schedule Your Free Consultation</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Leadership secition */}
        <div className="leadership_section">
          <div className="leadership_contents">
            <Image src={leadership} alt="leadership" />
            <div>
              <h4 className="leadership_title">Our Leadership Philosophy</h4>
              <p className="text-[#2D2D2D]">
                Our board is united by a commitment to fostering robust
                industrial development through sustainable practices, ethical
                governance, and a steadfast focus on creating long-term value
                and confidence for our investors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTAAndFooter />
    </div>
  );
}
