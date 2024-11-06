"use client";
import RoleCard from "../RoleCard/RoleCard";
import { Center, Divider, Grid, Title } from "@mantine/core";

const info = [
  { role: "Software Developer", link: undefined },
  { role: "Software Developer", link: undefined },
  { role: "Software Developer", link: undefined },
];

const row = info.map((info) => (
  <Grid.Col
    span={{ xs: 12, sm: 6, md: 4, lg: 3 }}
    key={info.role}
    className={"card"}
  >
    {" "}
    <RoleCard role={info.role} link={info.link}></RoleCard>
  </Grid.Col>
));

export default function Roles() {
  return (
    <div>
      <Center>
        <Title
          className="open-roles-title"
          size="4vw"
          style={{ color: "#0078e8", padding: "4vw 0vw 1vw 0vw" }}
        >
          Open Roles
        </Title>
      </Center>
      <Divider w="30%" color="#e7f3ff" size={"1px"} mx="auto" />
      <Grid
        justify="space-between"
        align={"center"}
        className={"grid"}
        style={{ padding: "1vw 4vw 4vw 4vw" }}
      >
        {row}
      </Grid>
    </div>
  );
}
