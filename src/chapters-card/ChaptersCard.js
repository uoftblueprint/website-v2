import React from "react";
import { Card, Anchor } from "@mantine/core";

export function ChaptersCard({ name, description, link }) {
    return (
        <Card
            shadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            padding="lg"
            radius="30"
            style={{ flexShrink: 0 }}
        >
            <Card.Section
                c="#0078E8"
                style={{ fontSize: "36px", fontWeight: "700", margin: "0" }}
            >
                {name}
            </Card.Section>

            <Card.Section
                c="#003E77"
                style={{ fontSize: "24px", fontWeight: "400", margin: "0" }}
            >
                {description}
            </Card.Section>

            <Card.Section style={{ margin: "0", paddingTop: "16px" }}>
                <Anchor
                    href={link}
                    target="_blank"
                    c="#0078E8"
                    underline="hover"
                    style={{ fontSize: "24px", fontWeight: "500" }}
                >
                    Learn more
                </Anchor>
            </Card.Section>
        </Card>
    );
}
