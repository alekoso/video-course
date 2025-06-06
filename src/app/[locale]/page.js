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
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PCV4WQKM');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PCV4WQKM"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Hero />
      <VideoSection />
      <Reviews />
      <CourseStructure />
      <About />
      <PurchaseSection />
      <IfYouWantSection />
      <CourseBenefits />
      <CourseForYouIf />
      <TargetAudience />
      <Tariffs />
      <HowCreateContent />
      <LearningIncludes />
      <Pros />
      <Faq />
      <PurchaseSection />
    </>
  );
}
