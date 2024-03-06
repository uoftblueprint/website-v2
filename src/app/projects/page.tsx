"use client";
import { useDisclosure } from "@mantine/hooks";
import ProjectOverlay from "@/project-overlay/ProjectOverlay";
import { Button } from "@mantine/core";

export default function ProjectsPage() {
  const [isOpened, { open, close }] = useDisclosure(false);
  return (
    <div>
      {/* demo of how modal functionality, will change when implementing page */}
      <Button onClick={open}>Open modal</Button>
      <ProjectOverlay
        name="Project Name"
        years={["2021-2022", "2023"]}
        projectDescription="Description"
        nonprofitDescription="Description"
        imageSrc="/the-period-purse.jpeg"
        team={[
          { name: "NAME", role: "ROLE" },
          { name: "NAME1", role: "ROLE" },
          { name: "NAME2", role: "ROLE" },
          { name: "NAME3", role: "ROLE" },
          { name: "NAME4", role: "ROLE" },
          { name: "NAME5", role: "ROLE" },
          { name: "NAME6", role: "ROLE" },
        ]}
        webLink=""
        githubLink=""
        isOpened={isOpened}
        closeModal={close}
      />
    </div>
  );
}
