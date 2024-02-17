"use client";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import { MantineProvider, AppShell } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <AppShell
            header={{ height: "8vh" }}
            footer={{ height: "283px" }} // adjust based on footer height
            style={{ position: "relative" }}
          >
            <AppShell.Header>{/* add navbar here! */}</AppShell.Header>

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
