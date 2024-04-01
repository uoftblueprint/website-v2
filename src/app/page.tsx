"use client";
import TopSection from "./home-page-top-section/TopSection.js";
import Bottomsection from "./home-page-top-section/BottomSection.js";
import ProjectCardsGrid from "./home-page-top-section/ProjectCardsGrid.js";
import ProjectsCard from "@/projects-card/ProjectsCard.js";
import HeroBanner from "@/components/Banner/HeroBanner.tsx";
import { SimpleGrid } from "@mantine/core";

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
      <ProjectCardsGrid cards_info={cards_info}></ProjectCardsGrid>
      {/* <SimpleGrid
        cols={2}
        spacing={"xl"}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        <ProjectsCard
          name="The Period Purse"
          description="A Menstrual Tracking application for iOS and Android, built by youth for youth."
          image={"/the-period-purse.jpeg"}
          hasOverlay={true}
          years={["2021-2022", "2023"]}
          projectDescription="Description"
          nonprofitDescription="Description"
          team={[
            { name: "NAME", role: "ROLE", imageSrc: "" },
            { name: "NAME1", role: "ROLE", imageSrc: "" },
            { name: "NAME2", role: "ROLE", imageSrc: "" },
            { name: "NAME3", role: "ROLE", imageSrc: "" },
            { name: "NAME4", role: "ROLE", imageSrc: "" },
            { name: "NAME5", role: "ROLE", imageSrc: "" },
            { name: "NAME6", role: "ROLE", imageSrc: "" },
          ]}
          webLink=""
          githubLink=""
        />
        <ProjectsCard
          name="The Period Purse"
          description="A Menstrual Tracking application for iOS and Android, built by youth for youth."
          image={"/the-period-purse.jpeg"}
          hasOverlay={true}
          years={["2021-2022", "2023"]}
          projectDescription="Description"
          nonprofitDescription="Description"
          team={[
            { name: "NAME", role: "ROLE", imageSrc: "" },
            { name: "NAME1", role: "ROLE", imageSrc: "" },
            { name: "NAME2", role: "ROLE", imageSrc: "" },
            { name: "NAME3", role: "ROLE", imageSrc: "" },
            { name: "NAME4", role: "ROLE", imageSrc: "" },
            { name: "NAME5", role: "ROLE", imageSrc: "" },
            { name: "NAME6", role: "ROLE", imageSrc: "" },
          ]}
          webLink=""
          githubLink=""
        />
      </SimpleGrid>
      <ProjectCardsGrid cards_info={cards_info} /> */}
    </>
  );
}
