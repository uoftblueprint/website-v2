"use client";
import TeamCard from "@/team-card/TeamCard.js";

let test_team = [
  {
    name: "Harmit Goswami",
    role: "Product Manager",
    profilePicture: "/cat.jpeg",
  },
  {
    name: "Helena Glowacki",
    role: "Product Manager",
    profilePicture: "/cat.jpeg",
  },
  {
    name: "Kenneth Miura",
    role: "Product Manager",
    profilePicture: "/cat.jpeg",
  },
  {
    name: "Thardchi Ganesalingam",
    role: "Developer",
    profilePicture: "/cat.jpeg",
  },
  {
    name: "Pierre-William Lessard",
    role: "Product Manager",
    profilePicture: "/cat.jpeg",
  },
  { name: "Michael Jia", role: "Product Manager", profilePicture: "/cat.jpeg" },
  { name: "Michael Jia", role: "Product Manager", profilePicture: "/cat.jpeg" },
];

export default function Home() {
  return (
    <div>
      <TeamCard title={"Testing Title"} team_members={test_team}></TeamCard>
    </div>
  );
}
