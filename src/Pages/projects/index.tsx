import { ProjectProvider } from "../../context/ProjectsProvider";

import ProjectsList from "../../components/projects/ProjectsList";
import ProjectsImg from "../../components/projects/ProjectsImg";
import ProjectsBrief from "../../components/projects/ProjectsBrief";

export default function Projects() {
  return (
    <section className="grid grid-cols-[67%_31%] grid-rows-[50%_50%] justify-between items-center w-[85%] h-[60%]">
      <ProjectProvider>
        <ProjectsImg />
        <ProjectsList />
        <ProjectsBrief />
      </ProjectProvider>
    </section>
  );
}
