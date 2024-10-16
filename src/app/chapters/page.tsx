"use client";
import "@/app/chapters/chapters.css"
import Banner from "@/components/Banner/Banner";
import { ChaptersCard } from "@/chapters-card/ChaptersCard";
import {Grid} from "@mantine/core";

//CANADA 
const infoCAN = [
  {title: "University of Waterloo", description: 'UWaterloo was the first Blueprint chapter, founded in 2015 🍁', link:'https://uwblueprint.org/'},
  {title: "University of Toronto", description: 'The second Canadian chapter to be established, started in 2020 🌿', link: 'https://uoftblueprint.org/'},
  {title: "Carleton University", description: "The third Blueprint chapter in Canada 🍂", link: "https://linktr.ee/cublueprint"},
]

const rowCAN = infoCAN.map((info)=> (
  <Grid.Col span={4} key={info.title} className={"card"}> <ChaptersCard name={info.title} description={info.description} link={info.link}></ChaptersCard></Grid.Col>
));

//USA
const infoUSA = [
  {title: "UC Berkley", description: 'Blueprint was founded at UC Berkeley in Spring 2013.', link:'https://calblueprint.org/'},
  {title: "UCLA", description: 'Blueprint at the University of California, Los Angeles was established in 2019 🚀', link: 'https://lablueprint.org/'},
  {title: "UC Irvine", description: "Our second Southern California Blueprint chapter was established in 2020 ♥️", link: "https://uciblueprint.org/#/"},
  {title: "University of Alabama", description: 'Another BP chapter that was started in the US ✨', link:'https://website.sdwight.workers.dev/'},
  {title: "University of Colorado Boulder", description: 'Currently in the process of establishing in CU Boulder 💕', link: 'https://calblueprint.org/chapters'},
];


const rowUSA = infoUSA.map((info)=> (
  <Grid.Col span={4} key={info.title} className={"card"}> <ChaptersCard name={info.title} description={info.description} link={info.link}></ChaptersCard></Grid.Col>
));



export default function ChaptersPage() {
  return (
    <div>
      <Banner
        title={"Chapters"}
        text={
          "Blueprints was founded at UC Berkeley in Spring 2013. Since then they've started scaling their impact and further mission by establishing chapters in different colleges around the world, including us!"
        }
        button={{ text: "Start a blueprint Chapter!", link: "/chapters" }}
      ></Banner>

      <h1 className="text">🇨🇦 Canada</h1>
        
      <Grid justify="flex-start" align={"flex-start"} gutter="3vw" className={"grid"}>
        {rowCAN}
      </Grid>

      <h1 className="text">🇺🇸 USA</h1>

      <Grid justify="flex-start" align={"flex-start"} gutter="3vw" className={"grid"}>
        {rowUSA}

      </Grid>

      
    </div>
  );
}
