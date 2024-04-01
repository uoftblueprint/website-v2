import {
  Container,
  Stack,
  SimpleGrid,
  Title,
  Text,
  Image,
} from "@mantine/core";
import "./white-section.css";
import Process from "src/forstudents-process/Process.tsx";

export default function WhiteSection() {
  return (
    <Container size="100%" className="bottom-section grey-blue-text">
      <Stack className="image-wrapper">
        <Image
          className="medal-img overlay"
          src="medal-star.svg"
          alt="medal"
        ></Image>
        <Title className="about-title">Our Impact</Title>
        <Text className="heading-text">
          Since 2020, over 100+ students have joined the UofT Blueprint family.
          Together, we have partnered with 8 NPOs over 3 years delivering
          custom-built websites and mobile apps.
        </Text>

        <SimpleGrid
          cols={{ sm: 3, xs: 1 }}
          justify="center"
          className="impact-facts"
          wrap="wrap"
        >
          <Stack className="impact-number-container">
            <Text c="#4CA3F4" className="impact-number">
              4
            </Text>
            <Text>years</Text>
          </Stack>

          <Stack className="impact-number-container">
            <Text c="#0078E8" className="impact-number">
              8
            </Text>
            <Text>NPOs</Text>
          </Stack>

          <Stack className="impact-number-container">
            <Text c="#4CA3F4" className="impact-number">
              100+
            </Text>
            <Text>students</Text>
          </Stack>
        </SimpleGrid>
      </Stack>

      <Stack className="image-wrapper">
        <Title className="about-title">Our Values</Title>
        <Text className="heading-text">
          Originally defined by Cal Blueprint, we at UofT Blueprint continue to
          follow and uphold the five core Blueprint values.
        </Text>
        {/* <Process></Process> */}
      </Stack>

      <Stack className="image-wrapper">
        <Title className="about-title">Our Sponsors</Title>
        <Text className="heading-text">
          Thank you to our sponsors for giving us the opportunity to give back
          to our university community by holding events for our club members and
          the greater UofT community!
        </Text>
        {/* <Process></Process> */}
      </Stack>
    </Container>
  );
}
