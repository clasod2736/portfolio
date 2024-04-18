import { ProjectProvider } from "../../context/ProjectsProvider";

import ProjectsList from "../../components/projects/ProjectsList";
import ProjectsImg from "../../components/projects/ProjectsImg";
import ProjectsBrief from "../../components/projects/ProjectsBrief";

import { preloadingImg } from "../../util/preloadingImg";

export default function Projects() {
  preloadingImg();

  return (
    <section className="flex flex-col md:grid md:justify-items-center md:grid-cols-[32%_65%] lg:grid-cols-[70%_30%] grid-rows-[65%_30%] lg:grid-rows-[45%_55%] justify-start md:justify-between items-center w-[95%] lg:w-[85%] h-[90%] md:h-[70%] lg:h-[60%] gap-6">
      <ProjectProvider>
        <ProjectsImg />
        <ProjectsList />
        <ProjectsBrief />
      </ProjectProvider>
    </section>
  );
}
