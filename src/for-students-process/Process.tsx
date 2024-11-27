import "@/for-students-process/Process.css";
import { Anchor, Image, Title, Grid, Center } from "@mantine/core";

function Process({
  applicationImg,
  applicationLink,
  interviewImg,
  interviewLink,
  acceptancesImg,
  acceptancesLink,
}) {
  const info = [
    { title: "Online Application", img: applicationImg, link: applicationLink },
    { title: "Interview", img: interviewImg, link: interviewLink },
    { title: "Acceptances", img: acceptancesImg, link: acceptancesLink },
  ];

  const process = info.map((info) => (
    <Grid.Col span={{ base: 12, sm: 3, md: 3, lg: 3 }} key={info.title}>
      <div className="img-text-container" style={{ padding: "2vw" }}>
        <Image src={info.img} alt={info.title + " img"} />
        <Center>
          <Anchor href={info.link} className="text">
            {info.title}
          </Anchor>
        </Center>
      </div>
    </Grid.Col>
  ));

  return (
    <div className="process">
      <div className="text-container">
        <Title className="process-title">Process</Title>
        <h1 className="heading-text">
          Here&apos;s an overview of how we hire new members!
        </h1>
      </div>
      <Grid grow justify="space-between" className="grid">
        {process}
      </Grid>
    </div>
  );
}

export default Process;
