"use client";
import ProfileContainer from "./Profile";
import { Title, SimpleGrid, Container } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import "./TeamCard.css";
import { Profile } from '@/interfaces/profile';

function TeamCard({ title, members }: { title: String, members: Profile[] }) {
  return (
    <Container size="80%">
      <Title className="team-title" c="#0078E8">
        {title}
      </Title>

      <SimpleGrid
        className="team-grid"
        spacing="lg"
        cols={{ lg: 6, md: 4, sm: 3, xs: 2, base: 2 }}
      >
        {members.map((member, index) => (
          <ProfileContainer
            key={index}
            name={member.name}
            role={member.role}
            profilePicture={member.profileImage}
            linkedinLink={
              member.linkedinLink ? member.linkedinLink : ""
            }
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default TeamCard;
