"use client";
import React from "react";
import _ from "@/config/firebase";
import { ChaptersCard } from "@/chapters-card/ChaptersCard";

export default function Home() {
  return (
    <div>
      {
        <ChaptersCard
          name="gaaaab"
          description="bennnnn"
          link="https://google.com"
        />
      }
    </div>
  );
}
