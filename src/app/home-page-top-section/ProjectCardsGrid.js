import { Container, SimpleGrid, Title } from "@mantine/core";
import { ProjectsCard } from "@/projects-card/ProjectsCard.tsx";
import "src/app/home-page-top-section/ProjectCardsGrid.css";

function CardGrid({ cards_info }) {
  // card_info consists of objects which contain the following properties:
  // project image, project title, project description, project link

  return (
    <Container fluid className="cards-grid">
      <Title className="project-cards-title">Current Projects</Title>
      <SimpleGrid cols={{ sm: 2, base: 1 }} spacing="lg">
        {cards_info.map((project, index) => (
          <ProjectsCard
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link ? project.link : null}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default CardGrid;
