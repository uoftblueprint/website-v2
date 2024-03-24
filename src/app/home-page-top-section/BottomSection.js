import {
  Container,
  Title,
  Text,
  Image,
  Flex,
  Button,
  Divider,
} from "@mantine/core";
import "./BottomSection.css";

export default function BottomSection() {
  return (
    <Container size="100%" className="container bottom-section">
      <Title className="title">How We Do It</Title>

      <Flex justify="center">
        <Container className="container">
          <Image
            className="image"
            alt="Developer"
            src="/people_images/developer.svg"
          />

          <Title>Students</Title>
          <Text>
            Do you want to give back to your community while building real-life
            technological solutions for real-life stakeholders? Join our growing
            team of passionate students in tech to make a difference!
          </Text>

          {/* Button is currently not happy :( */}
          <Button
            variant="light"
            rightSection={
              <Image className={"arrow"} src="people_images/arrow-right.svg" />
            }
            component="a"
            href="https://www.google.com/maps"
            target="_blank"
          >
            Join Us
          </Button>
        </Container>

        <Divider orientation="vertical" color="#2F80ED" className="divider" />

        <Container className="container">
          <Image
            className="image"
            alt="Healthcare Worker"
            src="/people_images/medical.svg"
          />

          <Title>Non-Profit Partners</Title>
          <Text>
            Do you want to give back to your community while building real-life
            technological solutions for real-life stakeholders? Join our growing
            team of passionate students in tech to make a difference!
          </Text>

          <Button
            variant="light"
            rightSection={
              <Image className={"arrow"} src="people_images/arrow-right.svg" />
            }
            component="a"
            href="https://www.google.com/maps"
            target="_blank"
          >
            Join Us
          </Button>
        </Container>
      </Flex>
    </Container>
  );
}
