import IndustrySolutions from "@/components/global/heroSection";
import SapphireBanner from "@/components/global/sapphireBanner";
import IndustryInsights from "@/components/static/industryInsights";
import InnovationSection from "@/components/static/innovationSection";
import ScrollNav from "@/components/static/scrollNav";
import Solutions from "@/components/static/solutions";

export default function Home() {
  return (
    <div>
      <ScrollNav />
      <div className="container max-w-7xl py-8 mx-auto">
        <div id="industry-solutions">
          <IndustrySolutions />
        </div>
        <div >
          <SapphireBanner />
        </div>
        <div id="solutions">
          <Solutions />
        </div>
        <div id="innovation-section">
          <InnovationSection />
        </div>
        <div id="industry-insights">
          <IndustryInsights />
        </div>
      </div>
    </div>
  );
}
