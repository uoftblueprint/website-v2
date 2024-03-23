"use client";
import TopSection from "./home-page-top-section/TopSection.js";
import Bottomsection from "./home-page-top-section/BottomSection.js";
import HeroBanner from "@/components/Banner/HeroBanner.tsx";
import TeamCard from "src/team-card/TeamCard.js";

let testing = [
  { name: "Michael Jia", role: "Product Manager", profilePicture: "" },
  { name: "testing", role: "Product Manager", profilePicture: "" },
  { name: "testing", role: "Product Manager", profilePicture: "" },
  { name: "testing", role: "Product Manager", profilePicture: "" },
  { name: "testing", role: "Product Manager", profilePicture: "" },
  { name: "testing", role: "Product Manager", profilePicture: "" },
  { name: "testing", role: "Product Manager", profilePicture: "" },
];

export default function Home() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <TopSection />
      <Bottomsection />
      {/* <TeamCard title="Testing" team_members={testing}></TeamCard> */}
    </>
  );
}
