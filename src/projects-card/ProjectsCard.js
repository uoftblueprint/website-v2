import { Card, CardSection, Image, Button } from "@mantine/core";
// import "@mantine/core/styles.css";
import "../projects-card/ProjectsCard.css";

// let mystyles = {
//   width: "300px",
//   margin: "0 auto",
//   overflow: "hidden",
//   position: "relative",
//   height: "50%",
// };
let mystyles = {};

export function ProjectsCard({ name, description, image, link = null }) {
  return (
    <Card padding="lg">
      <CardSection style={mystyles} className="container-test">
        {/* className={"project-image"}  */}
        <Image src={image} radius="md" alt={name} className={"project-image"} />
      </CardSection>

      <CardSection c="#0078E8" className={"project-name"}>
        {name}
      </CardSection>

      <CardSection c="#0078E8" className={"project-description"}>
        {description}
      </CardSection>

      {link ? (
        <Button
          size="md"
          radius="xl"
          className={"read-more-button"}
          variant="filled"
          color="#228BE6"
          component="a"
          href={link}
          rightSection={
            <Image className={"chevron"} src="/chevron-right.svg" />
          }
        >
          {"Read More"}
        </Button>
      ) : (
        <></>
      )}
    </Card>
  );
}
