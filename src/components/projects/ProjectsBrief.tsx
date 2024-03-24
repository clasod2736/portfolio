import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsProvider";

import { getBriefs } from "../../services/project";

export default function ProjectsBrief() {
  const { project, hover } = useContext(ProjectsContext);

  const briefs = getBriefs({ project });

  if (!hover) {
    return null;
  }

  return (
    <section className="flex flex-col justify-center h-full w-full animate-opacityIn gap-2">
      <h5 className="text-sm font-semibold">{briefs[0].tags}</h5>
      <div className=" border-l-[1px] border-zinc-600 pl-2">
        <p className=" text-xs">{briefs[0].concept}</p>
      </div>
      <div className="grid grid-cols-6 grid-rows-2 w-full h-[40%]  text-4xl items-center content-center justify-items-center">
        {briefs.map((item) => {
          return (
            <p className="text-2xl">
              <item.icon key={item.name} />
            </p>
          );
        })}
      </div>
    </section>
  );
}
