import { Container, Title, Text, Image } from "@mantine/core";
import "./TopSection.module.css";

export default function TopSection() {
  // Top Section of Page
  // Figure out how to center on home page
  return (
    <Container className="container" size="90%">
      <Title className="title">Hi! 👋 We’re Blueprint.</Title>
      <Text c="#0078e8" className="text">
        We’re a group of passionate students at the University of Toronto
        dedicated to building software to give back to our community!
      </Text>
      <Image
        className="image"
        alt="Group of Developpers"
        src="people_images/group.svg"
      ></Image>
    </Container>
  );
}
