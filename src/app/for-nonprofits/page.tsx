"use client";
import "@/decisions-card/DecisionCriteriaCard";
import { Container, Image, SimpleGrid, Text, Title, Stack } from "@mantine/core";
import Banner from "@/components/Banner/Banner";
import "@mantine/core/styles.css";
import Footer from "@/components/Footer/Footer";
import { DecisionCard } from "@/decisions-card/DecisionCriteriaCard";

export default function ProjectsPage() {
  return (
    <div>
      <Banner
        title="For Nonprofits"
        text="As a partner, Blueprint will work with you to develop techonology that turns your vision into a reality,
         completely free of charge!"
      />
      <Stack style={{padding: "2vw 1vw"}} gap="sm">
        <Container className="top-section"
        style={{display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#e7f3ff",
                textAlign: "center"}}>
          <Title
          style={{color: "#0078e8",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "3vw",
                  zIndex: 1,
                  padding: "10% 0 10%",
                  lineHeight: "normal"}}>
            Decision Criteria
          </Title>
        </Container>
        <SimpleGrid
          cols={{base: 1, sm: 2}} spacing="xs"
          style={{ maxWidth: '80vw', margin: 'auto' }}
        >
          <div>
            <center>
              <Image
                style={{
                  maxWidth: "70%",
                  height: "auto",
                  objectFit: "contain",
                  position: "relative",
                  alignItems: "end"}}
                src="/about_page/placeholder.png" />
            </center>
          </div>
          <div>
            <center>
              <Text
                style={{color: "#0078e8",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "2vw",
                        textAlign: "left",
                        maxWidth: "85%",
                        justifyContent: "center"}}
                >
                Although we want to help as many organizations as
                possible, we can only work with a few nonprofits at
                a time because of the amount of resources each
                partnership requires. As such, we use the following
                criteria to find projects with the best fit.
              </Text>
            </center>
          </div>
        </SimpleGrid>

        <SimpleGrid
        cols={3}
        verticalSpacing={{ base: "lg", sm: "lg" }}
        style={{margin:"5% 8% 5% 8%"}}>
          <DecisionCard criteria={"Impact"} description={"How much will your project impact the community?"} image={"/nonprofit_page/Impact.svg"}/>
          <DecisionCard criteria={"Necessity"} description={"How vital is your project to your non-profit organization?"} image={"/nonprofit_page/Necessity.svg"}/>
          <DecisionCard criteria={"Scope"} description={"Is your project achievable within the allotted timeline?"} image={"/nonprofit_page/Scope.svg"}/>
        </SimpleGrid>

        <SimpleGrid
          cols={2}
          verticalSpacing={{ base: "lg", sm: "lg" }}
          style={{margin:"0% 20% 10% 20%"}}>
          <DecisionCard criteria={"Credibility"} description={"Is there evidence that your project will have an impact?"} image={"/nonprofit_page/Credibility.svg"}/>
          <DecisionCard criteria={"Technical Fit"} description={"Does your project use the capabilities of technology?"} image={"/nonprofit_page/Technical.png"}/>
        </SimpleGrid>

        <Container
        style={{textAlign: "center"}}>
          <Title
          style={{
            margin:"10% 0 10% 0%",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bolder",
            fontSize: "3vw"
          }}>
            Ready to make an impact?
          </Title>
        </Container>
        <Container>
          <Text
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "2vw",
              margin: "0 0 5vw 0",
              textAlign: "center"
            }}>
            Let&apos;s talk about how we can help you! Reach out to us at contact@uoftblueprint.org or any of our social media accounts.
          </Text>
        </Container>
      </Stack>
      <Footer></Footer>
    </div>
  );
}
