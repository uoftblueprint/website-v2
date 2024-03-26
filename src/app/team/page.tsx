"use client";

import Banner from "@/components/Banner/Banner";
import TeamCard from "@/team-card/TeamCard.js";
import { Container, Divider, Flex } from "@mantine/core";

const members_tfss = [
  {
    name: "First Last",
    role: "Project Lead",
    linkedinLink: "google.com",
    profilePicture:
      "https://media.tenor.com/pILyZFi496cAAAAM/what-excuse-me.gif",
  },
];

const members_cfd = [
  {
    name: "First Last",
    role: "Project Lead",
    linkedinLink: "google.com",
    profilePicture:
      "https://media.tenor.com/pILyZFi496cAAAAM/what-excuse-me.gif",
  },
];

const members_tces = [
  {
    name: "First Last",
    role: "Project Lead",
    linkedinLink: "google.com",
    profilePicture:
      "https://media.tenor.com/pILyZFi496cAAAAM/what-excuse-me.gif",
  },
];

const members_at = [
  {
    name: "First Last",
    role: "Project Lead",
    linkedinLink: "google.com",
    profilePicture:
      "https://media.tenor.com/pILyZFi496cAAAAM/what-excuse-me.gif",
  },
];

export default function TeamPage() {
  return (
    <div className="teams">
      <Banner
        title={"Meet our Team"}
        text={
          "We're aiming to change our surrounding community, one Blueprint at a time! Meet the 2023-2024 project teams!"
        }
      />
      <Flex
        justify={"center"}
        align={"center"}
        direction="column"
        w="100%"
        pos={"relative"}
      >
        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard
            title="Toronto Foundation For Student Success"
            team_members={members_tfss}
          />
        </Container>
        <Divider w="40%" color="#0078E8" size={"2px"} />
        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Center for Dreams" team_members={members_cfd} />
        </Container>
        <Divider w="40%" color="#0078E8" size={"2px"} />
        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard
            title="Toronto Community Employment Services"
            team_members={members_tces}
          />
        </Container>
        <Divider w="40%" color="#0078E8" size={"2px"} />
        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Administration Team" team_members={members_at} />
        </Container>
      </Flex>
    </div>
  );
}
