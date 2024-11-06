import "@/for-students-process/Process.css";
import { Anchor, Image, Grid, Title } from "@mantine/core";

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
    <Grid.Col span={3} key={info.title}>
      <div className="img-text-container">
        <Image src={info.img} alt={info.title + " img"} />
        <div className="caption-container">
          <Anchor href={info.link} className="text">
            {info.title}
          </Anchor>
        </div>
      </div>
    </Grid.Col>
  ));

  return (
    <div className="process">
      <div className="text-container">
        <Title className="title">Process</Title>
        <h1 className="text">
          Here&apos;s an overview of how we hire new members!
        </h1>
      </div>
      <Grid justify="space-between" align="stretch" className="grid">
        {process}
      </Grid>
    </div>
  );
}

export default Process;
