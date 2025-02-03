import { Container, Title, Text, Image } from "@mantine/core";

export default function TopSection() {
  return (
    <Container
      size="90%"
      style={{
        padding: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px auto 5% auto",
        color: "#0078e8",
        textAlign: "center",
        paddingBottom: "20px",
      }}
    >
      {/* TODO: FIX THIS FROM BEING SO HUGE AND BLOWN UP ON LARGE SCREENS */}
      <Title style={{ fontSize: "calc(18px + 2vw)" }}>
        Hi! 👋 We’re Blueprint.
      </Title>
      <Text style={{ fontSize: "calc(15px + 0.75vw)", maxWidth: "80%" }}>
        We’re a group of passionate students at the University of Toronto
        dedicated to building software to give back to our community!
      </Text>
      <Image
        style={{ width: "80%" }}
        alt="Group of People"
        src="/people_images/teamwork.svg"
      ></Image>
    </Container>
  );
}
