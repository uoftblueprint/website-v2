"use client";

import Profile from "./Profile";
import { Title, SimpleGrid, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import "@mantine/core/styles.css";
import "./TeamCard.css";

function TeamCard({ title, team_members }) {
  const small = useMediaQuery("(max-width: 500px)");
  const titleSize = small ? "20px" : "30px";

  return (
    <Container size="80%">
      <Title size={titleSize} c="#0078E8">
        {title}
      </Title>

      <SimpleGrid spacing="lg" cols={{ lg: 6, md: 4, sm: 3, xs: 2, base: 2 }}>
        {team_members.map((team_member, index) => (
          <Profile
            key={index}
            name={team_member.name}
            role={team_member.role}
            profilePicture={team_member.profilePicture}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default TeamCard;
