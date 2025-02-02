"use client";
import ProjectsCardWModal from "@/projects-card/ProjectsCardWModal";
import { SimpleGrid, Stack, Title } from "@mantine/core";
import Banner from "@/components/Banner/Banner";
import "@mantine/core/styles.css";
import "@/app/projects/projects.css";

export default function ProjectsPage() {
  return (
    <div>
      <Banner
        title="Projects"
        text="Since our founding in 2020, we’ve had the pleasure to work with X number of non-profits!"
        button={{ text: "Contact us", link: "/for-nonprofits" }}
      />
      <Stack className="projects-page-main" gap="lg">
        {/* ************** */}
        {/* YEAR 2024-2025 */}
        {/* ************** */}
        <Title order={1} className="project-years-header">
          2024-2025
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={"xl"}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <ProjectsCardWModal
            name="The Centre for Dreams"
            description="A centralized mobile application to send announcements, track absences, schedule events, and have discussions."
            image={"projects/centre-for-dreams.jpg"}
            hasOverlay={true}
            years={["2023-2025"]}
            projectDescription="We are building a centralized mobile application to send announcements, track absences, schedule events, and have discussions."
            nonprofitDescription="The Centre for Dreams works to integrate those with disabilities back into the society so that they are productive, independent, and respected members of the society. They provide services for adults with developmental disability through educational programs and social skills training (day care programs)."
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://www.centrefordreams.ca/"
            githubLink="https://github.com/uoftblueprint/centre-for-dreams"
          />
          <ProjectsCardWModal
            name="The Period Purse"
            description="A Menstrual Tracking application for iOS and Android, built by youth for youth."
            image={"projects/the-period-purse.jpeg"}
            hasOverlay={true}
            years={["2021-2023", "2024-2025"]}
            projectDescription="We are maintaining a cross-platform menstrual tracking application for iOS and Android."
            nonprofitDescription="The Period Purse strives to achieve menstrual equity by providing people who menstruate with access to free menstrual products, and to reduce the stigma surrounding periods through public education and advocacy."
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://www.theperiodpurse.com/"
            githubLink="https://github.com/uoftblueprint/the-period-purse-ios"
          />
          <ProjectsCardWModal
            name="Toronto Community Employment Services"
            description="A public-facing job board where applicants can find jobs to apply for."
            image={"projects/tces2.jpg"}
            hasOverlay={true}
            years={["2022-2025"]}
            projectDescription="We are making a public-facing job board where applicants can find jobs to apply for. TCES can create job postings as well as filter through job applications and update the status of job applications."
            nonprofitDescription="Toronto Community Employment Services (TCES) is a non-profit charitable organization offering no cost employment services, such as skill assessments, resume building, career counseling, workshops and more."
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://toronto-jobs.org/"
            githubLink="https://github.com/uoftblueprint/tces"
          />
          <ProjectsCardWModal
            name="City of Brampton"
            description="A digital queue system for the public sport courts."
            image={"projects/btq.jpg"}
            hasOverlay={true}
            years={["2024-2025"]}
            projectDescription="We are building a digital queue system for the City of Brampton to help manage the demand for public sport courts."
            nonprofitDescription="The Period Purse strives to achieve menstrual equity by providing people who menstruate with access to free menstrual products, and to reduce the stigma surrounding periods through public education and advocacy."
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://www.brampton.ca/EN/pages/Welcome.aspx"
            githubLink="https://github.com/uoftblueprint/brampton-tennis-queue"
          />
        </SimpleGrid>
        {/* ************** */}
        {/* YEAR 2023-2024 */}
        {/* ************** */}
        <Title order={1} className="project-years-header">
          2023-2024
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={"xl"}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <ProjectsCardWModal
            name="The Centre for Dreams"
            description="A centralized mobile application to send announcements, track absences, schedule events, and have discussions."
            image={"projects/centre-for-dreams.jpg"}
            hasOverlay={true}
            years={["2023-2024"]}
            projectDescription="We are building a centralized mobile application to send announcements, track absences, schedule events, and have discussions."
            nonprofitDescription="The Centre for Dreams works to integrate those with disabilities back into the society so that they are productive, independent, and respected members of the society. They provide services for adults with developmental disability through educational programs and social skills training (day care programs)."
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://www.centrefordreams.ca/"
            githubLink="https://github.com/uoftblueprint/centre-for-dreams"
          />
          <ProjectsCardWModal
            name="Toronto Community Employment Services"
            description="TBD"
            image={"projects/tces.jpg"}
            hasOverlay={true}
            years={["2022-2024"]}
            projectDescription="TBD"
            nonprofitDescription="Toronto Community Employment Services (TCES) is a non-profit charitable organization offering no cost employment services, such as skill assessments, resume building, career counseling, workshops and more."
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://toronto-jobs.org/"
            githubLink="https://github.com/uoftblueprint/tces"
          />
          <ProjectsCardWModal
            name="FoodShare Toronto"
            description="TBD"
            image={"projects/foodshare.jpg"}
            hasOverlay={true}
            years={["2023-2024"]}
            projectDescription="TBD"
            nonprofitDescription="TBD"
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://foodshare.net/"
            githubLink="https://github.com/uoftblueprint/foodshare-inventory"
          />
          <ProjectsCardWModal
            name="Toronto Foundation for Student Success"
            description="TBD"
            image={"projects/tfss.jpg"}
            hasOverlay={true}
            years={["2023-2024"]}
            projectDescription="TBD"
            nonprofitDescription="TBD"
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://tfss.ca/"
            githubLink="https://github.com/uoftblueprint/tfss"
          />
        </SimpleGrid>
        {/* ************** */}
        {/* YEAR 2022-2023 */}
        {/* ************** */}
        <Title order={1} className="project-years-header">
          2022-2023
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={"xl"}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <ProjectsCardWModal
            name="The Period Purse"
            description="A menstrual tracking application for Android, built by youth for youth."
            image={"projects/the-period-purse.jpeg"}
            hasOverlay={true}
            years={["2021-2023"]}
            projectDescription="We are building a menstrual tracking application for Android."
            nonprofitDescription="The Period Purse strives to achieve menstrual equity by providing people who menstruate with access to free menstrual products, and to reduce the stigma surrounding periods through public education and advocacy."
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://www.theperiodpurse.com/"
            githubLink="https://github.com/uoftblueprint/the-period-purse-android"
          />
          <ProjectsCardWModal
            name="Sistema Toronto"
            description="TBD"
            image={"projects/sistema.jpg"}
            hasOverlay={true}
            years={["2022-2023"]}
            projectDescription="TBD"
            nonprofitDescription="TBD"
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
            githubLink="https://github.com/uoftblueprint/sistema"
          />
          <ProjectsCardWModal
            name="Toronto Community Employment Services"
            description="TBD"
            image={"projects/tces.jpg"}
            hasOverlay={true}
            years={["2022-2023"]}
            projectDescription="TBD"
            nonprofitDescription="Toronto Community Employment Services (TCES) is a non-profit charitable organization offering no cost employment services, such as skill assessments, resume building, career counseling, workshops and more."
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://toronto-jobs.org/"
            githubLink="https://github.com/uoftblueprint/tces"
          />
        </SimpleGrid>
        {/* ************** */}
        {/* YEAR 2021-2022 */}
        {/* ************** */}
        <Title order={1} className="project-years-header">
          2021-2022
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={"xl"}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <ProjectsCardWModal
            name="Homes for Heroes"
            description="TBD"
            image={"projects/homes-for-heroes.jpeg"}
            hasOverlay={true}
            years={["2020-2021"]}
            projectDescription="TBD"
            nonprofitDescription="TBD"
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
            githubLink="https://github.com/uoftblueprint/HomesForHeroes"
          />
          <ProjectsCardWModal
            name="The Period Purse"
            description="A menstrual tracking application for iOS, built by youth for youth."
            image={"projects/the-period-purse.jpeg"}
            hasOverlay={true}
            years={["2021-2022"]}
            projectDescription="We are building a menstrual tracking application for iOS."
            nonprofitDescription="The Period Purse strives to achieve menstrual equity by providing people who menstruate with access to free menstrual products, and to reduce the stigma surrounding periods through public education and advocacy."
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://www.theperiodpurse.com/"
            githubLink="https://github.com/uoftblueprint/the-period-purse-ios"
          />
        </SimpleGrid>
        {/* ************** */}
        {/* YEAR 2020-2021 */}
        {/* ************** */}
        <Title order={1} className="project-years-header">
          2020-2021
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={"xl"}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <ProjectsCardWModal
            name="Merit Award"
            description="TBD"
            image={"projects/merit-award.jpg"}
            hasOverlay={true}
            years={["2020-2021"]}
            projectDescription="TBD"
            nonprofitDescription="TBD"
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://www.meritaward.ca/"
            githubLink="https://github.com/uoftblueprint/merit-award"
          />
          <ProjectsCardWModal
            name="Shelter Movers"
            description="TBD"
            image={"projects/shelter-movers.jpg"}
            hasOverlay={true}
            years={["2020-2021"]}
            projectDescription="TBD"
            nonprofitDescription="TBD"
            team={[
              { name: "NAME", role: "ROLE", imageSrc: "" },
              { name: "NAME1", role: "ROLE", imageSrc: "" },
              { name: "NAME2", role: "ROLE", imageSrc: "" },
              { name: "NAME3", role: "ROLE", imageSrc: "" },
              { name: "NAME4", role: "ROLE", imageSrc: "" },
              { name: "NAME5", role: "ROLE", imageSrc: "" },
              { name: "NAME6", role: "ROLE", imageSrc: "" },
            ]}
            webLink="https://www.sheltermovers.com/"
            githubLink="https://github.com/uoftblueprint/shelter-movers"
          />
        </SimpleGrid>
      </Stack>
    </div>
  );
}
