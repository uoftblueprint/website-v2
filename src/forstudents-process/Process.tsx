import "@/forstudents-process/Process.css";
import { Anchor, Image, Grid, Flex } from "@mantine/core";

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
    <Grid.Col span={"content"} key={info.title}>
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
    <Flex
      align="center"
      justify="space-between"
      className="whyjoin"
      direction={{ xs: "row", base: "column" }}
      columnGap={{ md: "60px", base: "30px" }}
    >
      <div className="text-container">
        <h1 className="text" style={{ fontSize: "4vw", fontWeight: 600 }}>
          Process
        </h1>

        <h1 className="text" style={{ fontSize: "2vw", fontWeight: 400 }}>
          Here&apos;s an overview of how we hire new members!
        </h1>
      </div>
      </Flex>

      <Grid justify="space-between" className="grid" style={{ marginBottom: "120px"}}>
        {process}
      </Grid>
    </div>
  );
}

export default Process;
