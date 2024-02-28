import { Accordion } from "@mantine/core";
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
    <Accordion multiple variant="filled" defaultValue="Apples">
      {items}
    </Accordion>
  );
}

export default FaqCard;
