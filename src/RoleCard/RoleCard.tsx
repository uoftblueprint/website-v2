import { Card, Image, Text, Button, Center } from "@mantine/core";
import "./RoleCard.css";

export default function RoleCard({ role, link }) {
  return (
    // <Card className='roleCard' shadow="lg" radius="xl" p="xl" style={{ width: 'calc(33.333% - 20px)', marginBottom: '20px' }}>
    <Card className="roleCard" shadow="lg" radius="xl" p="xl">
      <Center>
        <Image className="moniter" src="/monitor.svg" w="4vw" h="4vw" />
      </Center>
      <Center my="xs">
        <Text c="#0078E8" fw={500} className="roleTitle">
          {role}
        </Text>
      </Center>
      <Center>
        <Button
          rightSection={
            <Image
              className="chevron"
              src="/chevron-right.svg"
              w="1.5vw"
              h="1.5vw"
            />
          }
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
