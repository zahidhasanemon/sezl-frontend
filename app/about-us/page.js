import Image from "next/image";
import chairman from "@/public/assets/chairman.png";
import aboutLogo from "@/public/assets/aboutLogo.png";
import about1 from "@/public/assets/about1.jpg";
import about3 from "@/public/assets/about3.png";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HeroCommon from "../components/HeroCommon";
import CTAAndFooter from "../components/Footer";
import bg2 from "@/public/assets/bg2.jpg";

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
        <div className="md:mb-29 mb-6">
          <HeroCommon title="About us" />
        </div>
        {/* rest of the about us page content */}
        <div className="common_page_container">
          {/* chairman message content */}
          <div className="about_us_chairman_section">
            <div>
              <div className="hover-3d">
                {/* content */}
                <figure className="">
                  <Image
                    src={chairman}
                    alt="chairman"
                    className="chairman_image"
                  />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <h4 className="chairman_name">A Matin Chowdhury</h4>
              <h6 className="chairman_position">Chairman</h6>
              <p className="chairman_company_name">
                Sirajganj Economic Zone Ltd
              </p>
            </div>
            <div className="max-w-199">
              {/* Heading */}
              <h2 className="about_us_heading max-w-156.5 mb-6">
                Chairman’s
                <span className="font-normal"> Welcome Message</span>
              </h2>
              <p className="chairman_message_text">
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
              </p>
            </div>
          </div>
          {/* overview section */}
          <div className="overview_section_div">
            <div className="2xl:max-w-177.75 lg:max-w-130">
              <h2 className="about_us_heading 2xl:max-w-156.5 lg:max-w-130 mb-6">
                Overview of Sirajganj
                <span className="font-normal">
                  {" "}
                  Economic Zone Limited (SEZL)
                </span>
              </h2>
              <p className="zone_text">
                Sirajganj Economic Zone Limited is the largest Economic Zone to
                become the driving force of sustainable development in
                Bangladesh. The project will play an indispensable role in
                generating a wide range of employment opportunities as well as
                production activities in the Northern part of Bangladesh. It has
                got all the potential to contribute to the country’s industrial
                development.
              </p>
              <h6 className="key_points_title">Key points of SEZL:</h6>
              <ul className="list-disc">
                <li className="key_points_list_item">
                  This is the largest & well-planned private economic zone
                </li>
                <li className="key_points_list_item">
                  It’s located in a well-populated area and thus local
                  employment opportunity can be created
                </li>
                <li className="key_points_list_item">
                  It confirms lucrative location which is important for
                  potential investors
                </li>
                <li className="key_points_list_item">
                  It ensures strong communication network
                </li>
                <li className="key_points_list_item">
                  It upholds highest level of services
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src={about1}
                alt="about1"
                className="lg:h-132.5 w-132.5 object-cover rounded-[10px]"
              />
              <Image
                src={aboutLogo}
                alt="aboutLogo"
                className="absolute -bottom-14 -left-16.25 lg:block hidden"
              />
            </div>
          </div>
          {/* overview card section */}
          <div className="overview_cards_section_div">
            {/* card 1 */}
            <div className="overview_card">
              <div className="overview_card_icon_bg"></div>
              <h5 className="overview_card_title">Our History</h5>
              <p className="text-[#2D2D2D]">
                Founded with a vision to transform the industrial landscape,
                SEZL has grown into a beacon of economic development, attracting
                global investment and fostering local prosperity through
                strategic planning and execution.
              </p>
            </div>
            {/* card 2 */}
            <div className="overview_card">
              <div className="overview_card_icon_bg"></div>
              <h5 className="overview_card_title">Mission & Vision</h5>
              <p className="text-[#2D2D2D]">
                Founded with a vision to transform the industrial landscape,
                SEZL has grown into a beacon of economic development, attracting
                global investment and fostering local prosperity through
                strategic planning and execution.
              </p>
            </div>
            {/* card 3 */}
            <div className="overview_card">
              <div className="overview_card_icon_bg"></div>
              <h5 className="overview_card_title">Core Services</h5>
              <p className="text-[#2D2D2D]">
                Founded with a vision to transform the industrial landscape,
                SEZL has grown into a beacon of economic development, attracting
                global investment and fostering local prosperity through
                strategic planning and execution.
              </p>
            </div>
          </div>
        </div>
        {/* stats section */}
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
            <div className="about_us_stats_contents">
              {/* Right Stats */}
              <div className="about_us_stats_grid">
                <div>
                  <h3 className="about_us_stats_number">1,041</h3>
                  <p className="about_us_stats_number_text">Acres of Land</p>
                </div>

                <div>
                  <h3 className="about_us_stats_number">300k+</h3>
                  <p className="about_us_stats_number_text">
                    Skilled Workforce
                  </p>
                </div>

                <div>
                  <h3 className="about_us_stats_number">Prime</h3>
                  <p className="about_us_stats_number_text">Connectivity Hub</p>
                </div>

                <div>
                  <h3 className="about_us_stats_number">$2B+</h3>
                  <p className="about_us_stats_number_text">Total Investment</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* History section */}
        <section className="history_section">
          <div className="history_inner_div">
            {/* TOP IMAGE */}
            <div className="history_top_img">
              <Image
                src={about3}
                alt="SEZ History"
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="history_contacts">
              {/* TITLE */}
              <h2 className="history_contact_title">Brief History of SEZ</h2>

              {/* TIMELINE */}
              <div className="history_timeline">
                {/* Line */}
                <div className="absolute left-0 right-0 top-16.5 h-px bg-white/30" />

                {["2016", "2017", "2018", "2019"].map((year) => (
                  <div key={year} className="history_timeline_year">
                    <span className="history_timeline_year_single">{year}</span>
                    <span className="history_timeline_dot" />
                  </div>
                ))}
              </div>

              {/* CARDS */}
              <div className="history_card_grid">
                <div className="history_card_div">
                  <h4 className="history_card_title">Government approval</h4>
                  <p className="history_card_text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s
                  </p>
                </div>
                <div className="history_card_div">
                  <h4 className="history_card_title">
                    License as Developer and Operator
                  </h4>
                  <p className="history_card_text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="history_card_div">
                  <h4 className="history_card_title">Land handed over</h4>
                  <p className="history_card_text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="history_card_div">
                  <h4 className="history_card_title">Development starts</h4>
                  <p className="history_card_text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CTAAndFooter />
    </div>
  );
}
