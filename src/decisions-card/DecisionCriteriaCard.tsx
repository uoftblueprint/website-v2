import { Text, Image, SimpleGrid, Title } from "@mantine/core";
import "@mantine/core/styles.layer.css";

interface CriteriaCardProps {
  criteria: string;
  description: string;
  image: string;
}

export function DecisionCard({criteria, description, image}: CriteriaCardProps) {
  return (
    <SimpleGrid cols={2} spacing = "xs">
      <div>
        <Image
          src={image}
          radius="md"
          h={80}
          w={"auto"}
          style={{margin: "30% 0% 0% 30%"}}
          alt= {criteria}
          className={"project-image"}
        />
      </div>
      <div>
           <Title
           style={{color: "#0078e8",
             fontFamily: "Poppins, sans-serif",
             fontSize: 24,
             fontWeight: "bold",
             margin: "1.5vw 0 0.5vw 0",
             textAlign: "center"}}
           >
             {criteria}
           </Title>
           <Text
           style={{fontFamily: "Poppins, sans-serif",
             fontSize: 18,
             textAlign: "center"}}>
             {description}
           </Text>
      </div>
    </SimpleGrid>

  );
}
