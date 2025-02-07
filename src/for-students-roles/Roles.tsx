"use client";
import RoleCard from "../RoleCard/RoleCard";
import { Center, Container, Divider, SimpleGrid, Title } from "@mantine/core";
import "./Roles.css";

const info = [
  { role: "Software Developer", link: undefined },
  { role: "Software Developer", link: undefined },
  { role: "Software Developer", link: undefined },
];

export default function Roles() {
  return (
    <Container size="xl">
      <Center>
        <Title
          className="open-roles-title"
          size="4vw"
          style={{
            color: "#0078e8",
            padding: "4vw 0vw 2vw 0vw",
          }}
        >
          Open Roles
        </Title>
      </Center>
      <Divider w="30%" color="#e7f3ff" size={"1px"} mx="auto" />
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
        style={{ padding: "2vw 4vw 4vw 4vw" }}
      >
        {info.map((info, index) => (
          <div key={index} className="card-container">
            <RoleCard role={info.role} link={info.link} />
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
}
