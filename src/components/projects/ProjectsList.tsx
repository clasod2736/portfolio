import { useContext } from "react";
import { getProjectsNames } from "../../services/project";
import { ProjectsContext } from "../../context/ProjectsProvider";

export default function ProjectsList() {
  const { handleProject } = useContext(ProjectsContext);

  const names = getProjectsNames();

  return (
    <div className="flex flex-col justify-start w-full h-full">
      <span className="flex flex-row justify-between items-end border-b-[1px] py-2">
        <h3 className="text-4xl font-thin italic">Projects</h3>
        <p className="text-xl">{names.length}</p>
      </span>
      <ul className="list-none p-0 gap-2">
        {names.map((item) => {
          return (
            <li
              key={item.id}
              onMouseEnter={() => {
                handleProject(item.id);
              }}
              className="text-2xl font-thin border-b-[1px] transition-all"
            >
              <a
                href={`/projects/${item.id}`}
                className="flex flex-row gap-2 group transition-transform "
              >
                <p className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </p>
                {item.title}
              </a>
            </li>
          );
        })}
        <li className="flex flex-row justify-end text-lg font-thin transition-all gap-2 ">
          Coming More Soon.
        </li>
      </ul>
    </div>
  );
}
