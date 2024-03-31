import "@/forstudents-process/Process.css";
import { Anchor, Image, Grid } from "@mantine/core";

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
    <Grid.Col span={"content"}>
      <div className="img-text-container">
        <Image src={info.img} alt={info.title + " img"} />
        <div className="caption-container">
          <Anchor
            href={info.link}
            className="text"
            style={{ fontSize: "1.8vw", fontWeight: 400 }}
          >
            {info.title}
          </Anchor>
        </div>
      </div>
    </Grid.Col>
  ));

  return (
    <div>
      <div className="text-container">
        <h1 className="text" style={{ fontSize: "4vw", fontWeight: 600 }}>
          Process
        </h1>

        <h1 className="text" style={{ fontSize: "2vw", fontWeight: 400 }}>
          Here's an overview of how we hire new members!
        </h1>
      </div>

      <Grid justify="space-between" className="grid">
        {process}
      </Grid>
    </div>
  );
}

export default Process;
