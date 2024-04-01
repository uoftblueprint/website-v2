"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import { MantineProvider, AppShell } from "@mantine/core";
import Navbar from "@/components/Navbar/Navbar";
import SideNavMenu from "@/components/Navbar/SideNavMenu";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const links = [
  { link: "/about", label: "About" },
  { link: "/projects", label: "Projects" },
  { link: "/team", label: "Team" },
  { link: "/chapters", label: "Chapters" },
];

export default function RootLayout({ children }) {
  const [isSideNavOpened, setIsSideNavOpened] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <AppShell
            header={{ height: "96px" }}
            footer={{ height: "10vw" }} // adjust based on footer height
            style={{ position: "relative" }}
            navbar={{
              width: 300,
              breakpoint: "md",
              collapsed: { mobile: !isSideNavOpened, desktop: true },
            }}
            transitionDuration={0}
          >
            <AppShell.Header>
              <Navbar
                opened={isSideNavOpened}
                toggleOpened={() => setIsSideNavOpened(!isSideNavOpened)}
                links={links}
              />
            </AppShell.Header>

            <AppShell.Navbar style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
              <SideNavMenu links={links} />
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>

            <AppShell.Footer style={{ position: "absolute" }}>
              {<Footer></Footer>}
            </AppShell.Footer>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
