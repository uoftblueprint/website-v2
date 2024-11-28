"use client";
import "@/decisions-card/DecisionCriteriaCard";
import { Container, Image, SimpleGrid, Grid, Text, Title, Stack } from "@mantine/core";
import Banner from "@/components/Banner/Banner";
import "@mantine/core/styles.css";
import "./for-nonprofits.css"
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
                textAlign: "center",
                }}>
          <Title
          style={{color: "#0078e8",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "calc(15px + 2vw)",
                  zIndex: 1,
                  padding: "10% 0 10%",
                  lineHeight: "normal"}}>
            Decision Criteria
          </Title>
        </Container>
        <SimpleGrid
          cols={{base: 1, sm: 2}} spacing="xl"
          style={{ maxWidth: '80vw', margin: 'auto', display: 'flex', flexWrap:'wrap', justifyContent: 'center'}}
        >
              <Image
                style={{
                  width: "80%",
                  height: "auto",
                  position: "relative"}}
                src="/about_page/placeholder.png" />
              <Text className={"responsive-text"}>
                Although we want to help as many organizations as
                possible, we can only work with a few nonprofits at
                a time because of the amount of resources each
                partnership requires. As such, we use the following
                criteria to find projects with the best fit.
              </Text>
        </SimpleGrid>

        <Grid style={{paddingTop: '2vw'}}>
          <Grid.Col span={{ base: 9, sm: 3.8 }}>
            <DecisionCard criteria={"Impact"} description={"How much will your project impact the community?"} image={"/nonprofit_page/Impact.svg"}/>
          </Grid.Col>
          <Grid.Col span={{ base: 9, sm: 3.8 }}>
            <DecisionCard criteria={"Necessity"} description={"How vital is your project to your non-profit organization?"} image={"/nonprofit_page/Necessity.svg"}/>
          </Grid.Col>
          <Grid.Col span={{ base: 9, sm: 3.8 }}>
            <DecisionCard criteria={"Scope"} description={"Is your project achievable within the allotted timeline?"} image={"/nonprofit_page/Scope.svg"}/>
          </Grid.Col>
          <Grid.Col span={{ base: 9, sm: 3.8 }} offset={{ base: 0, sm: 1.5 }}>
            <DecisionCard criteria={"Credibility"} description={"Is there evidence that your project will have an impact?"} image={"/nonprofit_page/Credibility.svg"}/>
          </Grid.Col>
          <Grid.Col span={{ base: 9, sm: 3.8 }}>
            <DecisionCard criteria={"Technical Fit"} description={"Does your project use the capabilities of technology?"} image={"/nonprofit_page/Technical.svg"}/>
          </Grid.Col>
        </Grid>

        <Container
        style={{textAlign: "center"}}>
          <Title
          style={{
            margin:"10% 0 10% 0%",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bolder",
            fontSize: "calc(15px + 2vw)"
          }}>
            Ready to make an impact?
          </Title>
        </Container>
        <Container>
          <Text
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "calc(15px + 1vw)",
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
