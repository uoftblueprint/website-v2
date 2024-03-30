"use client";
import TopSection from "./home-page-top-section/TopSection.js";
import Bottomsection from "./home-page-top-section/BottomSection.js";
import ProjectCardsGrid from "./home-page-top-section/ProjectCardsGrid.js";
import { ProjectsCard } from "@/projects-card/ProjectsCard.js";
import HeroBanner from "@/components/Banner/HeroBanner.tsx";

let cards_info = [
  {
    name: "The Period Purse",
    description:
      "A Menstrual Tracking application for iOS and Android, built by youth for youth.",
    image: "/the-period-purse.jpeg",
    link: "https://www.google.com/",
  },
  {
    name: "Home for Heroes",
    description:
      "A Menstrual Tracking application for iOS and Android, built by youth for youth.",
    image: "/the-period-purse.jpeg",
    link: "https://www.google.com/",
  },
];

export default function Home() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <TopSection />
      <Bottomsection />
      <ProjectCardsGrid cards_info={cards_info} />
    </>
  );
}
