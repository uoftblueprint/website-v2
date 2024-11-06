import { Container, Flex, Image } from "@mantine/core";
import "@/for-students-whyjoin/WhyJoin.css";

function WhyJoin({ img }) {
  return (
    <Flex
      align="center"
      justify="space-between"
      className="whyjoin"
      direction={{ xs: "row", base: "column" }}
      columnGap={{ md: "60px", base: "30px" }}
    >
      <Container w={{ base: "100%" }} h={{ sm: "100%", base: "auto" }} p={0}>
        <Image src={img} alt="why join img" />
      </Container>
      <Container
        className="whyjoin-text"
        w={{ sm: "100%", base: "100%" }}
        h={{ sm: "100%", base: "auto" }}
        p={0}
      >
        <h2>Why join?</h2>
        <p>
          Interested in making a change in the community around you? Want to
          gain experience working in a software development team? Join us!
        </p>
      </Container>
    </Flex>
  );
}

export default WhyJoin;
