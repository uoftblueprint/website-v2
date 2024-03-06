import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Grid,
  Text,
  Flex,
  Image,
  ActionIcon,
  Avatar,
} from "@mantine/core";
import "./ProjectOverlay.css";

export default function ProjectOverlay() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size={"xl"}
        centered
        withCloseButton={false}
        radius={15}
      >
        <Grid gutter={"sm"}>
          <Grid.Col span={4}>
            <Image radius="md" h={"100%"} src="/the-period-purse.jpeg" />
          </Grid.Col>
          <Grid.Col span="auto" className="modal-content">
            <Modal.Header className="header">
              <Flex direction={"column"}>
                <Modal.Title className="title">Project Name</Modal.Title>
                <Text className="years">2022-2023</Text>
              </Flex>
              <Flex gap="xs">
                <ActionIcon
                  component="a"
                  size={45}
                  href={""}
                  variant="transparent"
                >
                  <Image src="/globe-fill.svg" alt="Web Icon" />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  size={45}
                  href={""}
                  variant="transparent"
                >
                  <Image src="/mark-github-24.svg" alt="GitHub Icon" />
                </ActionIcon>
              </Flex>
            </Modal.Header>
            <Modal.Body style={{ gap: "16px" }}>
              <Flex direction={"column"}>
                <Text className="section-header">DESCRIPTION OF PROJECT</Text>
                <Text className="section-description">Description</Text>
              </Flex>
              <Flex direction={"column"}>
                <Text className="section-header">ABOUT NON-PROFIT</Text>
                <Text className="section-description">Description</Text>
              </Flex>
              <Flex direction={"column"}>
                <Text className="section-header">TEAM</Text>
                {TeamsGrid()}
              </Flex>
            </Modal.Body>
          </Grid.Col>
        </Grid>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}

function TeamsGrid() {
  return (
    <Grid columns={10}>
      <Grid.Col span={2}>{TeamMember()}</Grid.Col>
      <Grid.Col span={2}>{TeamMember()}</Grid.Col>
      <Grid.Col span={2}>{TeamMember()}</Grid.Col>
      <Grid.Col span={2}>{TeamMember()}</Grid.Col>
      <Grid.Col span={2}>{TeamMember()}</Grid.Col>
      <Grid.Col span={2}>{TeamMember()}</Grid.Col>
      <Grid.Col span={2}>{TeamMember()}</Grid.Col>
      <Grid.Col span={2}>{TeamMember()}</Grid.Col>
      <Grid.Col span={2}>{TeamMember()}</Grid.Col>
      <Grid.Col span={2}>{TeamMember()}</Grid.Col>
      <Grid.Col span={2}>{TeamMember()}</Grid.Col>
      <Grid.Col span={2}>{TeamMember()}</Grid.Col>
    </Grid>
  );
}

function TeamMember() {
  return (
    <Flex gap={"4"}>
      <Avatar variant="light" radius="xs" src="" />
      <Flex direction={"column"} justify={"center"}>
        <Text className="member-name">NAME</Text>
        <Text className="member-role">ROLE</Text>
      </Flex>
    </Flex>
  );
}
