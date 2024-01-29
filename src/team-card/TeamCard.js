'use client'

import React from "react";
import Profile from "./Profile";
import { createTheme, MantineProvider, Title, SimpleGrid } from "@mantine/core";
import '@mantine/core/styles.layer.css';
import "./TeamCard.module.css"

const theme = createTheme({
    fontFamily: 'Poppins, sans-serif',
  });

function TeamCard({title, team_members}) {

    return (
        <MantineProvider theme={theme}>
            <Title className="teamName" ta="center" pb="xl" c="#0078E8">{title}</Title>

            <SimpleGrid style={{alignItems:"start",}} spacing="lg" cols={{lg:6, sm:4, xs:2}}>
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