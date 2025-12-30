import Image from "next/image";
import Link from "next/link";
import arrow_green from "@/public/assets/arrow_green.svg";
import message from "@/public/assets/message.png";
import footerlogo from "@/public/assets/footerlogo.png";
import footer1 from "@/public/assets/footer1.png";
import footer2 from "@/public/assets/footer2.png";
import footer3 from "@/public/assets/footer3.png";
import footer4 from "@/public/assets/footer4.png";
import footer5 from "@/public/assets/footer5.png";
import footer6 from "@/public/assets/footer6.png";
import footer_arrow from "@/public/assets/footer_arrow.png";

export default function CTAAndFooter() {
  return (
    <footer className="w-full">
      {/* CTA SECTION */}
      <section className="cta_section">
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
          <h2 className="cta_heading">Ready to Explore Your Next Big</h2>
          <p className="cta_heading2">Opportunity?</p>

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
      </section>

      {/* NEWSLETTER BAR */}
      <section className="newsletter_bar">
        <div className="newsletter_contents">
          <p className="newslegger_text">Subscribe to our newsletter!</p>

          <div className="newsletter_input_div">
            <input
              type="email"
              placeholder="Type your email address"
              className="newsletter_input"
            />
            <button className="newsletter_btn">
              <Image src={message} alt="message" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-[#044512] text-white pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* LOGO */}
          <div className="md:block flex items-center justify-center">
            <Image
              src={footerlogo} // change later
              alt="SEZL Logo"
            />
          </div>

          {/* ADDRESS */}
          <div>
            <h4 className="font-semibold mb-3">Our Address</h4>
            <p>
              123 Investment Lane, Sirajganj,
              <br />
              Bangladesh
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-3">Contact Us</h4>
            <p className="footer_contact_items">
              <Image src={footer1} alt="footer1" />
              <span> +880 123 456 7890</span>
            </p>
            <p className="footer_contact_items">
              <Image src={footer2} alt="footer2" />
              <span> info@sezl.gov.bd</span>
            </p>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-3">Social Links</h4>
            <div className="flex gap-1.5">
              <div className="footer_social_icons">
                <Image src={footer3} alt="footer3" />
              </div>
              <div className="footer_social_icons">
                <Image src={footer4} alt="footer4" />
              </div>
              <div className="footer_social_icons">
                <Image src={footer5} alt="footer5" />
              </div>
              <div className="footer_social_icons">
                <Image src={footer6} alt="footer6" />
              </div>
            </div>
          </div>
          
        </div>
        {/* BOTTOM */}
          <div className="text-[10px] lg:flex max-w-7xl mx-auto xl:gap-10 mt-5 px-4">
            <span className="lg:w-[400px] mx-4 md:mx-0 flex justify-center md:justify-start">
              © 2024 Sirajganj Economic Zone Ltd. All rights reserved.
            </span>
            <div className="border-t-[0.5px] border-white max-w-[937px] flex justify-start md:gap-8 gap-2 w-full mt-2 md:flex-row flex-col pt-2">
                <div className="footer_bottom_arrow">
                    <span>About us</span>
                    <Image src={footer_arrow} alt="footer_arrow" className="h-[11px] w-[11px]"/>
                </div>
                <div className="footer_bottom_arrow">
                    <span>Our services</span>
                    <Image src={footer_arrow} alt="footer_arrow" className="h-[11px] w-[11px]"/>
                </div>
                <div className="footer_bottom_arrow">
                    <span>Teams</span>
                    <Image src={footer_arrow} alt="footer_arrow" className="h-[11px] w-[11px]"/>
                </div>
                <div className="footer_bottom_arrow">
                    <span>Awards</span>
                    <Image src={footer_arrow} alt="footer_arrow" className="h-[11px] w-[11px]"/>
                </div>
                <div className="footer_bottom_arrow">
                    <span>Contact</span>
                    <Image src={footer_arrow} alt="footer_arrow" className="h-[11px] w-[11px]"/>
                </div>
            </div>
          </div>
      </section>
    </footer>
  );
}
