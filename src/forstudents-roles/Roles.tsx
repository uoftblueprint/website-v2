"use client";
import "@/forstudents-roles/Roles.css";
import RoleCard from "../RoleCard/RoleCard";
import { Divider, Grid, Title } from "@mantine/core";

const info = [
  { role: "Software Developer", link: undefined },
  { role: "Software Developer", link: undefined },
  { role: "Software Developer", link: undefined },
];

const row = info.map((info) => (
  <Grid.Col span={3} key={info.role} className={"card"}>
    {" "}
    <RoleCard role={info.role} link={info.link}></RoleCard>
  </Grid.Col>
));

export default function Roles() {
  return (
    <div>
      <Title className="open-roles-title">Open Roles</Title>
      <Divider w="30%" color="#e7f3ff" size={"1px"} mx="auto" />
      <Grid justify="space-between" align={"center"} className={"grid"}>
        {row}
      </Grid>
    </div>
  );
}
