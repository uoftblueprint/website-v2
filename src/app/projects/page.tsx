"use client";
import ProjectsCardWModal from "@/projects-card/ProjectsCardWModal";
import { SimpleGrid, Stack, Title } from "@mantine/core";
import Banner from "@/components/Banner/Banner";
import "@mantine/core/styles.css";
import "@/app/projects/projects.css";
import Footer from "@/components/Footer/Footer";

export default function ProjectsPage() {
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
          cols={{ base: 1, sm: 2}}
          spacing={"xl"}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <ProjectsCardWModal
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
          <ProjectsCardWModal
            name="Homes for Heroes"
            description="A CRM application used to help organize homes for Canadian veterans."
            image={"/homes-for-heroes.jpeg"}
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
        <Title order={1} className="project-years-header">
          2022-2023
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2}}
          spacing={"xl"}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <ProjectsCardWModal
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
          <ProjectsCardWModal
            name="Homes for Heroes"
            description="A CRM application used to help organize homes for Canadian veterans."
            image={"/homes-for-heroes.jpeg"}
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
      </Stack>
      <Footer></Footer>
    </div>
  );
}
