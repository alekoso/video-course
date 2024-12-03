import CourseBenefits from "../components/main/CourseBenefits";
import CourseForYouIf from "../components/main/CourseForYouIf";
import CourseStructure from "../components/main/CourseStructure/CourseStructure";
import Hero from "../components/main/Hero";
import HowCreateContent from "../components/main/HowCreateContent";
import IfYouWantSection from "../components/main/IfYouWantSection";
import LearningIncludes from "../components/main/LearningIncludes";
import TargetAudience from "../components/main/TargetAudience";
import Tariffs from "../components/main/Tariffs";
import VideoSection from "../components/main/VideoSection";
import About from "../components/main/About";
import Pros from "../components/main/Pros";
import Reviews from "../components/main/Reviews";
import Faq from "../components/main/Faq/Faq";
import PurchaseSection from "../components/main/PurchaseSection/PurchaseSection";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <IfYouWantSection />
      <CourseBenefits />
      <CourseForYouIf />
      <TargetAudience />
      <CourseStructure />
      <Tariffs />
      <HowCreateContent />
      <LearningIncludes />
      <About />
      <Pros />
      <Reviews />
      <Faq />
      <PurchaseSection />
    </>
  );
}
