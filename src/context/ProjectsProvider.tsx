import { createContext, useState } from "react";
import { ProjectsValue, type Children } from "../types";

export const ProjectsContext = createContext<ProjectsValue>({
  project: "",
  handleProject: () => {},
  hover: false,
  handleHover: () => {},
});

export function ProjectProvider({ children }: Children) {
  const [project, setProject] = useState("portfolio");
  const [hover, setHover] = useState(false);

  const handleProject = (data: string) => setProject(data);
  const handleHover = (data: boolean) => setHover(data);

  const value = { project, handleProject, hover, handleHover };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
}
