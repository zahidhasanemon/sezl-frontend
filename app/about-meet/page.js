import Image from "next/image";
import chairman from "@/public/assets/chairman.png";
import partner3 from "@/public/assets/partner3.png";
import partner1 from "@/public/assets/partner1.png";
import partner2 from "@/public/assets/partner2.png";
import Link from "next/link";
import Navbar from "../components/Navbar";
import CTAAndFooter from "../components/Footer";
import arrow_green from "@/public/assets/arrow_green.svg";

export default function page() {
  return (
    <div className="bg-[#F8F8F8]">
      {/* nav bar */}
      <div className="border-b border-white mb-20">
        <Navbar />
      </div>
      {/* main content */}
      <div className="">
        {/* hero secition */}
        <div className="common_hero_section mb-0">
          <h2 className="common_hero_heading">Our Development Partners</h2>
        </div>
        {/* rest of the about us page content */}
        <div className="common_page_container">
          {/* services section */}
          <div className="container_main_div md:pt-11 pt-5 md:pb-20 pb-5 px-4 2xl:px-0">
            <div className="service_section_header">
              <div>
                {/* <span className="about_us_badge uppercase">Services</span> */}
                <h2 className="service_section_title">
                  Meet Our <br />
                  <span className="font-light">Partner</span>
                </h2>
                {/* Description */}
                <p className="about_us_description mt-3 pb-0">
                  SEZL is driven by a consortium of leading national and
                  international experts, ensuring a world-class economic zone
                  built on a foundation of strength and innovation.
                </p>
              </div>
              <div>
                <Link href="#">
                  <button className="service_btn">
                    <div className="see_all_btn_icon_bg">
                      <Image src={arrow_green} alt="Arrow Right" />
                    </div>
                    <span>Contact Us</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* overview card section */}
          <div className="overview_cards_section_div">
            {/* card 1 */}
            <div className="overview_card">
              <Image src={partner1} alt="partner" className="partner_card_img"/>
              <h5 className="overview_card_title pb-2">Partner Name A</h5>
              <p className="partner_card_subtitle">Role: Lead Engineering & Construction</p>
              <p className="text-[#2D2D2D]">
                Founded with a vision to transform the industrial landscape,
                SEZL has grown into a beacon of economic development, attracting
                global investment and fostering local prosperity through
                strategic planning and execution.
              </p>
            </div>
            {/* card 2 */}
            <div className="overview_card">
              <Image src={partner2} alt="partner" className="partner_card_img"/>
              <h5 className="overview_card_title pb-2">Partner Name B</h5>
              <p className="partner_card_subtitle">Role: Financial Advisory</p>
              <p className="text-[#2D2D2D]">
                Founded with a vision to transform the industrial landscape,
                SEZL has grown into a beacon of economic development, attracting
                global investment and fostering local prosperity through
                strategic planning and execution.
              </p>
            </div>
            {/* card 3 */}
            <div className="overview_card">
              <Image src={partner3} alt="partner" className="partner_card_img"/>
              <h5 className="overview_card_title pb-2">Partner Name C</h5>
              <p className="partner_card_subtitle">Role: Infrastructure Development</p>
              <p className="text-[#2D2D2D]">
                Founded with a vision to transform the industrial landscape,
                SEZL has grown into a beacon of economic development, attracting
                global investment and fostering local prosperity through
                strategic planning and execution.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTAAndFooter />
    </div>
  );
}
