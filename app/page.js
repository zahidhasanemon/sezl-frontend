import Hero from "@components/Hero";
import AboutUs from "@components/AboutUs";
import Services from "@components/Services";
import Stats from "@components/Stats";
import WhyInvest from "@components/WhyInvest";
import Testimonials from "@components/Testimonial";
import LatestNews from "@components/LatestNews";
import FeaturedSlider from "@components/FeaturedSlider";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container_full">
      {/* hero section */}
      <Hero />
      {/* about section */}
      <AboutUs />
      {/* services section */}
      <Services />
      {/* stats section */}
      <Stats />
      {/* why invest section */}
      <WhyInvest />
      {/* testimonial section */}
      <Testimonials />
      {/* latest news section */}
      <LatestNews />
      {/* featured slider section */}
      <FeaturedSlider />
      {/* footer section */}
      <Footer />
    </div>
  );
}
