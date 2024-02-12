import { Card, CardSection, Image } from "@mantine/core";
import "@mantine/core/styles.css";
import "../projects-card/ProjectsCard.css";

export function ProjectsCard({name, description, image}) {
    return (
        <Card padding="lg">
            <CardSection>
                <Image
                    src={image}
                    radius="md"
                    h={250}
                    alt= {name}
                />
            </CardSection>

            <CardSection c="#0078E8" className={"project-name"}>
                {name}
            </CardSection>

            <CardSection c="#0078E8" className={"project-description"}>
                {description}
            </CardSection>
        </Card>
    )
}