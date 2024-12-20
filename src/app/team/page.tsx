"use client";

import Banner from "@/components/Banner/Banner";
import TeamCard from "@/team-card/TeamCard";
import { Container, Divider, Flex } from "@mantine/core";

const members_btq = [
  {
    name: "Raunak Madan",
    role: "Project Lead",
    linkedinLink: "https://www.linkedin.com/in/raunak-madan",
    profilePicture: "team/24-25/btq/Raunak.jpeg",
  },
  {
    name: "Christie Ko",
    role: "Product Manager",
    linkedinLink: "www.linkedin.com/in/christieko",
    profilePicture: "team/24-25/btq/Christie.png",
  },
  {
    name: "Steven Lin",
    role: "Product Designer",
    linkedinLink: "https://www.linkedin.com/in/yuchenguoft/",
    profilePicture: "team/24-25/btq/Steven.png",
  },
  {
    name: "Ron Varshavsky",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/ronvarshavsky",
    profilePicture: "team/24-25/btq/Ron.jpg",
  },
  {
    name: "Aina Merchant",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/aina-fatema-merchant-a12295221/",
    profilePicture: "team/24-25/btq/Aina.jpeg",
  },
  {
    name: "Divyansh Kachchhava",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/divyansh-kachchhava-09b265228/",
    profilePicture: "team/24-25/btq/Divyansh.jpg",
  },
  {
    name: "Alan Su",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/alan-su-144b58171/",
    profilePicture: "team/24-25/btq/Alan.jpg",
  },
  {
    name: "Riyad Valiyev",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/riyad-valiyev/",
    profilePicture: "team/24-25/btq/Riyad.png",
  },
  {
    name: "Stephanie Lu",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/stephanieyflu",
    profilePicture: "team/24-25/btq/Stephanie.jpg",
  },
  {
    name: "Jamie Han",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/jameshan27/",
    profilePicture: "team/24-25/btq/Jamie.png",
  },
  {
    name: "Leandro Brasil",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/leandrohamaguchi/",
    profilePicture: "team/24-25/btq/Leandro.jpg",
  }
];

const members_cfd = [
  {
    name: "Sarina Li",
    role: "Project Lead",
    linkedinLink: "",
    profilePicture: "team/24-25/cfd/Sarina.png",
  },
  {
    name: "Emily Zhou",
    role: "Product Manager",
    linkedinLink: "https://www.linkedin.com/in/emily-fz/",
    profilePicture: "team/24-25/cfd/Emily.jpeg",
  },
  {
    name: "Amish Mamtani",
    role: "Product Designer",
    linkedinLink: "https://www.linkedin.com/in/amish-mamtani/",
    profilePicture: "team/24-25/cfd/Amish.png",
  },
  {
    name: "Elsie Zhou",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/elsie-zhu/",
    profilePicture: "team/24-25/cfd/Elsie.jpg",
  },
  {
    name: "Jeff Huang",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/jeff-huang-9aa740248/",
    profilePicture: "team/24-25/cfd/Jeff.jpg",
  },
  {
    name: "Carlos Solares",
    role: "Software Developer",
    linkedinLink: "www.linkedin.com/in/carlos-solares-cs",
    profilePicture: "team/24-25/cfd/Carlos.jpg",
  },
  {
    name: "Eric Lu",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/eric-l-483375134/",
    profilePicture: "team/24-25/cfd/Eric.png",
  },
  {
    name: "Nolawi Teklehaimanot",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/nolawi-teklehaimanot/",
    profilePicture: "team/24-25/cfd/Nolawi.jpg",
  },
  {
    name: "Daniel Xu",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/1danielxu/",
    profilePicture: "",
  },
  {
    name: "Girik Setya",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/girik-setya/",
    profilePicture: "team/24-25/cfd/Girik.jpeg",
  }
];

