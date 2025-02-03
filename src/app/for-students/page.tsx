"use client";

import Banner from "@/components/Banner/Banner";
import Process from "@/for-students-process/Process";
import WhyJoin from "@/for-students-whyjoin/WhyJoin";
import FaqCard from "@/for-students-FAQ/FaqCard";
import { Divider } from "@mantine/core";
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
      <Roles />
      <Divider w="73%" color="#e7f3ff" size={"1px"} mx="auto" />
      {/* TODO: FIX WHY JOIN IMAGE */}
      <WhyJoin img={"/for-students/placeholder.png"} />
      {/* TODO: FIX PROCESS IMAGES */}
      <Process
        applicationImg={"/for-students/placeholder.png"}
        applicationLink={undefined}
        interviewImg={"/for-students/placeholder.png"}
        interviewLink={undefined}
        acceptancesImg={"/for-students/placeholder.png"}
        acceptancesLink={undefined}
      />
      <FaqCard faq_info={faqData} />
    </div>
  );
}
