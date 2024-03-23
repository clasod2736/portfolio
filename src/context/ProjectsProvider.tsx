import { createContext, useState } from "react";
import { ProjectsValue, type Children } from "../types";

export const ProjectsContext = createContext<ProjectsValue>({
  project: "",
  handleProject: () => {},
  blur: false,
  handleBlur: () => {},
});

export function ProjectProvider({ children }: Children) {
  const [project, setProject] = useState("portfolio");
  const [blur, setBlur] = useState(false);

  const handleProject = (data: string) => setProject(data);
  const handleBlur = (data: boolean) => setBlur(data);

  const value = { project, handleProject, blur, handleBlur };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
}
