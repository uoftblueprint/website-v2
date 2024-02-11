'use client'

import React from "react";
import { Center, Avatar, Text, Anchor } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import '@mantine/core/styles.css';
import "./Profile.css"


function Profile({name, role, profilePicture, linkedinLink = ''}) {
    const small = useMediaQuery('(max-width: 500px)');
    const avatarSize = small ? "70px" : "120px"

    return (
        <Center>
            {linkedinLink ? <Anchor href={linkedinLink} target="_blank">
                                <Avatar size={avatarSize} src={profilePicture}/>
                            </Anchor> :
                            
                            <Avatar size={avatarSize} src={profilePicture}/>
                            }

            <Text pt="md" size="18px" ta="center" c="#000">{name}</Text>  
            <Text pt="5px" size="16px" ta="center" c="#C4C4C4">{role}</Text>
        </Center>
    )
}

export default Profile