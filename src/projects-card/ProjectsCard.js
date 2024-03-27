import { Card, CardSection, Image, Button } from "@mantine/core";
import "@mantine/core/styles.css";
import "../projects-card/ProjectsCard.css";

export function ProjectsCard({ name, description, image, onClick = null }) {
  return (
    <Card padding="lg" className="project-card">
      <CardSection className={"image-container"}>
        <Image src={image} radius="lg" alt={name} className={"image"} />
      </CardSection>

      <CardSection c="#0078E8" className={"project-name"}>
        {name}
      </CardSection>

      <CardSection c="#0078E8" className={"project-description"}>
        {description}
      </CardSection>

      {onClick ? (
        <Button
          size="md"
          radius="xl"
          className={"read-more-button"}
          variant="filled"
          color="#228BE6"
          //   component="a"
          //   href={link}
          onClick={onClick}
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
