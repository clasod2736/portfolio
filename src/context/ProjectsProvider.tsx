import { createContext, useState } from "react";
import { ProjectsValue, type Children } from "../types";

export const ProjectsContext = createContext<ProjectsValue>({
  project: "",
  handleProject: () => {},
});

export function ProjectProvider({ children }: Children) {
  const [project, setProject] = useState("portfolio");

  const handleProject = (data: string) => setProject(data);

  const value = { project, handleProject };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
}
