import { createContext, useState } from "react";
import { type Children } from "../types";
import { type ToggleValue } from "../types";

export const ToggleContext = createContext<ToggleValue>({
  blur: false,
  handleBlur: () => {},
  toggle: false,
  handleToggle: () => {},
});

export function ToggleProvider({ children }: Children) {
  const [blur, setBlur] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleBlur = () => setBlur(!blur);
  const handleToggle = () => setToggle(!toggle);

  const value = { blur, handleBlur, toggle, handleToggle };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
}
