import {
  Container,
  Stack,
  SimpleGrid,
  Title,
  Text,
  Image,
  Group,
  Button,
} from "@mantine/core";
import "./white-section.css";
import Process from "src/forstudents-process/Process.tsx";

export default function WhiteSection() {
  const values_info = [
    { title: "Innovation", img: "about_page/placeholder.png" },
    { title: "Problem-solving", img: "about_page/placeholder.png" },
    { title: "Team Work", img: "about_page/placeholder.png" },
  ];

  return (
    <>
      <Container className="top-section">
        <Title className="about-title top-title">About Us</Title>
        <Text className="heading-text">
          Something something about Blueprint being cool!
        </Text>
        <Image className="top-image" src="/about_page/team_at_work.svg" />
      </Container>

      <Container size="100%" className="bottom-section grey-blue-text">
        <Stack className="image-wrapper top-wrapper">
          <Image
            className="medal-img overlay star"
            src="./about_page/star.svg"
            alt="star"
          ></Image>
          <Title className="about-title">Our Mission</Title>
          <Text className="heading-text">
            At UofT Blueprint, we want to leverage the tech skills of our
            students and give back to the community around us.
          </Text>
          <Image
            className="mission-image"
            src="./about_page/replace_stock_image.png"
            alt="stock photo"
          ></Image>
        </Stack>

        <Stack className="image-wrapper">
          <Image
            className="medal-img overlay"
            src="./about_page/medal-star.svg"
            alt="medal"
          ></Image>
          <Title className="about-title">Our Impact</Title>
          <Text className="heading-text">
            Since 2020, over 100+ students have joined the UofT Blueprint
            family. Together, we have partnered with 8 NPOs over 3 years
            delivering custom-built websites and mobile apps.
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
              <Text className="impact-text">years</Text>
            </Stack>

            <Stack className="impact-number-container">
              <Text c="#0078E8" className="impact-number">
                8
              </Text>
              <Text className="impact-text">NPOs</Text>
            </Stack>

            <Stack className="impact-number-container">
              <Text c="#4CA3F4" className="impact-number">
                100+
              </Text>
              <Text className="impact-text">students</Text>
            </Stack>
          </SimpleGrid>
        </Stack>

        <Stack className="image-wrapper">
          <Title className="about-title">Our Values</Title>
          <Text className="heading-text">
            Originally defined by Cal Blueprint, we at UofT Blueprint continue
            to follow and uphold the five core Blueprint values.
          </Text>
          <Group justify="center" gap="5vw">
            {values_info.map((value_info) => (
              <Stack>
                <Image src={value_info.img} alt="value images"></Image>
                <Text className="impact-text">{value_info.title}</Text>
              </Stack>
            ))}
          </Group>
        </Stack>

        <Stack className="image-wrapper sponsors-section">
          <Title className="about-title">Our Sponsors</Title>
          <Text className="heading-text" mb="30px">
            Thank you to our sponsors for giving us the opportunity to give back
            to our university community by holding events for our club members
            and the greater UofT community!
          </Text>
          <Button
            rightSection={<Image className={"arrow"} src="chevron-right.svg" />}
            radius="lg"
            href=""
            component="a"
            target="_blank"
            size="md"
            mb="30px"
          >
            Become a Sponsor
          </Button>
          <Group justify="center" align="center">
            <Image
              className="sponsor-image"
              src="about_page/guidewire.png"
              alt="guidewire"
            ></Image>
            <Image
              className="sponsor-image"
              src="about_page/starterhack.png"
              alt="starterhack"
            ></Image>
          </Group>
        </Stack>
      </Container>
    </>
  );
}
