import Image from "next/image";
import investor1 from "@/public/assets/investor1.png";
import investor2 from "@/public/assets/investor2.png";
import investor3 from "@/public/assets/investor3.png";
import investor4 from "@/public/assets/investor4.png";
import investor5 from "@/public/assets/investor5.png";
import investor6 from "@/public/assets/investor6.png";
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
        <div className="lg:pb-25 pb-0">
          <HeroCommon title="Incentives for Investors" />
        </div>
        {/* unlocking secition */}
        {/* rest of the about us page content */}
        <div className="common_page_container">
          {/* services section */}
          <div className="container_main_div md:pt-11 pt-5 md:pb-15 pb-5 px-4 2xl:px-0">
            <div className="service_section_header">
              <div>
                <h2 className="service_section_title">
                  Key Benefits for <br />
                  <span className="font-light">Our Partners</span>
                </h2>
              </div>
              <div className="mt-auto">
                {/* Description */}
                <p className="about_us_description mt-3">
                  Maximize your investment with attractive benefits and government-supported incentives at SEZL.
                </p>
              </div>
            </div>
          </div>

          {/* opportunity card section */}
          <div className="overview_cards_section_div">
            {/* card 1 */}
            <div className="overview_card md:pb-24 pb-6">
              <div className="opportunity_card_img">
                <Image src={investor1} alt="investor1" />
              </div>
              <h5 className="incentive_card_title">Continuous GDP Growth</h5>
              <p className="text-[#2D2D2D]">
                Experience one of the most consistent and high-growth economies
                in the region.
              </p>
            </div>
            {/* card 2 */}
            <div className="overview_card md:pb-24 pb-6">
              <div className="opportunity_card_img">
                <Image src={investor2} alt="investor2" />
              </div>
              <h5 className="incentive_card_title">
                Strategic Geographic Location
              </h5>
              <p className="text-[#2D2D2D]">
                A vital hub connecting South and Southeast Asia, offering
                unparalleled logistical advantages.
              </p>
            </div>
            {/* card 3 */}
            <div className="overview_card md:pb-24 pb-6">
              <div className="opportunity_card_img">
                <Image src={investor3} alt="investor" />
              </div>
              <h5 className="incentive_card_title">
                Cost-efficient Human Resource
              </h5>
              <p className="text-[#2D2D2D]">
                Access a large, skilled, and competitively priced workforce for
                your operations.
              </p>
            </div>
            {/* card 4 */}
            <div className="overview_card md:pb-24 pb-6">
              <div className="opportunity_card_img">
                <Image src={investor4} alt="investor" />
              </div>
              <h5 className="incentive_card_title">
                Energetic & Young Workforce
              </h5>
              <p className="text-[#2D2D2D]">
                Benefit from a demographic dividend with a median age of just 28
                years.
              </p>
            </div>
            {/* card 5 */}
            <div className="overview_card md:pb-24 pb-6">
              <div className="opportunity_card_img">
                <Image src={investor5} alt="investor" />
              </div>
              <h5 className="incentive_card_title">
                Proactive Government Initiatives
              </h5>
              <p className="text-[#2D2D2D]">
                Leverage extensive government support, including tax incentives
                and streamlined processes.
              </p>
            </div>
            {/* card 6 */}
            <div className="overview_card md:pb-24 pb-6">
              <div className="opportunity_card_img">
                <Image src={investor6} alt="investor" />
              </div>
              <h5 className="incentive_card_title">
                Significant Trade Agreements
              </h5>
              <p className="text-[#2D2D2D]">
                Gain duty-free access to major global markets through robust
                trade partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTAAndFooter />
    </div>
  );
}
