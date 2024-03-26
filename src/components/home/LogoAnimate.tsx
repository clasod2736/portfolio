import React from "react";
import { useTrail, a } from "@react-spring/web";
import { TrailProps } from "../../types";

import styles from "../../styles/Logo.module.css";

export const Trail: React.FC<TrailProps> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 30, tension: 2000, friction: 300 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="h-full w-auto">
      {trail.map(({ height, ...style }, index) => (
        <a.div
          key={index}
          className={styles.trailsText}
          style={style}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};
