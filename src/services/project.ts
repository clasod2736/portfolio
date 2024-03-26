import { projectsArr } from "../constants/projects";
import { skillsArr } from "./Icons";
import { ProjectSkills } from "../types";
import { LocationString } from "../types";

export function getProjectsList() {
  const names = projectsArr
    .map((item) => {
      return {
        id: item.id,
        title: item.title,
        link: item.link,
        github: item.github,
      };
    })
    .reverse();
  return names;
}

export function getProjectsImages() {
  const names = projectsArr.map((item) => {
    return {
      id: item.id,
      image: item.image,
    };
  });
  return names;
}

export function getBriefs({ project }: ProjectSkills) {
  const projects = projectsArr.find((item) => item.id === project);
  const skillsIcons = skillsArr;

  const skills = skillsIcons.filter((item) =>
    projects?.skills.includes(item.name)
  );

  const result = skills.map((item) => ({
    ...item,
    id: projects?.id,
    tags: projects?.tag,
    concept: projects?.concept,
    description: projects?.description,
    link: projects?.link,
    github: projects?.github,
  }));
  return result;
}

export function getLocationString({ location }: LocationString) {
  const pathname = location.pathname;
  const substring = pathname.substring("/projects/".length);

  return substring;
}
