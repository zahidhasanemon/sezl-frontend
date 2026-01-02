import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import download from "@/public/assets/download.png";
import AboutUs from "./components/AboutUs";
import arrow_green from "@/public/assets/arrow_green.svg";
import dean from "@/public/assets/dean.png";
import kerala from "@/public/assets/kerala.png";
import nitech from "@/public/assets/nitech.png";
import root from "@/public/assets/root.png";
import pad from "@/public/assets/pad.png";
import service1 from "@/public/assets/service1.png";
import service2 from "@/public/assets/service2.png";
import service3 from "@/public/assets/service3.png";
import service4 from "@/public/assets/service4.png";
import service5 from "@/public/assets/service5.png";
import bg2 from "@/public/assets/bg2.jpg";
import bg from "@/public/assets/bg.jpg";
import why1 from "@/public/assets/why1.png";
import why2 from "@/public/assets/why2.png";
import why3 from "@/public/assets/why3.png";
import why4 from "@/public/assets/why4.png";
import news1 from "@/public/assets/news1.png";
import news2 from "@/public/assets/news2.png";
import news3 from "@/public/assets/news3.png";
import Testimonials from "./components/Testimonial";
import FeaturedSlider from "./components/FeaturedSlider";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="container_full">
      <div className="container_inner rounded-[20px] overflow-hidden">
        {/* hero section */}
        <div className="relative lg:min-h-[900px] min-h-[700px] rounded-[20px] overflow-hidden">
          {/* Flipped background ONLY */}
          <div className="absolute inset-0 bg-[url('/assets/bg.jpg')] bg-cover bg-center -scale-x-100" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Normal content (NOT flipped) */}
          <Navbar />

          <div className="relative xl:pt-[231px] pt-[150px] xl:pl-[295px] pl-10 max-w-[914px]">
            <h1 className="text-white md:text-[64px] text-3xl font-light">
              <span className="font-bold">Pioneering Economic</span> Growth in
              the Heart of Bangladesh
            </h1>

            <p className="text-white pt-6 pb-7">
              Discover unparalleled investment opportunities at Sirajganj
              Economic Zone, where strategic location meets world-class
              infrastructure and sustainable development.
            </p>

            <Link href="#" className="arrow_btn max-w-55.5 group">
              <div className="arrow_btn_icon_bg">
                <Image src={download} alt="Arrow Right" />
              </div>
              <span>Download Brochure</span>
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 right-0 -mt-10 bg-white/10 backdrop-blur rounded-b-[20px] py-6 px-6">
            <div className="slider w-full overflow-hidden">
              <div className="flex items-center lg:gap-[122px] gap-10 overflow-x-auto scrollbar-hide lg:overflow-visible lg:justify-center slider-track slider-animation">
                <div className="slide">
                  <Image
                    src={dean}
                    alt="dean"
                    className="min-w-[99px] h-[75px] object-contain"
                  />
                </div>
                <div className="slide">
                  <Image
                    src={kerala}
                    alt="kerala"
                    className="min-w-[99px] h-[75px] object-contain"
                  />
                </div>
                <div className="slide">
                  <Image
                    src={nitech}
                    alt="nitech"
                    className="min-w-[99px] h-[75px] object-contain"
                  />
                </div>
                <div className="slide">
                  <Image
                    src={root}
                    alt="root"
                    className="min-w-[99px] h-[75px] object-contain"
                  />
                </div>
                <div className="slide">
                  <Image
                    src={pad}
                    alt="pad"
                    className="min-w-[99px] h-[75px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="absolute bottom-0 left-0 right-0 -mt-10 bg-white/10 backdrop-blur rounded-b-[20px] py-6 px-6">
            <div className="flex items-center lg:gap-[122px] gap-10 overflow-x-auto scrollbar-hide lg:overflow-visible lg:justify-center">
              <Image
                src={dean}
                alt="dean"
                className="min-w-[99px] h-[75px] object-contain"
              />
              <Image
                src={kerala}
                alt="kerala"
                className="min-w-[99px] h-[75px] object-contain"
              />
              <Image
                src={nitech}
                alt="nitech"
                className="min-w-[99px] h-[75px] object-contain"
              />
              <Image
                src={root}
                alt="root"
                className="min-w-[99px] h-[75px] object-contain"
              />
              <Image
                src={pad}
                alt="pad"
                className="min-w-[99px] h-[75px] object-contain"
              />
            </div>
          </div> */}
        </div>
      </div>
      {/* about section */}
      <AboutUs />
      {/* services section */}
      <div className="container_main_div md:pt-25 pt-5 md:pb-32 pb-5 px-4 2xl:px-0">
        <div className="service_section_header md:pb-16.25 pb-4">
          <div>
            <div className="about_us_badge uppercase">Services</div>
            <h2 className="service_section_title">
              Our Core <span className="font-light">Services</span>
            </h2>
            {/* Description */}
            <p className="about_us_description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              tex
            </p>
          </div>
          <div className="mt-auto">
            <Link
              href="#"
              className="arrow_btn group hover:border hover:border-[#1E552A] w-50.5 mt-5 lg:mt-0"
            >
              <div className="arrow_btn_icon_bg">
                <Image src={arrow_green} alt="Arrow Right" />
              </div>
              <span>Check All Services</span>
            </Link>
          </div>
        </div>
        <section className="relative bg-white overflow-hidden mt-6 lg:mt-0">
          {/* Watermark text */}
          <h2 className="absolute inset-0 flex items-center justify-center text-[110px] font-bold text-green-800/5 select-none">
            SEZ Core Services
          </h2>

          {/* Dotted curved lines */}
          <svg
            className="absolute inset-0 w-full h-full lg:block hidden"
            viewBox="0 0 1000 400"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M200 120 Q350 500 500 120"
              stroke="#2F7D32"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
            <path
              d="M500 120 Q650 500 800 120"
              stroke="#2F7D32"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
          </svg>

          {/* Service circles */}
          <div className="relative max-w-[1340px] mx-auto grid lg:grid-cols-6 lg:gap-y-24 gap-y-6 place-items-center ">
            {/* Top Left */}
            <div className="service_circle col-span-2">
              <Image
                src={service1}
                alt="Legal service"
                width={80}
                height={80}
              />
              <p className="service_circle_title">Legal service</p>
            </div>

            {/* Top Center */}
            <div className="service_circle col-span-2">
              <Image
                src={service2}
                alt="Manufacturing service"
                width={80}
                height={80}
              />
              <p className="service_circle_title">Manufacturing service</p>
            </div>

            {/* Top Right */}
            <div className="service_circle col-span-2">
              <Image
                src={service3}
                alt="Administrative service"
                width={80}
                height={80}
              />
              <p className="service_circle_title">Administrative service</p>
            </div>

            {/* Empty spacer */}
            <div className="lg:block hidden" />

            {/* Bottom Left */}
            <div className="service_circle col-span-2">
              <Image
                src={service4}
                alt="Human Resource"
                width={80}
                height={80}
              />
              <p className="service_circle_title">Human Resource</p>
            </div>

            {/* Bottom Right */}
            <div className="service_circle col-span-2">
              <Image
                src={service5}
                alt="Construction service"
                width={80}
                height={80}
              />
              <p className="service_circle_title">Construction service</p>
            </div>
          </div>
        </section>
      </div>
      {/* stats section */}
      <section className="px-4">
        <div className="relative mx-auto rounded-2xl overflow-hidden">
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
          <div className="relative z-10 flex md:gap-10 gap-6 px-8 lg:py-[114px] py-6 text-white max-w-[1340px] mx-auto justify-between flex-col lg:flex-row">
            {/* Left Content */}
            <div className="flex items-center">
              <h2 className="text-3xl lg:text-4xl font-semibold leading-snug max-w-md">
                Lorem Ipsum is simply <br />
                dummy text of the <br />
                <span className="font-normal">printing</span>
              </h2>
            </div>

            {/* Right Stats */}
            <div className="flex flex-col lg:gap-[70px] gap-6">
              <div>
                <h3 className="stats_title">1,041</h3>
                <p className="stats_subtitle">Acres of Land</p>
              </div>

              <div>
                <h3 className="stats_title">300k+</h3>
                <p className="stats_subtitle">Skilled Workforce</p>
              </div>

              <div>
                <h3 className="stats_title">Prime</h3>
                <p className="stats_subtitle">Connectivity Hub</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why invest section */}
      <div>
        <section className="py-20 bg-[#F8F8F8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: Header, Image and Description */}
              <div className="space-y-8">
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
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={bg}
                    alt="Industrial landscape in Bangladesh"
                    className="w-full h-[350px] md:h-[440px] object-cover"
                    loading="lazy"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/50 shadow-xl">
                      <svg
                        className="w-10 h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Cards */}
              <div className="space-y-6 flex flex-col items-end">
                {/* Card 1 */}
                <div className="why_card bg-[#1E552A]">
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
                </div>
                {/* Card 2 */}
                <div className="why_card bg-white max-w-[512px]">
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
                </div>
                {/* Card 3 */}
                <div className="why_card bg-white">
                  <div className="why_card_icon_bg">
                    <Image src={why3} alt="Why Invest Icon" className="" />
                  </div>
                  <div>
                    <h3 className="why_card_title text-[#1E552A]">
                      Cost-efficient Human Resource
                    </h3>
                    <p className="text-[#2D2D2D]">
                      Compared to the manpower of other industrially enriched
                      countries, managing Bangladesh&apos;s workforce is much
                      more cost-effective.
                    </p>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="why_card bg-white max-w-[512px]">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* testimonial section */}
      <Testimonials />
      {/* latest news section */}
      <div className="bg-[#F8F8F8]">
        <div className="container_main_div md:pt-18.75 pt-5 md:pb-26.25 pb-5 px-4 2xl:px-0">
          <div className="service_section_header md:pb-8 pb-6">
            <div>
              <span className="about_us_badge uppercase">Insights</span>
              <h2 className="service_section_title">
                Latest News & <br />{" "}
                <span className="font-light">Insights</span>
              </h2>
              {/* Description */}
              <p className="about_us_description mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make.
              </p>
            </div>
            <div className="mt-auto">
              <Link href="#">
                <button className="arrow_btn group hover:border hover:border-[#1E552A] lg:mt-16.25 mt-6 w-50">
                  <div className="arrow_btn_icon_bg">
                    <Image src={arrow_green} alt="Arrow Right" />
                  </div>
                  <span>Check All Insights</span>
                </button>
              </Link>
            </div>
          </div>
          {/* card div */}
          <div className="news_cards_div">
            {/* card 1 */}
            <div className="news_card_main_div">
              <Image src={news1} alt="News 1" className="news_card_img" />
              <span className="news_card_header">ECONOMY</span>
              <h4 className="news_card_title">
                SEZL Signs Landmark Deal with Global Textile Manufacturer
              </h4>
              <p className="news_card_date">Oct 26, 2023</p>
            </div>
            {/* card 2 */}
            <div className="news_card_main_div">
              <Image src={news2} alt="News 2" className="news_card_img" />
              <span className="news_card_header">ECONOMY</span>
              <h4 className="news_card_title">
                The Future of Sustainable Industrialization in Bangladesh
              </h4>
              <p className="news_card_date">Oct 26, 2023</p>
            </div>
            {/* card 3 */}
            <div className="news_card_main_div">
              <Image src={news3} alt="News 3" className="news_card_img" />
              <span className="news_card_header">ECONOMY</span>
              <h4 className="news_card_title">
                SEZL Signs Landmark Deal with Global Textile Manufacturer
              </h4>
              <p className="news_card_date">Oct 26, 2023</p>
            </div>
          </div>
        </div>
      </div>
      {/* featured slider section */}
      <FeaturedSlider />
      {/* footer section */}
      <Footer />
    </div>
  );
}
