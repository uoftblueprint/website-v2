"use client";
import { Demo } from "@/for-students-FAQ/question.js";
import { MantineProvider } from "@mantine/core";

export default function Home() {
  return (
    <MantineProvider>
      <div>
        <Demo></Demo>
      </div>
    </MantineProvider>
  );
}
