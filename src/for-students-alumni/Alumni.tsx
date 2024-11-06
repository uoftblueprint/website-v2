import { Center, Title } from "@mantine/core";

function Alumni() {
  return (
    <div
      className="alumni"
      style={{
        borderRadius: "0px 0px 300px 300px",
        backgroundColor: "#e7f3ff",
        color: "#0078e8",
      }}
    >
      <Center>
        <Title className="alumni-title" size="3vw" style={{ padding: "5%" }}>
          Our Alumni have gone on to innovate at:
        </Title>
      </Center>
    </div>
  );
}

export default Alumni;
