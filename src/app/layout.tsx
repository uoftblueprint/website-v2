"use client";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import { MantineProvider, AppShell } from "@mantine/core";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <AppShell
            header={{ height: "8vh" }}
            footer={{ height: "17.6875rem" }} // adjust based on footer height
            style={{ position: "relative" }}
          >
            <AppShell.Header>{<Navbar></Navbar>}</AppShell.Header>

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