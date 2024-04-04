import { Container, Title, Text, Image } from "@mantine/core";
import styles from "./TopSection.module.css";

export default function TopSection() {
  {
    console.log(Text.classes);
  }
  return (
    <Container className={styles.container} size="90%">
      <Title className={styles.title}>Hi! 👋 We’re Blueprint.</Title>
      <Text className={styles.text}>
        We’re a group of passionate students at the University of Toronto
        dedicated to building software to give back to our community!
      </Text>
      <Image
        className={styles.image}
        alt="Group of People"
        src="/people_images/teamwork.svg"
      ></Image>
    </Container>
  );
}
