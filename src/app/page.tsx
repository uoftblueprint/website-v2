"use client";
import TopSection from "./home-page-top-section/TopSection.js";
import Bottomsection from "./home-page-top-section/BottomSection.js";
import HeroBanner from "@/components/Banner/HeroBanner.tsx";
import { ProjectsCard } from "src/projects-card/ProjectsCard.js";
import { Text } from "@mantine/core";

let team_data = [
  { name: "adsf", role: "asdf", profilePicture: "" },
  { name: "adsf", role: "asdf", profilePicture: "" },
  { name: "adsf", role: "asdf", profilePicture: "" },
  { name: "adsf", role: "asdf", profilePicture: "" },
];

export default function Home() {
  return (
    <div>
      {/* <ProjectsCard name="asdf" description="asdf" image=""></ProjectsCard> */}
      <HeroBanner></HeroBanner>
      <TopSection />
      <Bottomsection />
    </div>
  );
}
