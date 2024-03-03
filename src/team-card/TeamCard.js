"use client";

import Profile from "./Profile";
import { Title, SimpleGrid, Container } from "@mantine/core";
import "@mantine/core/styles.css";
import "./TeamCard.css";

function TeamCard({ title, team_members }) {
  return (
    <Container size="80%">
      <Title c="#0078E8">{title}</Title>

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
