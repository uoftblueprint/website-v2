import { Accordion, Container, Title, Divider, Image } from "@mantine/core";
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
    <Container fluid>
      <Title>FAQ</Title>

      <Divider my="lg"></Divider>

      <p>
        Here are some frequently asked questions that we’ve compiled! If you
        have further questions, please contact us on our Instagram or
        contact@uoftblueprint.org.
      </p>

      <Accordion
        variant="separated"
        // classNames={chevronStyles}
        chevron={<Image src="chevron-down.png" />}
      >
        {items}
      </Accordion>
    </Container>
  );
}

export default FaqCard;
