import { useState, useContext, useEffect } from "react";

import { ProjectsContext } from "../../context/ProjectsProvider";

import { projectsArr } from "../../constants/projects";

export default function ProjectsImg() {
  const { project } = useContext(ProjectsContext);

  const targetProject = projectsArr.find((item) => item.id === project);

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
    <div className=" md:row-start-1 md:col-start-1 md:col-end-3 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-1 w-full md:w-[85%] lg:w-full h-[50%] md:h-full object-cover overflow-hidden animate-[opacityIn_0.8s]">
      <img
        src={imgSrc}
        alt="projectImg"
        className={`hidden lg:flex h-full w-[90%] object-cover ${
          fadeIn ? "animate-imgIn" : "animate-imgOut"
        }`}
      />
      <a
        href={targetProject?.link}
        className="flex lg:hidden h-full w-full"
      >
        <img
          src={imgSrc}
          alt="projectImg"
          className={`flex lg:hidden h-full min-[320px]:object-contain w-full md:object-cover ${
            fadeIn ? "animate-imgIn" : "animate-imgOut"
          }`}
        />
      </a>
    </div>
  );
}
