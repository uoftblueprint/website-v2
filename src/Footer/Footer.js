import React from "react";
import { Container, Grid, Group, Button, Anchor } from "@mantine/core";
import "@mantine/core/styles.css";
import "./Footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="main-footer">
      {/* <Container> */}
        <Group className="footer-menu">
          <a className="logo" href="/">
            <Image
              src="/logo-with-text.svg"
              alt="Blueprint Logo"
              width={432}
              height={83}
              className="logo"
            ></Image>
          </a>

        <Anchor href={"/about"} className="footer-text" underline="hover">
            {" "}
            About{" "}
          </Anchor>
          <Anchor href={"/projects"} className="footer-text">
            Projects
          </Anchor>
          <Anchor href={"/about"} className="footer-text">
            {" "}
            Team{" "}
          </Anchor>
          <Anchor href={"/chapters"} className="footer-text">
            Chapters
          </Anchor>
          <Anchor href={"/join"} className="footer-text">
            Join
          </Anchor>
          
        </Group>
      {/* </Container> */}
    </footer>
  );
}
