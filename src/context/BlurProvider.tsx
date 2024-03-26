import { createContext, useState } from "react";
import { type Children } from "../types";
import { type BlurValue } from "../types";

export const BlurContext = createContext<BlurValue>({
  blur: false,
  handleBlur: () => {},
});

export function BlurProvider({ children }: Children) {
  const [blur, setBlur] = useState(false);

  const handleBlur = () => setBlur(!blur);

  const value = { blur, handleBlur };

  return <BlurContext.Provider value={value}>{children}</BlurContext.Provider>;
}
