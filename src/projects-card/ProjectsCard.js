import { Card, Image } from "@mantine/core";
import "@mantine/core/styles.css";
import "../projects-card/ProjectsCard.css";

export function ProjectsCard({image, name, description}) { {/* What order is prefered? */}
    return (
        <Card padding="lg">
            <Card.Section>
                <Image
                    src={image}
                    radius="md" // How to change radius for bottom two edges?
                    h={200} // Prevents layout jumps. Replace 200 with something else.
                    alt= {name}
                />
            </Card.Section>

            <Card.Section c="#0078E8" className={"project-name"}>
                {name}
            </Card.Section>

            <Card.Section c="0078E8" className={"project-description"}>
                {description}
            </Card.Section>
        </Card>
    )
}