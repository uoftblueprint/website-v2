"use client";
import TeamCard from "src/team-card/TeamCard.js";
import FAQ from "src/for-students-FAQ/for-students-FAQ.js";

let temp_data = [
  {
    name: "Michael Jia",
    role: "Product Manager",
    profilePicture: "",
  },
  {
    name: "Michael Jia",
    role: "Product Manager",
    profilePicture: "",
  },
  {
    name: "Michael Jia",
    role: "Product Manager",
    profilePicture: "",
  },
  {
    name: "Michael Jia",
    role: "Product Manager",
    profilePicture: "",
  },
  {
    name: "Michael Jia",
    role: "Product Manager",
    profilePicture: "",
  },
  {
    name: "Michael Jia",
    role: "Product Manager",
    profilePicture: "",
  },
];

let faqQuestions = [
  { question: "how are you today1", answer: "fine thankyou1" },
  { question: "how are you today2", answer: "fine thankyou2" },
  { question: "how are you today3", answer: "fine thankyou3" },
  { question: "how are you today4", answer: "fine thankyou4" },
];

export default function Home() {
  return (
    <>
      <TeamCard title="Testing Title" team_members={temp_data}></TeamCard>
      <FAQ faq_info={faqQuestions}></FAQ>
    </>
  );
}
