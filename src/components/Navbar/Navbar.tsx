import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";
import "@/components/Navbar/Navbar.css";
import "@mantine/core/styles.css";

const links = [
  { link: "/projects", label: "Projects" },
  { link: "/team", label: "Team" },
  { link: "/chapters", label: "Chapters" },
];

const items = links.map((link) => (
  <Button
    variant="transparent"
    component="a"
    href={link.link}
    color="white"
    classNames={{ label: "nav-link" }}
  >
    {link.label}
  </Button>
));

function Navbar() {
  return (
    <header className="nav">
      <a className="nav-logo_tag" href="/">
        <Image
          src="/logo-with-text.svg"
          alt="Blueprint Logo"
          height={30}
          width={150}
        />
      </a>
      <div className="nav-menu_container">
        {items}
        <Button variant="outline" color="white" className="nav-join-btn">
          Join our Team!
        </Button>
      </div>
    </header>
  );
}

export default Navbar;
