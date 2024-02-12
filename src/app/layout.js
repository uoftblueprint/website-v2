"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import { MantineProvider, AppShell } from "@mantine/core";
import Navbar from "@/components/Navbar/Navbar";
import SideNavMenu from "@/components/Navbar/SideNavMenu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isSideNavOpened, setIsSideNavOpened] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <AppShell
            header={{ height: "96px" }}
            footer={{ height: "283px" }} // adjust based on footer height
            style={{ position: "relative" }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { mobile: !isSideNavOpened, desktop: true },
            }}
          >
            <AppShell.Header>
              <Navbar
                opened={isSideNavOpened}
                toggleOpened={() => setIsSideNavOpened(!isSideNavOpened)}
              />
            </AppShell.Header>

            <AppShell.Navbar>
              <SideNavMenu
                opened={isSideNavOpened}
                toggleOpened={() => setIsSideNavOpened(!isSideNavOpened)}
              />
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>

            <AppShell.Footer style={{ position: "absolute" }}>
              {/* add footer here! */}
            </AppShell.Footer>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
