import { useState, useContext, useEffect } from "react";

import { ProjectsContext } from "../../context/ProjectsProvider";

import { projectsArr } from "../../constants/projects";

export default function ProjectsImg() {
  const { project } = useContext(ProjectsContext);

  const [imgSrc, setImgSrc] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(false);

    const timeout = setTimeout(() => {
      const projectData = projectsArr.find((item) => item.id === project);
      if (projectData) {
        setImgSrc(projectData.image);
        setFadeIn(true);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [project]);

  return (
    <div className=" col-span-1 row-span-2 w-full h-full flex flex-col justify-center object-cover overflow-hidden animate-[opacityIn_0.8s]">
      <img
        src={imgSrc}
        alt="projectImg"
        className={`h-full w-full object-cover ${
          fadeIn ? "animate-imgIn" : "animate-imgOut"
        }`}
      />
    </div>
  );
}
