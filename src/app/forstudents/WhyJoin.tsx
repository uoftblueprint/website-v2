import { Container, Flex, Image } from "@mantine/core";
import React from "react";
import "@/app/forstudents/ForStudents.css";

function WhyJoin({ img }) {
  return (
    <Flex
      align="center"
      justify="space-between"
      className="whyjoin"
      direction={{ sm: "row", base: "column" }}
    >
      <Container w={{ sm: "40%", base: "100%" }} p={0}>
        <Image src={img} alt="why join img" />
      </Container>
      <div className="whyjoin-text">
        <h2>Why join?</h2>
        <p>
          Interested in making a change in the community around you? Want to
          gain experience working in a software development team? Join us!
        </p>
      </div>
    </Flex>
  );
}

export default WhyJoin;
