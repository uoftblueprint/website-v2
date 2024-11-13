import { Group, Anchor } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import "./Footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="main-footer">
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

        <Anchor href={"/about"} className="footer-text">
          About
        </Anchor>
        <Anchor href={"/projects"} className="footer-text">
          Projects
        </Anchor>
        <Anchor href={"/team"} className="footer-text">
          Team
        </Anchor>
        <Anchor href={"/chapters"} className="footer-text">
          Chapters
        </Anchor>
        <Anchor href={"/join"} className="footer-text">
          Join
        </Anchor>
      </Group>

      <h5 className="copyright-text"> &copy; Blueprint 2023</h5>
    </footer>
  );
};

export default Footer;
