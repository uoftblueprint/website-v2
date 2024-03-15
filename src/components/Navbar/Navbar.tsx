import Image from "next/image";
import { Burger, Button, Container } from "@mantine/core";
import "@/components/Navbar/Navbar.css";
import "@/components/Navbar/SideNavMenu.css";
import "@mantine/core/styles.css";

function Navbar({ opened, toggleOpened, links }) {
  const items = links.map((link) => (
    <Button
      variant="transparent"
      component="a"
      href={link.link}
      color="white"
      classNames={{ label: "nav-link" }}
      key={link.label}
    >
      {link.label}
    </Button>
  ));

  items.push(
    <Button variant="filled" color="#FFFFFF" className="nav-join-btn">
      Join our Team!
    </Button>,
  );

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
        <Container visibleFrom="md">{items}</Container>
        <Burger
          opened={opened}
          onClick={toggleOpened}
          hiddenFrom="md"
          size="md"
          color="#FFFFFF"
        />
      </div>
    </header>
  );
}

export default Navbar;
