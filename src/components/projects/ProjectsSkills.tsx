import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsProvider";
import { getSkills } from "../../services/project";

export default function ProjectsSkills() {
  const { project } = useContext(ProjectsContext);

  const skills = getSkills({ project });

  return (
    <div className="grid grid-cols-4 grid-rows-4 w-full h-full  text-4xl items-center content-center justify-items-center animate-opacityIn">
      {skills.map((item) => {
        return <item.icon key={item.name} />;
      })}
    </div>
  );
}
