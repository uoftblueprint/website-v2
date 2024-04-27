"use client";
import Banner from "@/components/Banner/Banner";
import LogoShowCase from "@/logoShowCase/LogoShowCase.js";
import RoleGrid from "@/app/join/RoleGrid";
import WhyJoin from "@/forstudents-whyjoin/WhyJoin";
import Process from "@/forstudents-process/Process";
import FAQ from "@/for-students-FAQ/for-students-FAQ.js";
import Footer from "@/components/Footer/Footer";

export default function Join() {
  return <div>
  <Banner
    title={"For Students"}
    text={"Interested in making a change in the community around you? Want to gain experience working in a software development team? Join us!"}
  />
      <LogoShowCase></LogoShowCase>
      <RoleGrid></RoleGrid>
      <WhyJoin img={"/PlaceholderImg.png"}></WhyJoin>
      <Process applicationImg={"/PlaceholderImg.png"} applicationLink={undefined} 
      interviewImg={"/PlaceholderImg.png"} interviewLink={undefined} 
      acceptancesImg={"/PlaceholderImg.png"} acceptancesLink={undefined}></Process>
      <FAQ faq_info={[{question: "Insert Interesting Question?", 
      answer: "Blah blah blah AHHHH hello marco was here thx michelle for this."}]}></FAQ>
  <Footer></Footer>
  </div>;
}
