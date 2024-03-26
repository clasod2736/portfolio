import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsProvider";

import { getBriefs } from "../../services/project";

export default function ProjectsBrief() {
  const { project } = useContext(ProjectsContext);

  const briefs = getBriefs({ project });

  return (
    <section className="md:row-start-2 md:row-end-2 md:col-end-3 lg:row-start-2 lg:row-end-4 flex flex-col md:justify-between lg:justify-center h-[30%] md:h-full w-full gap-4 md:gap-0 lg:gap-2 animate-opacityIn py-2">
      <h5 className="text-base font-semibold">{briefs[0].tags}</h5>
      <div className=" border-l-[1px] border-zinc-600 pl-2">
        <p className="text-sm italic">{briefs[0].concept}</p>
      </div>
      <div className="md:text-sm lg:text-base">{briefs[0].description}</div>
      <div className="grid grid-cols-8 grid-rows-1 lg:grid-cols-6 lg:grid-rows-2 w-full md:h-[20%] lg:h-[30%]  text-4xl items-center content-center justify-items-center">
        {briefs.map((item) => {
          return (
            <p
              className="text-3xl lg:text-3xl"
              key={item.name}
            >
              <item.icon />
            </p>
          );
        })}
      </div>
      <p className="text-base italic font-semibold lg:hidden">
        "Click Image to go to Live Demo!"
      </p>
    </section>
  );
}
