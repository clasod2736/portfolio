import { ReactNode } from "react";

// Logo Animation
export interface TrailProps {
  open: boolean;
  children: ReactNode;
}

// Projects information
export type Project = {
  item: {
    id: string;
    title: string;
    image: string;
    skills: string[];
    description: string;
  };
};

// Project Skills
export type ProjectSkills = {
  project: string;
};

// Location substring
export type LocationString = {
  location: {
    pathname: string;
    search: string;
    hash: string;
    state: null;
    key: string;
  };
};

// Email props types
export type Email = {
  e: React.FormEvent<HTMLFormElement>;
  name: string;
  email: string;
  message: string;
  setWarn: (state: string) => void;
};

/* Types for context providers.*/
// Chidren for context provider
export type Children = {
  children: ReactNode;
};

// Type for Blur context provider
export type BlurValue = {
  blur: boolean;
  handleBlur: () => void;
};

export type ExperienceValue = {
  experience: string;
  handleExperience: (data: string) => string | void;
};

export type ProjectsValue = {
  project: string;
  handleProject: (data: string) => string | void;
  hover: boolean;
  handleHover: (data: boolean) => boolean | void;
};
