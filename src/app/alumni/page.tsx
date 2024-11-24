"use client";

import Banner from "@/components/Banner/Banner";
import TeamCard from "@/team-card/TeamCard";
import { Container, Divider, Flex } from "@mantine/core";

const alumni = [
    {
        name: "Valerie Yip",
        role: "Software Developer",
        linkedinLink: "https://www.linkedin.com/in/valerie-yip-fh/",
        profilePicture: "team/tfss/valerie.png",
    }, 
    {
        name: "Youssef Soliman",
        role: "Software Developer",
        linkedinLink: "https://www.linkedin.com/in/youssefsoliman/",
        profilePicture: "team/tfss/youssef.jpg"
    }
];

export default function Alumni() {
    return (
        <div className="alumni">
            <Banner 
                title = {"Meet our Alumni"}
                text={
                    "Special thanks to all who have given their time and effort to our cause for social good. We could not have done it without you!"
                }
            />
            <Flex 
                justify={"center"}
                align={"center"}
                direction="column"
                w="100%"
                pos={"relative"}
            >
                <Container 
                    className="alumni-group" 
                    m={"10vh 0 10vh 0"}
                    w="100%" 
                    fluid
                >
                    <TeamCard 
                        title="Alumni" 
                        team_members={alumni} 
                    />
                </Container>
                <Divider w="40%" color="#0078E8" size={"2px"} />
            </Flex>    
        </div>
    );
}
