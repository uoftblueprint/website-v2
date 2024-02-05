import React from "react";
import { Grid } from "@mantine/core";
import "./logoShowCase.css";
import "@mantine/core/styles.css";

const logoShowCase = () => {
  return (
    <div className="main-grid">
      <Grid>
        <Grid.Col span={4}>1</Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
        <Grid.Col span={4}>3</Grid.Col>
      </Grid>
    </div>
  );
};

export default logoShowCase;
