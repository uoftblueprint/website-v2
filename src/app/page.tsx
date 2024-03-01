"use client";
import FaqCard from "@/for-students-FAQ/for-students-FAQ.js";
import { MantineProvider } from "@mantine/core";
import Demo from "@/for-students-FAQ/Demo.jsx";

const faqInfo = [
  {
    question: "Insert interesting question question mark incoming1?",
    answer:
      "1Blah blah blah more stuff more information blah description I hope this answered your question. Hello to the developer that is building this out.",
  },
  {
    question: "Insert interesting question question mark incoming2?",
    answer:
      "2Blah blah blah more stuff more information blah description I hope this answered your question. Hello to the developer that is building this out.",
  },
  {
    question: "Insert interesting question question mark incoming3?",
    answer:
      "3Blah blah blah more stuff more information blah description I hope this answered your question. Hello to the developer that is building this out.",
  },
];

export default function Home() {
  return (
    <MantineProvider>
      <div>
        <FaqCard faq_info={faqInfo}></FaqCard>
        {/* <Demo faq_info={faqInfo}></Demo> */}
      </div>
    </MantineProvider>
  );
}
