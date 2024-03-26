import { useEffect, useState } from "react";

export const useScreen = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const resizeListener = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return innerWidth;
};
