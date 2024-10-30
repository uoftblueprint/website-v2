"use client";

import Banner from "@/components/Banner/Banner";
import Process from "@/forstudents-process/Process";
import WhyJoin from "@/forstudents-whyjoin/WhyJoin";
import FaqCard from "@/forstudents-FAQ/FaqCard";
import { Container, Divider } from "@mantine/core";
import Alumni from "@/forstudents-alumni/Alumni";
import Roles from "@/forstudents-roles/Roles";

const faqData = [
  {
    question: "Insert Interesting Question Question Mark Incoming?",
    answer:
      "Blah blah blah more stuff more information blah description I hope this answered your question. Hello to the developer that is building this out.",
  },
  {
    question: "Another Interesting Question Question Mark Incoming?",
    answer:
      "Blah blah blah more stuff more information blah description I hope this answered your question. Hello to the developer that is building this out.",
  },
];

export default function ForStudentsPage() {
  return (
    <div>
      <div style={{ backgroundColor: "#e7f3ff" }}>
        <Banner
          title="For Students"
          text="Interested in making a change in the community around you? Want to gain experience working in a software development team? Join us!"
        />
      </div>
      <Alumni />
      <Roles />
      <Divider w="73%" color="#e7f3ff" size={"1px"} mx="auto" />
      <WhyJoin img={"/forstudents/placeholder.png"} />
      <Container className="process" w="100%">
        <Process
          applicationImg={"/forstudents/placeholder.png"}
          applicationLink={undefined}
          interviewImg={"/forstudents/placeholder.png"}
          interviewLink={undefined}
          acceptancesImg={"/forstudents/placeholder.png"}
          acceptancesLink={undefined}
        />
      </Container>
      <FaqCard faq_info={faqData} />
    </div>
  );
}
