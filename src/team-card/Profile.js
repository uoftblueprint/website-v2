import React from "react";
import { Center, Avatar, Text, Anchor } from "@mantine/core";
import '@mantine/core/styles.css';
import "./Profile.css"


function Profile({name, role, profilePicture, linkedinLink = ''}) {
    return (
        <Center>
            {linkedinLink ? <Anchor href={linkedinLink} target="_blank">
                                <Avatar size="120px" src={profilePicture}/>
                            </Anchor> :
                            
                            <Avatar size="120px" src={profilePicture}/>
                            }

            <Text pt="md" size="18px" ta="center" c="#000">{name}</Text>  
            <Text pt="5px" size="16px" ta="center" c="#C4C4C4">{role}</Text>
        </Center>
    )
}

export default Profile