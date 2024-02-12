"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import { MantineProvider, AppShell } from "@mantine/core";
import Navbar from "@/components/Navbar/Navbar";
import SideNavMenu from "@/components/Navbar/SideNavMenu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const [opened, setOpened] = useState(false);
    return (
        <html lang="en">
            <body className={inter.className}>
                <MantineProvider>
                    <AppShell
                        header={{ height: "8vh" }}
                        footer={{ height: "283px" }} // adjust based on footer height
                        style={{ position: "relative" }}
                        navbar={{
                            width: 300,
                            breakpoint: 'sm',
                            collapsed: { mobile: !opened, desktop: true},
                        }}
                    >
                        <AppShell.Header>
                            <Navbar opened={opened} toggleOpened={() => setOpened(!opened)}/>
                        </AppShell.Header>

                        <AppShell.Navbar>
                            <SideNavMenu opened={opened} toggleOpened={() => setOpened(!opened)} />
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
