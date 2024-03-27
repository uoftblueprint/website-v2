"use client";
import { useDisclosure } from "@mantine/hooks";
import ProjectOverlay from "@/project-overlay/ProjectOverlay";
import { ProjectsCard } from "@/projects-card/ProjectsCard";
import { SimpleGrid, Stack, Title } from "@mantine/core";
import Banner from "@/components/Banner/Banner";
import "@mantine/core/styles.css";
import "@/app/projects/projects.css";

export default function ProjectsPage() {
  const [isOpened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Banner
        title="Projects"
        text="Since our founding in 2020, we’ve had the pleasure to work with X number of non-profits!"
        button={{ text: "Contact us", link: "" }}
      />
      <Stack className="projects-page-main" gap="lg">
        <Title order={1} className="project-years-header">
          2023-2024
        </Title>
        <SimpleGrid
          cols={2}
          spacing={"xl"}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <ProjectsCard
            name="The Period Purse"
            description="A Menstrual Tracking application for iOS and Android, built by youth for youth."
            image={"/the-period-purse.jpeg"}
            onClick={open}
          />
          <ProjectsCard
            name="The Period Purse"
            description="A Menstrual Tracking application for iOS and Android, built by youth for youth."
            image={"/the-period-purse.jpeg"}
            onClick={open}
          />
        </SimpleGrid>
        <Title order={1} className="project-years-header">
          2022-2023
        </Title>
        <SimpleGrid
          cols={2}
          spacing={"xl"}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <ProjectsCard
            name="The Period Purse"
            description="A Menstrual Tracking application for iOS and Android, built by youth for youth."
            image={"/the-period-purse.jpeg"}
            onClick={open}
          />
          <ProjectsCard
            name="The Period Purse"
            description="A Menstrual Tracking application for iOS and Android, built by youth for youth."
            image={"/the-period-purse.jpeg"}
            onClick={open}
          />
        </SimpleGrid>

        <ProjectOverlay
          name="Project Name"
          years={["2021-2022", "2023"]}
          projectDescription="Description"
          nonprofitDescription="Description"
          imageSrc="/the-period-purse.jpeg"
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
          isOpened={isOpened}
          closeModal={close}
        />
      </Stack>
    </div>
  );
}
