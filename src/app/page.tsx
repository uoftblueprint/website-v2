"use client";
import TopSection from "./home-page-top-section/TopSection.js";
import Bottomsection from "./home-page-top-section/BottomSection.js"
import HeroBanner from "@/components/Banner/HeroBanner.jsx";


export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <TopSection/>
      <Bottomsection/>
    </div>
  );
}