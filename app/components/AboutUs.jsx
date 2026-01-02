import Image from "next/image";
import Link from "next/link";
import aboutLogo from "@/public/assets/aboutLogo.png";
import arrow_green from "@/public/assets/arrow_green.svg";
import socialIcons1 from "@/public/assets/socialIcons1.png";
import socialIcons2 from "@/public/assets/socialIcons2.png";
import socialIcons3 from "@/public/assets/socialIcons3.png";
import about1 from "@/public/assets/about1.jpg";

export default function AboutUs() {

   const fbIcon = 'fa-brands fa-facebook-f';
   const XIcon = 'fa-brands fa-twitter';
   const instaIcon = 'fa-brands fa-instagram';

  
  return (
    <section className="about_us px-4 2xl:px-0">
      <div className="about_us_main_div">
        {/* LEFT: Image collage */}
        <div className="mx-auto">
          <div className="relative grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden mt-[33px] mb-4 2xl:w-[308px] 2xl:h-[502px] h-[251px]">
            <Image
              src={about1}
              alt="about1"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Image 2 */}
          <div className="relative 2xl:w-[264px] 2xl:h-[264px] w-auto h-40 rounded-2xl overflow-hidden">
            <Image
              src="/assets/bg.jpg"
              alt="Image 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="relative 2xl:w-[264px] 2xl:h-[264px] w-auto h-40 rounded-2xl overflow-hidden">
            <Image
              src="/assets/about3.png"
              alt="Image 3"
              fill
              className="object-cover"
            />
          </div>

          {/* Center logo badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="">
              <Image src={aboutLogo} alt="SEZL Logo" />
            </div>
          </div>
        </div>
        </div>

        {/* RIGHT: Content */}
        <div className="flex gap-5 flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* left side content */}
          <div className="about_us_content">
            {/* Badge */}
            <span className="about_us_badge">ABOUT US</span>

            {/* Heading */}
            <h2 className="about_us_heading">
              Sirajganj Economic
              <span className="font-normal">Zone Limited (SEZL)</span>
            </h2>

            {/* Description */}
            <p className="about_us_description">
              Sirajganj Economic Zone Limited (SEZL) is at the forefront of
              industrial development, offering a strategic gateway for
              businesses to thrive. We provide a comprehensive ecosystem
              designed to foster innovation, attract investment, and support
              sustainable growth for our partners.
            </p>

            {/* CTA */}
            <Link href="#">
              <button className="arrow_btn group hover:border hover:border-[#1E552A] lg:mt-16.25 mt-6 w-28.75">
              <div className="arrow_btn_icon_bg">
                <Image src={arrow_green} alt="Arrow Right" />
              </div>
              <span>See All</span>
            </button>
            </Link>
          </div>
          {/* right side content */}
          <div>
            {/* Stats */}
            <div className="">
              <div>
                <h3 className="status_count">10+</h3>
                <p className="experience">01. Years of Experience</p>
              </div>

              <div>
                <h3 className="status_count">240+</h3>
                <p className="experience">02. Successful Projects</p>
              </div>
            </div>

            {/* Social icons (demo) */}
            <div className="social_icons">
              {/* <Image
                className="cursor-pointer"
                src={socialIcons1}
                alt="Facebook"
              /> */}
               <i className={`${fbIcon} text-black text-3xl`}></i>
               <i className={`${XIcon} text-black text-3xl`}></i>
               <i className={`${instaIcon} text-black text-3xl`}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
