import { Accordion, Container, Title, Divider, Text } from "@mantine/core";
import "./for-students-FAQ.css";

function FaqCard({ faq_info }) {
  const items = faq_info.map((faq, index) => (
    <Accordion.Item key={index} value={faq.question}>
      <Accordion.Control className="question">
        <b>{faq.question}</b>
      </Accordion.Control>

      <Accordion.Panel>{faq.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container fluid p="lg">
      <Title>FAQ</Title>
      <Text>
        Here are some frequently asked questions that we’ve compiled! If you
        have further questions, please contact us on our Instagram or
        contact@uoftblueprint.org.
      </Text>

      <Divider my="lg"></Divider>

      <Accordion variant="separated">{items}</Accordion>
    </Container>
  );
}

export default FaqCard;
