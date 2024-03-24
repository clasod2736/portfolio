import { projectsArr } from "../constants/projects";
import { skillsArr } from "./Icons";
import { ProjectSkills } from "../types";

export function getProjectsNames() {
  const names = projectsArr
    .map((item) => {
      return {
        id: item.id,
        title: item.title,
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
    tags: projects?.tag,
    concept: projects?.concept,
  }));
  return result;
}
