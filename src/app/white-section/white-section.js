import { Container, Stack, SimpleGrid, Title, Text } from "@mantine/core";
import "./white-section.css";

export default function WhiteSection() {
  return (
    <Container size="100%" className="bottom-section grey-blue-text">
      <Stack>
        <Title className="about-title">Our Impact</Title>
        <Text>
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
    </Container>
  );
}
