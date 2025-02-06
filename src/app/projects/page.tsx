"use client";
import ProjectsCardWModal from "@/projects-card/ProjectsCardWModal";
import { Container, SimpleGrid, Stack, Title } from "@mantine/core";
import Banner from "@/components/Banner/Banner";
import "@mantine/core/styles.css";
import "@/app/projects/projects.css";

export default function ProjectsPage() {
  return (
    <div>
      <Banner
        title="Projects"
        text="Since our founding in 2020, we’ve had the pleasure to work with 10 non-profits!"
        button={{ text: "Contact us", link: "/for-nonprofits" }}
      />
      <Container size="xl">
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
              description="A CRM to help manage clients and employers"
              image={"projects/tces.jpg"}
              hasOverlay={true}
              years={["2022-2024"]}
              projectDescription="We built a CRM to help manage clients and provide a platform to track job opportunities. TCES is also able to manage the contacts of the employers they work with to better connect their clients."
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
              description="Improving the UI/UX of the FoodShare website."
              image={"projects/foodshare.jpg"}
              hasOverlay={true}
              years={["2023-2024"]}
              projectDescription="We are working to improve the UI/UX of the FoodShare website."
              nonprofitDescription="FoodShare is a food justice organization, advocating for the right to food, and working to challenge the systemic barriers that keep people from accessing the food they need to thrive."
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
              description="A software workflow to streamline the food supply and management process."
              image={"projects/tfss.jpg"}
              hasOverlay={true}
              years={["2023-2024"]}
              projectDescription="We built a software workflow to streamline the food supply and management process for TFSS."
              nonprofitDescription="Toronto Foundation for Student Success (TFSS) provides food, medical care, emergency funds and after school programs for children in need. Their mission is to remove the barriers for children so every child is nourished and able to learn."
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
                { name: "Elena Wang", role: "Project Lead", imageSrc: "" },
                { name: "Leo Liu", role: "Project Lead", imageSrc: "" },
                { name: "Yuwei Jiang", role: "Designer", imageSrc: "" },
                { name: "Kevin Le", role: "Developer", imageSrc: "" },
                { name: "Madeline Ahn", role: "Developer", imageSrc: "" },
                { name: "Manpreet Bhatti", role: "Developer", imageSrc: "" },
                { name: "Manya Mittal", role: "Developer", imageSrc: "" },
                { name: "Michael Ng", role: "Developer", imageSrc: "" },
                { name: "Pierre-William Lessard", role: "Developer", imageSrc: "" },
              ]}
              webLink="https://www.theperiodpurse.com/"
              githubLink="https://github.com/uoftblueprint/the-period-purse-android"
            />
            <ProjectsCardWModal
              name="Sistema Toronto"
              description="A classroom platform to engage with students and manage programs."
              image={"projects/sistema.jpg"}
              hasOverlay={true}
              years={["2022-2023"]}
              projectDescription="We are building a platform to help Sistem Torontoo engage with their students and manage their programs."
              nonprofitDescription="Sistema Toronto provides musical and intellectual opportunities to children in vulnerable communities, with the goal of transformative social change."
              team={[
                { name: "Emily Yu", role: "Project Lead", imageSrc: "" },
                { name: "Ramy Zhang", role: "Project Lead", imageSrc: "" },
                { name: "Anita Xu", role: "Designer", imageSrc: "team/alumni/anita.jpg" },
                { name: "Serena Tran", role: "Designer", imageSrc: "" },
                { name: "Harmit Goswami", role: "Developer", imageSrc: "" },
                { name: "Sarah Xu", role: "Developer", imageSrc: "" },
                { name: "Baker Jackson", role: "Developer", imageSrc: "" },
                { name: "Min Gi Kwon", role: "Developer", imageSrc: "" },
                { name: "Kurtis Law", role: "Developer", imageSrc: "" },
                { name: "Helena Glowacki", role: "Developer", imageSrc: "" },
                { name: "Azamat Khamidov", role: "Developer", imageSrc: "" },
              ]}
              webLink=""
              githubLink="https://github.com/uoftblueprint/sistema"
            />
            <ProjectsCardWModal
              name="Toronto Community Employment Services"
              description="A CRM to help manage clients and employers"
              image={"projects/tces.jpg"}
              hasOverlay={true}
              years={["2022-2023"]}
              projectDescription="We built a CRM to help manage clients and provide a platform to track job opportunities. TCES is also able to manage the contacts of the employers they work with to better connect their clients."
              nonprofitDescription="Toronto Community Employment Services (TCES) is a non-profit charitable organization offering no cost employment services, such as skill assessments, resume building, career counseling, workshops and more."
              team={[
                { name: "Kenneth Miura", role: "Project Lead", imageSrc: "team/alumni/kenneth.jpg" },
                { name: "Edward Han", role: "Project Lead", imageSrc: "team/alumni/edward.jpg" },
                { name: "Emily Gazo", role: "Designer", imageSrc: "" },
                { name: "Ananmay Sharan", role: "Designer", imageSrc: "" },
                { name: "Siddarth Dagar", role: "Developer", imageSrc: "" },
                { name: "Annie Liu", role: "Developer", imageSrc: "" },
                { name: "Ganesh Asapu", role: "Developer", imageSrc: "" },
                { name: "Jordan Janakievski", role: "Developer", imageSrc: "team/24-25/exec/jordan.png" },
                { name: "Helen Li", role: "Developer", imageSrc: "" },
                { name: "MJ Munkhbayar", role: "Developer", imageSrc: "" },
                { name: "Thardchi Ganesalingam", role: "Developer", imageSrc: "" },
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
              description="A CRM application used to help organize homes for Canadian veterans."
              image={"projects/homes-for-heroes.jpeg"}
              hasOverlay={true}
              years={["2021-2022"]}
              projectDescription="We built a CRM and survey tool to help manage and track homes for veterans in the program."
              nonprofitDescription="Homes for Heroes looks to provide a caring and comprehensive solution to homelessness for Canadian veterans. They provide transitional housing and support services to veterans in need."
              team={[
                {
                  name: "Raymond Chen",
                  role: "Project Lead",
                  imageSrc: "team/alumni/raymond.jpg",
                },
                {
                  name: "Mesbah Rafin",
                  role: "Project Lead",
                  imageSrc: "team/alumni/mesbah.jpg",
                },
                {
                  name: "Anita Xu",
                  role: "Designer",
                  imageSrc: "team/alumni/anita.jpg",
                },
                {
                  name: "Yvonne Rao",
                  role: "Developer",
                  imageSrc: "team/alumni/yvonne.jpg",
                },
                {
                  name: "Jeffery Zhan",
                  role: "Developer",
                  imageSrc: "team/alumni/jeffery.jpg",
                },
                {
                  name: "Siddarth Dagar",
                  role: "Developer",
                  imageSrc: "team/alumni/siddarth.jpg",
                },
                {
                  name: "Sunghyoun Kim",
                  role: "Developer",
                  imageSrc: "team/alumni/sunghyoun.jpg",
                },
                {
                  name: "Youssef Soliman",
                  role: "Developer",
                  imageSrc: "team/alumni/youssef.jpg",
                },
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
                {
                  name: "Chloe Zhao",
                  role: "Project Lead",
                  imageSrc: "team/alumni/chloe.jpg",
                },
                {
                  name: "Faye Tan",
                  role: "Project Lead",
                  imageSrc: "team/alumni/faye.jpg",
                },
                { name: "Jing Tey", role: "Designer", imageSrc: "" },
                {
                  name: "Annie Liu",
                  role: "Developer",
                  imageSrc: "team/alumni/annie.jpg",
                },
                {
                  name: "Emily Yu",
                  role: "Developer",
                  imageSrc: "team/alumni/emily.jpg",
                },
                {
                  name: "Roy Lin",
                  role: "Developer",
                  imageSrc: "team/alumni/roy.jpg",
                },
                {
                  name: "Helen Li",
                  role: "Developer",
                  imageSrc: "team/alumni/helen.jpg",
                },
                {
                  name: "Edward Han",
                  role: "Developer",
                  imageSrc: "team/alumni/edward.jpg",
                },
                {
                  name: "Kenneth Miura",
                  role: "Developer",
                  imageSrc: "team/alumni/kenneth.jpg",
                },
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
              description="A scholarship application system to handle multiple rounds of interviews."
              image={"projects/merit-award.jpg"}
              hasOverlay={true}
              years={["2020-2021"]}
              projectDescription="We built a scholarship application system that can handle multiple rounds of interviews."
              nonprofitDescription="Merit Award works to support and inspire low income students to pursue higher education. They have provided over $150,000 in awards each year helping around 200 students. Since their inception in 1996, they have awarded over $1.7 million to over 2,500 students."
              team={[
                {
                  name: "Rishab Luthra",
                  role: "Project Lead",
                  imageSrc: "team/alumni/rishab.jpg",
                },
                {
                  name: "Trudie Cheung",
                  role: "Product Manager",
                  imageSrc: "team/alumni/trudie.jpg",
                },
                {
                  name: "Fiza Mehta",
                  role: "Designer",
                  imageSrc: "team/alumni/fiza.jpg",
                },
                {
                  name: "Baker Jackson",
                  role: "Developer",
                  imageSrc: "team/alumni/baker.jpg",
                },
                {
                  name: "Song You",
                  role: "Developer",
                  imageSrc: "team/alumni/song.jpg",
                },
                {
                  name: "Alexander Shih",
                  role: "Developer",
                  imageSrc: "team/alumni/alexander.jpg",
                },
                {
                  name: "Stella Cai",
                  role: "Developer",
                  imageSrc: "team/alumni/stella.jpg",
                },
                {
                  name: "Sheree Zhang",
                  role: "Developer",
                  imageSrc: "team/alumni/sheree.jpg",
                },
              ]}
              webLink="https://www.meritaward.ca/"
              githubLink="https://github.com/uoftblueprint/merit-award"
            />
            <ProjectsCardWModal
              name="Shelter Movers"
              description="A system to assist in moving and tracking moves."
              image={"projects/shelter-movers.jpg"}
              hasOverlay={true}
              years={["2020-2021"]}
              projectDescription="We built a system to assist in helping track and manage moving locations and individuals."
              nonprofitDescription="Shelter Movers is a national, volunteer-powered charitable organization providing moving and storage services at no cost to women and children fleeing abuse. With guidance from local shelters and community agencies, they developed a survivor-centred, free moving service to fill a critical gap."
              team={[
                {
                  name: "Dakota McInnis",
                  role: "Project Lead",
                  imageSrc: "team/alumni/dakota.jpg",
                },
                {
                  name: "Michael Jia",
                  role: "Product Manager",
                  imageSrc: "team/alumni/michael.jpg",
                },
                {
                  name: "Anita Xu",
                  role: "Designer",
                  imageSrc: "team/alumni/anita.jpg",
                },
                {
                  name: "Tammy Taabassum",
                  role: "Designer",
                  imageSrc: "team/alumni/tammy.jpg",
                },
                {
                  name: "Amy Peng",
                  role: "Developer",
                  imageSrc: "team/alumni/amy.jpg",
                },
                {
                  name: "Chi-Hong Cheung",
                  role: "Developer",
                  imageSrc: "team/alumni/chihong.jpg",
                },
                {
                  name: "Dane Gledhill",
                  role: "Developer",
                  imageSrc: "team/alumni/dane.jpg",
                },
                {
                  name: "Rayyana Kambris",
                  role: "Developer",
                  imageSrc: "team/alumni/rayyana.jpg",
                },
                {
                  name: "Sakina Gadriwala",
                  role: "Developer",
                  imageSrc: "team/alumni/sakina.jpg",
                },
                {
                  name: "Samuel Moor-Smith",
                  role: "Developer",
                  imageSrc: "team/alumni/samuel.jpg",
                },
              ]}
              webLink="https://www.sheltermovers.com/"
              githubLink="https://github.com/uoftblueprint/shelter-movers"
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </div>
  );
}
