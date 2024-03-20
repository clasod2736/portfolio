import { createContext, useState } from "react";
import { type Children } from "../types";
import { type BlurValue } from "../types";

const UserDataContext = createContext<BlurValue>({
  blur: true,
  handleBlur: () => {},
});

export function BlurProvider({ children }: Children) {
  const [blur, setBlur] = useState(true);

  const handleBlur = () => setBlur(!blur);

  const value = { blur, handleBlur };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}
