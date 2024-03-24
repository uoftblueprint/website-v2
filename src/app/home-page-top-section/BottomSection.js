import {
  Container,
  Title,
  Text,
  Image,
  Flex,
  Button,
  Divider,
} from "@mantine/core";
import styles from "./BottomSection.module.css";

export default function BottomSection() {
  return (
    <Container
      size="100%"
      className={`${styles.container} ${styles["bottom-section"]}`}
    >
      <Title className={styles.title}>How We Do It</Title>

      <Flex justify="center">
        <Container className={styles.container}>
          <Image
            className={styles.image}
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
              <Image
                className={styles.arrow}
                src="people_images/arrow-right.svg"
              />
            }
            component="a"
            href="https://www.google.com/maps"
            target="_blank"
          >
            Join Us
          </Button>
        </Container>

        <Divider
          orientation="vertical"
          color="#2F80ED"
          className={styles.divider}
        />

        <Container className={styles.container}>
          <Image
            className={styles.image}
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
              <Image
                className={styles.arrow}
                src="people_images/arrow-right.svg"
              />
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
