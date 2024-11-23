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
          style={{margin: "20% 0% 0% 40%",
            maxWidth: "35%",
            height: "auto",}}
          alt= {criteria}
          className={"project-image"}
        />
      </div>
      <div>
           <Title
           style={{color: "#0078e8",
             fontFamily: "Poppins, sans-serif",
             fontSize: "1.8vw",
             fontWeight: "bold",
             margin: "1.5vw 0 0.5vw 0",
             textAlign: "center"}}
           >
             {criteria}
           </Title>
           <Text
           style={{fontFamily: "Poppins, sans-serif",
             fontSize: "1.2vw",
             textAlign: "center"}}>
             {description}
           </Text>
      </div>
    </SimpleGrid>

  );
}
