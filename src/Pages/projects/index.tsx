import ProjectsList from "../../components/projects/ProjectsList";
import ProjectsImg from "../../components/projects/ProjectsImg";

import { ProjectProvider } from "../../context/ProjectsProvider";
import ProjectsBrief from "../../components/projects/ProjectsBrief";

export default function Projects() {
  return (
    <section className="grid grid-cols-[70%_28%] grid-rows-[65%_35%] justify-between items-center w-[85%] h-[60%]">
      <ProjectProvider>
        <ProjectsImg />
        <ProjectsList />
        <ProjectsBrief />
      </ProjectProvider>
    </section>
  );
}
