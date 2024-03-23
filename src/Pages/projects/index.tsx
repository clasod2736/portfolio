import ProjectsList from "../../components/projects/ProjectsList";
import ProjectsImg from "../../components/projects/ProjectsImg";

import { ProjectProvider } from "../../context/ProjectsProvider";
import ProjectsSkills from "../../components/projects/ProjectsSkills";

export default function Projects() {
  return (
    <section className="grid grid-cols-[70%_28%] grid-rows-[65%_35%] justify-between items-center w-[85%] h-[60%]">
      <ProjectProvider>
        <ProjectsImg />
        <ProjectsList />
        <ProjectsSkills />
      </ProjectProvider>
    </section>
  );
}
