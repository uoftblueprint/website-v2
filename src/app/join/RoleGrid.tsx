"use client";
import React from "react";
import _ from "@/config/firebase";
import RoleCard from "../../RoleCard/RoleCard";
import { Flex } from "@mantine/core";

function RoleGrid() {
    const roles = ["Software Developer", "Product Manager", "Project Lead"];

    return (
        <>
            <Flex
                align="center"
                justify="center"
                className="whyjoin"
                direction={{ xs: "row", base: "column" }}
                columnGap={{ md: "60px", base: "30px" }}
            >
                <div className="text-container">
                    <h1 className="text" style={{ fontSize: "4vw", fontWeight: 600 }}>
                        Open Roles
                    </h1>
                </div>
            </Flex>
            <div className="application-container" style={{ marginBottom: "60px"}}>
                {roles.map((role, index) => (
                    <RoleCard key={index} role={role} link={undefined}></RoleCard>
                ))}
            </div>
        </>
    );
}

export default RoleGrid;