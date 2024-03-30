"use client";
import TopSection from "./home-page-top-section/TopSection.js";
import Bottomsection from "./home-page-top-section/BottomSection.js";
import ProjectCardsGrid from "./home-page-top-section/ProjectCardsGrid.js";

let cards_info = [
  {
    name: "The Period Purse",
    description:
      "A Menstrual Tracking application for iOS and Android, built by youth for youth.",
    image: "/the-period-purse.jpeg",
  },
  {
    name: "Home for Heroes",
    description:
      "A Menstrual Tracking application for iOS and Android, built by youth for youth.",
    image: "/the-period-purse.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <TopSection />
      <Bottomsection />
      <ProjectCardsGrid cards_info={cards_info} />
    </>
  );
}
