import { createContext, useState } from "react";
import { type Children } from "../types";
import { type BlurValue } from "../types";

const BlurContext = createContext<BlurValue>({
  blur: true,
  handleBlur: () => {},
});

export function BlurProvider({ children }: Children) {
  const [blur, setBlur] = useState(true);

  const handleBlur = () => setBlur(!blur);

  const value = { blur, handleBlur };

  return <BlurContext.Provider value={value}>{children}</BlurContext.Provider>;
}
