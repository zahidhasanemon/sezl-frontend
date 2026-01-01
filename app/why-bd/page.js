import Image from "next/image";
import opportunity1 from "@/public/assets/opportunity1.png";
import opportunity2 from "@/public/assets/opportunity2.png";
import opportunity3 from "@/public/assets/opportunity3.png";
import opportunity4 from "@/public/assets/opportunity4.png";
import opportunity5 from "@/public/assets/opportunity5.png";
import opportunity6 from "@/public/assets/opportunity6.png";
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
          <HeroCommon title="Why Invest in Bangladesh" />
        </div>
        {/* unlocking secition */}
        {/* rest of the about us page content */}
        <div className="common_page_container">
          {/* services section */}
          <div className="container_main_div md:pt-11 pt-5 md:pb-15 pb-5 px-4 2xl:px-0">
            <div className="service_section_header">
              <div>
                <h2 className="service_section_title">
                  Unlocking Unprecedented <br />
                  <span className="font-light">Opportunities</span>
                </h2>
              </div>
              <div className="mt-auto">
                {/* Description */}
                <p className="about_us_description mt-3">
                  One of Asia’s fastest-growing economies with unmatched
                  investment potential.
                </p>
              </div>
            </div>
          </div>

          {/* opportunity card section */}
          <div className="overview_cards_section_div">
            {/* card 1 */}
            <div className="overview_card md:pb-24 pb-6">
              <div className="opportunity_card_img">
                <Image src={opportunity1} alt="opportunity1" />
              </div>
              <h5 className="opportunity_card_title">Continuous GDP Growth</h5>
              <p className="text-[#2D2D2D]">
                Experience one of the most consistent and high-growth economies
                in the region.
              </p>
            </div>
            {/* card 2 */}
            <div className="overview_card md:pb-24 pb-6">
              <div className="opportunity_card_img">
                <Image src={opportunity2} alt="opportunity2" />
              </div>
              <h5 className="opportunity_card_title">
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
                <Image src={opportunity3} alt="opportunity1" />
              </div>
              <h5 className="opportunity_card_title">
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
                <Image src={opportunity4} alt="opportunity1" />
              </div>
              <h5 className="opportunity_card_title">
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
                <Image src={opportunity5} alt="opportunity1" />
              </div>
              <h5 className="opportunity_card_title">
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
                <Image src={opportunity6} alt="opportunity1" />
              </div>
              <h5 className="opportunity_card_title">
                Significant Trade Agreements
              </h5>
              <p className="text-[#2D2D2D]">
                Gain duty-free access to major global markets through robust
                trade partnerships.
              </p>
            </div>
          </div>
          {/* stats section */}
          <section className="2xl:px-0 px-4 lg:mb-25 mb-5">
            <div className="relative mx-auto rounded-2xl overflow-hidden lg:h-106.5 h-auto">
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
              <div className="relative z-10 flex flex-col text-center md:gap-10 px-8 lg:py-28.5 py-6 text-white max-w-335 mx-auto justify-center">
                <h2 className="strategic_title">
                  Bangladesh by the
                  <span className="font-light"> Numbers</span>
                </h2>
                {/* Right Stats */}
                <div className="why_bd_stats">
                  <div>
                    <h3 className="why_bd_stats_number">7%+</h3>
                    <p className="about_us_stats_number_text">
                      Average GDP Growth
                    </p>
                  </div>

                  <div>
                    <h3 className="why_bd_stats_number">170M+</h3>
                    <p className="about_us_stats_number_text">
                      Population with 65% Workforce
                    </p>
                  </div>

                  <div>
                    <h3 className="why_bd_stats_number">$52B+</h3>
                    <p className="about_us_stats_number_text">Annual Exports</p>
                  </div>

                  <div>
                    <h3 className="why_bd_stats_number">100+</h3>
                    <p className="about_us_stats_number_text">
                      Countries with Trade Access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <CTAAndFooter />
    </div>
  );
}
