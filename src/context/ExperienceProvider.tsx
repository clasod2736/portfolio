import { createContext, useState } from "react";
import { type Children } from "../types";
import { type ExperienceValue } from "../types";

export const ExperienceContext = createContext<ExperienceValue>({
  experience: "",
  handleExperience: () => {},
});

export function ExperienceProvider({ children }: Children) {
  const [experience, setExperience] = useState("frontEndEngineer");

  const handleExperience = (data: string) => setExperience(data);

  const value = { experience, handleExperience };

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
}
