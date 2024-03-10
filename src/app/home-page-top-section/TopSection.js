import { Container, Title, Text, Image } from "@mantine/core";
import "./TopSection.css";

export default function TopSection() {
  // Top Section of Page
  // Figure out how to center
  return (
    <Container size="90%">
      <Title className="title">Hi! 👋 We’re Blueprint.</Title>
    <Text className="text">
      We’re a group of passionate students at the University of Toronto
      dedicated to building software to give back to our community!
    </Text>
       <Image
        className="image"
        alt="Group of People"
        src="team at work_solid I 1.png"
      ></Image>
    </Container>
  );
}
