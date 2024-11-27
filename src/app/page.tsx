"use client";
import TopSection from "./home-page-top-section/TopSection.tsx";
import BottomSection from "./home-page-top-section/BottomSection.tsx";
import ProjectCardsGrid from "./home-page-top-section/ProjectCardsGrid.tsx";
import HeroBanner from "@/components/Banner/HeroBanner";

const cards_info = [
  {
    name: "The Period Purse",
    description:
      "A Menstrual Tracking application for iOS and Android, built by youth for youth.",
    image: "/the-period-purse.jpeg",
    link: "/projects",
  },
  {
    name: "Home for Heroes",
    description:
      "A CRM application used to help organize homes for Canadian veterans.",
    image: "/homes-for-heroes.jpeg",
    link: "/projects",
  },
];

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TopSection />
      <BottomSection />
      <ProjectCardsGrid cards_info={cards_info}></ProjectCardsGrid>
    </>
  );
}
