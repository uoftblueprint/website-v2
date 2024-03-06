"use client";

import ProjectOverlay from "@/project-overlay/ProjectOverlay";

export default function ProjectsPage() {
  return (
    <div>
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
      />
    </div>
  );
}
