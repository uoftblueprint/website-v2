import { Container, SimpleGrid, Title } from "@mantine/core";
import { ProjectsCard } from "src/projects-card/ProjectsCard.js";
import "src/app/home-page-top-section/ProjectCardsGrid.css";

function CardGrid({ cards_info }) {
  // card_info consists of objects which contain the following properties:
  // project image, project title, project description, project link

  let card = [
    {
      name: "The Period Purse",
      description:
        "A Menstrual Tracking application for iOS and Android, built by youth for youth.",
      image: "period-purse2.png",
    },
  ];

  return (
    <>
      {/* <ProjectsCard
        name={card[0].name}
        description={card[0].description}
        image={card[0].image}
      ></ProjectsCard> */}
      <Container fluid className="cards-grid">
        <Title className="project-cards-title">Current Projects</Title>
        <SimpleGrid cols={{ sm: 2, base: 1 }} spacing="lg">
          {cards_info.map((project, index) => (
            <Container className="max-width-card">
            <ProjectsCard
              
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link ? project.link : null}
            />
            </Container>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default CardGrid;
