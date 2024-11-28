import { Text, Image, SimpleGrid, Title } from "@mantine/core";
import "@mantine/core/styles.layer.css";

interface CriteriaCardProps {
  criteria: string;
  description: string;
  image: string;
}

export function DecisionCard({criteria, description, image}: CriteriaCardProps) {
  return (
    <SimpleGrid cols={2} spacing = "xs" style={{alignItems: 'center'}}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Image
          src={image}
          style={{
            width: "35%",
            height: "auto"}}
          alt= {criteria}
          className={"project-image"}
        />
      </div>
      <div>
           <Title
           style={{color: "#0078e8",
             fontFamily: "Poppins, sans-serif",
             fontSize: "calc(14px + 1vw)",
             fontWeight: "bold",
             margin: "1.5vw 0 0.5vw 0",
             textAlign: "center"}}
           >
             {criteria}
           </Title>
           <Text
           style={{fontFamily: "Poppins, sans-serif",
             fontSize: "calc(10px + 0.5vw)",
             textAlign: "center"}}>
             {description}
           </Text>
      </div>
    </SimpleGrid>

  );
}
