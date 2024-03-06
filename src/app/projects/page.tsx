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
          { name: "NAME", role: "ROLE", imageSrc: "" },
          { name: "NAME1", role: "ROLE", imageSrc: "" },
          { name: "NAME2", role: "ROLE", imageSrc: "" },
          { name: "NAME3", role: "ROLE", imageSrc: "" },
          { name: "NAME4", role: "ROLE", imageSrc: "" },
          { name: "NAME5", role: "ROLE", imageSrc: "" },
          { name: "NAME6", role: "ROLE", imageSrc: "" },
        ]}
        webLink=""
        githubLink=""
        isOpened={isOpened}
        closeModal={close}
      />
    </div>
  );
}
