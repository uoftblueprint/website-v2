import { Card, Image, Text, Button, Center } from "@mantine/core";
import "./RoleCard.css";

export default function RoleCard({ role, link }) {
  return (
    <Card className="roleCard" shadow="lg" radius="xl" p="xl">
      <Center>
        <Image className="moniter" src="/monitor.svg" />
      </Center>
      <Center my="xs">
        <Text c="#0078E8" fw={500} className="roleTitle">
          {role}
        </Text>
      </Center>
      <Center>
        <Button
          rightSection={<Image className="chevron" src="/chevron-right.svg" />}
          variant="filled"
          radius="xl"
          size="xl"
          className="buttonWithImage"
          ref={link}
        >
          Apply Now
        </Button>
      </Center>
    </Card>
  );
}
