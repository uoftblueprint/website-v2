import { Container, Stack, Group, Title, Text } from "@mantine/core";
import "./white-section.css";

export default function WhiteSection() {
  return (
    <Container size="100%" className="bottom-section">
      <Stack>
        <Title>Our Impact</Title>
        <Text>
          Since 2020, over 100+ students have joined the UofT Blueprint family.
          Together, we have partnered with 8 NPOs over 3 years delivering
          custom-built websites and mobile apps.
        </Text>

        <Group>
          <Stack>
            <Text>4</Text>
            <Text>years</Text>
          </Stack>

          <Stack>
            <Text>8</Text>
            <Text>NPOs</Text>
          </Stack>

          <Stack>
            <Text>100+</Text>
            <Text>students</Text>
          </Stack>
        </Group>
        
      </Stack>
    </Container>
  );
}
