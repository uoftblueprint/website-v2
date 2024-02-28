import { Accordion, Container, Title, Divider } from "@mantine/core";
import "./for-students-FAQ.css";

function FaqCard({ faq_info }) {
  const items = faq_info.map((faq) => (
    <Accordion.Item key={faq.value} value={faq.value}>
      <Accordion.Control className="question">
        <b>{faq.value}</b>
      </Accordion.Control>

      <Accordion.Panel>{faq.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container>
      <Title>FAQ</Title>

      <Divider my="lg"></Divider>

      <Accordion>{items}</Accordion>
    </Container>
  );
}

export default FaqCard;
