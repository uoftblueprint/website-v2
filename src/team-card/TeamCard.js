import React from "react";
import Profile from "./Profile";
import { MantineProvider, Title, SimpleGrid } from "@mantine/core";
import '@mantine/core/styles.css';
import "./TeamCard.css"

function TeamCard({title, team_members}) {
    //using index as key prop? or should use uuid
    return (
        <MantineProvider>
            <Title ta="center" pb="xl" c="#0078E8">{title}</Title>

            <SimpleGrid spacing="lg" cols={{lg:6, sm:4, xs:2}}>
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