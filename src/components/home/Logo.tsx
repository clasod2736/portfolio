import { useEffect, useState } from "react";

import { useScreen } from "../../hooks/useScreen";
import LogoScreen from "./LogoScreen";

export default function Logo() {
  const [width, setWidth] = useState<number>(0);

  const screen = useScreen();

  useEffect(() => {
    setWidth(screen);
  }, [screen]);

  console.log(width);

  return <LogoScreen width={width} />;
}
