import { Container, Flex, Button } from "@mantine/core";
import "@/components/Banner/Banner.css";
import React from "react";

function ImageBanner({ src }) {
	return (
		<Container
			fluid
			className="non-hero banner-container image-banner"
			style={{
				backgroundImage: `linear-gradient(to bottom, #0078e8, rgba(0, 0, 0, 0)), url(${src})`,
			}}
		></Container>
	);
}

export default ImageBanner;
