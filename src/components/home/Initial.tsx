import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";
import { TrailProps } from "../../types";

import styles from "../../styles/Logo.module.css";

const Trail: React.FC<TrailProps> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 30, tension: 2000, friction: 300 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="h-[25vh] w-auto">
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

//It's okay until lg:1024px less than that, need to build component again.

export default function Initial() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={styles.container}
      onClick={() => setOpen(true)}
    >
      <Trail open={open}>
        <h1 className={styles.h1}>
          G'day! I'm <i className=" text-zinc-500">Joon Park.</i>
        </h1>
        <h2 className={styles.h2}>Front-End Developer</h2>
        <h3 className={styles.h3}>Melbourne, Australia</h3>
      </Trail>
    </div>
  );
}
