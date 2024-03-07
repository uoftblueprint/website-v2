"use client";
import React from "react";
import { Container, Title, Text, Image } from "@mantine/core"
import _ from "@/config/firebase";

export default function Home() {
    return (
      // Top Section of Page
        <Container>
          <Title>Hi! 👋  We’re Blueprint.</Title>
          <Text>We’re a group of passionate students at the University of Toronto dedicated to building software to give back to our community!</Text>
          <Image alt="Group of People" src="team at work_solid I 1.png"></Image>
        </Container>
    );
    }