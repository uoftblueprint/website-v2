'use client'

import React from "react";
import Profile from "./Profile";
import { MantineProvider, Title, SimpleGrid } from "@mantine/core";
import '@mantine/core/styles.layer.css';

function TeamCard({title, team_members}) {
    return (
        <MantineProvider theme={theme}>
            <Title>{title}</Title>

            <SimpleGrid>
                {team_members.map( (team_member, index) => 
                            <Profile 
                            key={index}
                            name={team_member.name} 
                            role={team_member.role} 
                            profilePicture={team_member.profilePicture}/>
                )}
            </SimpleGrid>

        </MantineProvider>
    )
}

export default TeamCard