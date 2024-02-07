import React from "react";
import { Container, Flex, Button} from "@mantine/core";
import "@mantine/core/styles.css";
import "@/components/Banner/Banner.css";

export default function Banner({title, text, button = { text: null, link: null}}) {
    // button is an optional prop that defines if button exists or not.

    return (
        <Container fluid className="non-hero banner-container" >
            <Flex justify={"end"} align={"center"} h={"100%"} direction={"column"} rowGap={"20px"} className="banner-flex"> 
                <h1 className="banner-title">{title}</h1>
                <div className="banner-text">{text}</div>
                {
                    button.text ? 
                    <Button size={"xl"} className="banner-button" variant="outline" color="#FFFFFF" component="a" href={button.link}>{button.text}</Button> : 
                    <></>
                }
            </Flex>
        </Container>
    )
}
