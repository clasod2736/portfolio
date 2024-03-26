import { useContext } from "react";
import { getProjectsList } from "../../services/project";
import { ProjectsContext } from "../../context/ProjectsProvider";

import { Github } from "../../services/Icons";

export default function ProjectsList() {
  const { handleProject } = useContext(ProjectsContext);

  const names = getProjectsList();

  return (
    <div className="md:row-start-2 md:row-end-2 md:col-start-1 md:col-end-1 lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-2 flex-col justify-start w-full h-[20%] md:h-full animate-streamUp">
      <span className="flex flex-row justify-between items-end border-b-[1px] py-2 animate-streamUp animation-delay-100">
        <h3 className="text-3xl lg:text-4xl font-thin italic">Projects</h3>
        <p className="text-xl">{names.length}</p>
      </span>
      <ul className="list-none p-0 gap-2">
        {names.map((item, index) => {
          return (
            <li
              key={item.id}
              onMouseEnter={() => {
                handleProject(item.id);
              }}
              className={`flex flex-row justify-between text-2xl font-thin border-b-[1px] transition-all ${
                index === 0
                  ? "animate-streamUp animation-delay-200"
                  : `animate-streamUp animation-delay-${(index + 2) * 100}`
              }`}
            >
              <span className="hidden lg:flex">
                <a
                  href={item.link}
                  className="md:text-xl lg:text-2xl flex flex-row gap-2 group transition-transform "
                >
                  <p className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    →
                  </p>
                  {item.title}
                  <p className=" text-sm group-hover:opacity-100 opacity-0 transition-opacity">
                    Click!
                  </p>
                </a>
              </span>
              <span className="flex lg:hidden">
                <button className="md:text-xl lg:text-2xl flex flex-row gap-2 group transition-transform ">
                  <p className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    →
                  </p>
                  {item.title}
                  <p className=" text-sm group-hover:opacity-100 opacity-0 transition-opacity">
                    Click!
                  </p>
                </button>
              </span>
              <div>
                <a
                  href={item.github}
                  className=" z-[-1] text-2xl lg:text-xl opacity-30 hover:opacity-100"
                >
                  <Github />
                </a>
              </div>
            </li>
          );
        })}
        <li className="hidden md:flex flex-row justify-end text-base font-normal transition-all gap-2 animate-streamUp animation-delay-500">
          Coming More Soon.
        </li>
      </ul>
    </div>
  );
}
