import React from "react";
import { Container, Flex, Button} from "@mantine/core";
import "@mantine/core/styles.css";
import "@/components/Banner/Banner.css";

export default function Banner({title, text, buttonText = null }) {
    // buttonText is optional prop that defines if button exists or not.
    // if buttonText != null, button displays with text assigned to buttonText.

    return (
        <Container fluid className="non-hero banner-container" >
            <Flex justify={"end"} align={"center"} h={"100%"} direction={"column"} rowGap={"30px"} className="banner-flex"> 
                <h1 className="banner-title">{title}</h1>
                <div className="banner-text">{text}</div>
                {
                    buttonText ? 
                    <Button size={"xl"} className="banner-button" variant="outline" color="#FFFFFF">{buttonText}</Button> : 
                    <></>
                }
            </Flex>
        </Container>
    )
}
