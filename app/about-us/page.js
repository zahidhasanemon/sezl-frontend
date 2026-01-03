import Navbar from "@components/Navbar";
import HeroCommon from "@components/HeroCommon";
import CTAAndFooter from "@components/Footer";
import ChairmanMessage from "@components/ChairmanMessage";
import OverviewSection from "@components/OverviewSection";
import OverviewCards from "@components/OverviewCards";
import StatsSection from "@components/StatsSection";
import HistorySection from "@components/HistorySection";

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
        <div className="md:mb-29 mb-6">
          <HeroCommon title="About us" />
        </div>
        {/* rest of the about us page content */}
        <section className="common_page_container">
          {/* chairman message content */}
          <ChairmanMessage />
          {/* overview section */}
          <OverviewSection />
          {/* overview card section */}
          <OverviewCards />
        </section>
        {/* stats section */}
        <StatsSection />
        {/* History section */}
        <HistorySection />
      </div>
      <CTAAndFooter />
    </div>
  );
}
