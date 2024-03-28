"use client";
import TopSection from "./home-page-top-section/TopSection.js";
import Bottomsection from "./home-page-top-section/BottomSection.js";
import HeroBanner from "@/components/Banner/HeroBanner.tsx";
import Footer from "src/components/Footer/Footer.js";
import { ChaptersCard } from "src/chapters-card/ChaptersCard.tsx";
import { Text } from "@mantine/core";


export default function Home() {
  return (
    <div>
      {/* <ProjectsCard name="asdf" description="asdf" image=""></ProjectsCard> */}
      <HeroBanner></HeroBanner>
      <TopSection />
      <Bottomsection />
      {/* <ChaptersCard name="adsf" description="asdf" link=""></ChaptersCard> */}
      {/* <Footer></Footer> */}
    </div>
  );
}