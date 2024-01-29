'use client'

import React from "react";
import { Center, Avatar, Text } from "@mantine/core";
import '@mantine/core/styles.css';
import classes from "./Profile.css"


function Profile({name, role, profilePicture}) {
    return (
        <Center>
        {/* <div className={classes.profile}> */}
            <Avatar size="128px" src={profilePicture}/>
            <Text pt="md" size="18px" ta="center" c="#000">{name}</Text>  
            <Text pt="5px" size="16px" ta="center" c="#C4C4C4">{role}</Text>
        {/* </div> */}
        </Center>
    )
}

export default Profile