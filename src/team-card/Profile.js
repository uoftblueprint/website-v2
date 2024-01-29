'use client'

import React from "react";
import { Avatar, Text } from "@mantine/core";
import '@mantine/core/styles.css';

function Profile({name, role, profilePicture}) {
    return (
        <div>
            <Avatar src={profilePicture}/>
            <Text>{name}</Text>  
            <Text>{role}</Text>
        </div>
    )
}

export default Profile