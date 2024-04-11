"use client";

import Banner from "@/components/Banner/Banner";
import TeamCard from "@/team-card/TeamCard.js";
import { Container, Divider, Flex } from "@mantine/core";

const members_tfss = [
  {
    name: "Valerie Yip",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/valerie-yip-fh/",
    profilePicture: "team/tfss/valerie.png",
  },
  {
    name: "Youssef Soliman",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/youssefsoliman/",
    profilePicture: "team/tfss/youssef.jpg",
  },
];

const members_cfd = [
  {
    name: "Ganesh Asapu",
    role: "Project Lead",
    linkedinLink: "https://www.linkedin.com/in/gasapu/",
    profilePicture: "team/cfd/ganesh.jpg",
  },
  {
    name: "Baker Jackson",
    role: "Project Lead",
    linkedinLink: "https://www.linkedin.com/in/baker-jackson/",
    profilePicture: "team/cfd/baker.jpg",
  },
  {
    name: "Sarina Li",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/sarinali/",
    profilePicture: "team/cfd/sarina.png",
  },
  {
    name: "Jason Wang",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/jasonfyw/",
    profilePicture: "team/cfd/jason.jpg",
  },
  {
    name: "Minh Le",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/nm-le/",
    profilePicture: "team/cfd/minh.png",
  },
  {
    name: "Helen Zhao",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/helen-zhao-0914b6282/",
    profilePicture: "team/cfd/helen.jpg",
  },
  {
    name: "Yuet Ming Wong",
    role: "Product Designer",
    linkedinLink: "https://www.linkedin.com/in/yuet-ming-wong-041619150/",
    profilePicture: "team/cfd/yuet.png",
  },
  {
    name: "Ram",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/ram-raghav-sharma/",
    profilePicture: "team/cfd/ram.jpg",
  },

  {
    name: "Helena Glowacki",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/helena-g-2527a922b/",
    profilePicture: "team/cfd/helena.jpeg",
  },
  {
    name: "Ryan Li",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/ryanl423/",
    profilePicture: "team/cfd/ryan.jpeg",
  },
];

const members_tces = [
  {
    name: "Jordan Janakievski",
    role: "Project Lead",
    linkedinLink: "https://www.linkedin.com/in/jordan-janakievski/",
    profilePicture: "team/tces/jordan.png",
  },
  {
    name: "Daniel Dervishi",
    role: "Project Lead",
    linkedinLink: "https://www.linkedin.com/in/danieldervishi/",
    profilePicture: "team/tces/daniel.jpg",
  },
  {
    name: "Kevin Le",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/kevinle623/",
    profilePicture: "team/tces/kevin.png",
  },
  {
    name: "Emily Zhou",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/emily-fz/",
    profilePicture: "team/tces/emily.jpeg",
  },
  {
    name: "Ron Varshavsky",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/ronvarshavsky/",
    profilePicture: "team/tces/ron.jpg",
  },
  {
    name: "Jake Gu",
    role: "Designer",
    linkedinLink: "https://www.linkedin.com/in/jake-gu/",
    profilePicture: "team/tces/jake.jpeg",
  },
];

const members_at = [
  {
    name: "Leo Liu",
    role: "President",
    linkedinLink: "https://www.linkedin.com/in/siqiliu-/",
    profilePicture: "team/at/leo.jpeg",
  },
  {
    name: "Chloe Zhao",
    role: "Vice President",
    linkedinLink: "https://www.linkedin.com/in/chloeyzhao/",
    profilePicture: "team/at/chloe.jpg",
  },
  {
    name: "Justin Li",
    role: "VP of Software",
    linkedinLink: "https://www.linkedin.com/in/justinwli930/",
    profilePicture: "team/at/justin.jpeg",
  },
];

const members_fs = [
  {
    name: "Marco Mai",
    role: "Product Manager",
    linkedinLink: "https://www.linkedin.com/in/marco-mai/",
    profilePicture: "team/fs/marco.jpg",
  },
  {
    name: "Youssef Soliman",
    role: "Product Lead",
    linkedinLink: "https://www.linkedin.com/in/youssefsoliman/",
    profilePicture: "team/fs/youssef.jpg",
  },
];

const members_int = [
  {
    name: "Gabriel Vainer",
    role: "Project Lead",
    linkedinLink: "https://www.linkedin.com/in/vai9er/",
    profilePicture: "team/int/gab.jpg",
  },

  {
    name: "Marco Mai",
    role: "Product Manager",
    linkedinLink: "https://www.linkedin.com/in/marco-mai/",
    profilePicture: "team/int/marco.jpg",
  },
  {
    name: "Elsie Zhu",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/elsie-zhu/",
    profilePicture: "team/int/elsie.jpg",
  },

  {
    name: "Han Xheng Chew",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/hanxheng/",
    profilePicture: "team/int/han.jpg",
  },
  {
    name: "Michelle Huang",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/michelle-huang-1210361b9/",
    profilePicture: "team/int/mich.jpeg",
  },
  {
    name: "Sarah Wang",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/sarah-wang4/",
    profilePicture: "team/int/sarah.jpg",
  },
  {
    name: "Jack Fan",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/jackkfan/",
    profilePicture: "team/int/jack.jpg",
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
          <TeamCard
            title="Toronto Foundation For Student Success"
            team_members={members_tfss}
          />
        </Container>
        <Divider w="40%" color="#0078E8" size={"2px"} />
        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Internal" team_members={members_int} />
        </Container>
        <Divider w="40%" color="#0078E8" size={"2px"} />
        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Foodshare" team_members={members_fs} />
        </Container>
        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Administration Team" team_members={members_at} />
        </Container>
      </Flex>
    </div>
  );
}