const members_tces = [
  {
    name: "Kashish Mittal",
    role: "Project Lead",
    linkedinLink: " https://www.linkedin.com/in/kashmitt",
    profilePicture: "team/24-25/tces/Kashish.jpg",
  },
  {
    name: "Mieko Yao",
    role: "Product Manager",
    linkedinLink: "https://www.linkedin.com/in/miekoyao/",
    profilePicture: "team/24-25/tces/Mieko.jpg",
  },
  {
    name: "Olya Jaworsky",
    role: "Product Designer",
    linkedinLink: "www.linkedin.com/in/olyajaworsky",
    profilePicture: "team/24-25/tces/Olya.jpeg",
  },
  {
    name: "William Lam",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/william-nhut-lam-b3a8a2213/",
    profilePicture: "team/24-25/tces/William.jpg",
  },
  {
    name: "Harshith Latchupatula",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/harshithlatchupatula/",
    profilePicture: "team/24-25/tces/Harshith.jpeg",
  },
  {
    name: "Jamie Yi",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/jamie-yi/",
    profilePicture: "team/24-25/tces/Jamie.jpg",
  },
  {
    name: "Shahmeer Khan",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/shahmeerkh/",
    profilePicture: "team/24-25/tces/Shahmeer.jpg",
  },
  {
    name: "Dhairya Thakkar",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/dhairya-t/",
    profilePicture: "team/24-25/tces/Dhairya.jpg",
  },
  {
    name: "Lana Wehbeh",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/lana-wehbeh/",
    profilePicture: "team/24-25/tces/Lana.png",
  },
  {
    name: "Michelle Huang",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/michhu/",
    profilePicture: "team/24-25/tces/Michelle.jpg",
  },
  {
    name: "Houman Ebrahimi",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/houman-ebrahimi-6a3789213",
    profilePicture: "",
  },
  {
    name: "Alex Lewis",
    role: "Software Developer",
    linkedinLink: "https://linkedin.com/in/alex-lewis-6b3810299",
    profilePicture: "team/24-25/internal/Alex.jpg",
  }
];

const members_tpp = [
  {
    name: "Merrick Liu",
    role: "Project Lead",
    linkedinLink: "https://www.linkedin.com/in/merrick-liu-89206822b/",
    profilePicture: "team/24-25/tpp/Merrick.jpg",
  },
  {
    name: "Paridhi Goel",
    role: "Product Manager",
    linkedinLink: "https://www.linkedin.com/in/paridhi--/",
    profilePicture: "team/24-25/tpp/Paridhi.jpg",
  },
  {
    name: "Patricia Santos",
    role: "Product Designer",
    linkedinLink: "https://www.linkedin.com/in/ysha-santos/",
    profilePicture: "",
  },
  {
    name: "Helen Zhao",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/1zhaohel/",
    profilePicture: "team/24-25/tpp/Helen.jpg",
  },
  {
    name: "Jack Fan",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/jackkfan/",
    profilePicture: "team/24-25/tpp/Jack.jpg",
  },
  {
    name: "Taewoong Oh",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/taewoong-oh/",
    profilePicture: "team/24-25/tpp/Taewoong.jpg",
  },
  {
    name: "Joel Lawrence",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/lawrencejoel/",
    profilePicture: "",
  },
  {
    name: "Muhtasim Khan",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/muhtasim-khan/",
    profilePicture: "team/24-25/tpp/Muhtasim.jpg",
  },
  {
    name: "Harpuneet Singh",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/harpuneet2005/",
    profilePicture: "team/24-25/tpp/Harpuneet.jpg",
  },
  {
    name: "Brandon Tai",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/brandon-t-041939226/",
    profilePicture: "team/24-25/tpp/Brandon.jpg",
  },
  {
    name: "Fred He",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/fred-he-7ba540329/",
    profilePicture: "team/24-25/tpp/Fred.jpg",
  },
  {
    name: "Sataphon Obra",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/sataphon-obra-88388b290/",
    profilePicture: "",
  }
];

const members_int = [
  {
    name: "Alex Lewis",
    role: "Software Developer",
    linkedinLink: "https://linkedin.com/in/alex-lewis-6b3810299",
    profilePicture: "team/24-25/internal/Alex.jpg",
  },
  {
    name: "Enaya Amir",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/enaya-amir-b774962b3/",
    profilePicture: "team/24-25/internal/Enaya.jpg",
  },
  {
    name: "Lily Phan",
    role: "Software Developer",
    linkedinLink: "https://www.linkedin.com/in/lilyphan48/",
    profilePicture: "team/24-25/internal/Lily.jpg",
  }
];

const members_osc = [
];

const members_exec = [
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
            title="City of Brampton"
            team_members={members_btq}
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
          <TeamCard
            title="The Period Purse"
            team_members={members_tpp}
          />
        </Container>

        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Internal" team_members={members_int} />
        </Container>

        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Open-Source Contributors x Mozilla" team_members={members_exec} />
        </Container>

        <Divider w="40%" color="#0078E8" size={"2px"} />

        <Container className="teams-group" m={"10vh 0 10vh 0"} w="100%" fluid>
          <TeamCard title="Executive Team" team_members={members_exec} />
        </Container>
      </Flex>
    </div>
  );
}
