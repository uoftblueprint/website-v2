"use client";

import Banner from "@/components/Banner/Banner";
import Process from "@/for-students-process/Process";
import WhyJoin from "@/for-students-whyjoin/WhyJoin";
import FaqCard from "@/for-students-FAQ/FaqCard";
import { Container, Divider } from "@mantine/core";
import Alumni from "@/for-students-alumni/Alumni";
import Roles from "@/for-students-roles/Roles";

// TODO: ACTUALLY ADD FAQ DATA
const faqData = [
  {
    question: "Insert Interesting Question Question Mark Incoming?",
    answer:
      "Blah blah blah more stuff more information blah description I hope this answered your question.",
  },
  {
    question: "Another Interesting Question Question Mark Incoming?",
    answer:
      "Blah blah blah more stuff more information blah description I hope this answered your question.",
  },
];

export default function forstudentsPage() {
  return (
    <div>
      <div style={{ backgroundColor: "#e7f3ff" }}>
        <Banner
          title="For Students"
          text="Interested in making a change in the community around you? Want to gain experience working in a software development team? Join us!"
        />
      </div>
      <Alumni />
      <Container size="80%"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Roles />
        <Divider w="73%" color="#e7f3ff" size={"1px"} mx="auto" />
        <WhyJoin img={"/for-students/blu-reading.png"} />
        <Divider w="73%" color="#e7f3ff" size={"1px"} mx="auto" />
        <Process
          applicationImg={"/for-students/blu-working.png"}
          applicationLink={undefined}
          interviewImg={"/for-students/blu-question.png"}
          interviewLink={undefined}
          acceptancesImg={"/for-students/blu-surprise.png"}
          acceptancesLink={undefined}
        />
      </Container>
      <FaqCard faq_info={faqData} />
    </div>
  );
}
