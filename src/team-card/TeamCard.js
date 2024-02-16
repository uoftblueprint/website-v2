'use client'

import React from "react";
import Profile from "./Profile";
import { createTheme, MantineProvider, Title, SimpleGrid, Center } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import '@mantine/core/styles.css';
import "./TeamCard.css"

const theme = createTheme({
    breakpoints: {
      xs: '10em',
    },
  });

function TeamCard({title, team_members}) {
    const small = useMediaQuery('(max-width: 500px)');
    const titleSize = small ? "20px" : "30px"

    return (
        <MantineProvider theme={theme}>
            <Center>
                <Title size={titleSize} c="#0078E8">{title}</Title>

                <SimpleGrid spacing="lg" cols={{lg:6, sm:4, xs:2}}>
                    {team_members.map( (team_member, index) => 
                        <Profile 
                            key={index}
                            name={team_member.name} 
                            role={team_member.role} 
                            profilePicture={team_member.profilePicture}/>
                    )}
                </SimpleGrid>
            </Center>
        </MantineProvider>
        
    )
}

export default TeamCard