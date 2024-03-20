import { Container, Title, Text, Image, Flex, Button } from "@mantine/core";
import "./BottomSection.css";

export default function BottomSection() {
  return (
    <Container size="90%">
      <Title className="title">How We Do It</Title>

      <Flex
        justify="center"
      >
        <Container>
          <Image
            className="image"
            alt="Developer"
            src="/people_images/developer.svg"
          />

          <Title>Students</Title>
          <Text>
            Do you want to give back to your community while building real-life technological solutions
            for real-life stakeholders? Join our growing team of passionate students in tech to make a difference!
          </Text>
          
          {/* Button is currently not happy :( */}
          <Button variant="light">
            Join Us
          </Button>

        </Container>

        <Container>
          
          <Image
            className="image"
            alt="Healthcare Worker"
            src="/people_images/medical.svg"
          />

          <Title>Non-Profit Partners</Title>
          <Text>
            Do you want to give back to your community while building real-life technological solutions
            for real-life stakeholders? Join our growing team of passionate students in tech to make a difference!
          </Text>

          <Button variant="light">
            Join Us
          </Button>
        </Container>
    
      </Flex>
    </Container>
  );
}
