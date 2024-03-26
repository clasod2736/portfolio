import { useState } from "react";
import { Trail } from "./LogoAnimate";

import styles from "../../styles/Logo.module.css";
import { Logo } from "../../types";

export default function LogoScreen({ width }: Logo) {
  const [open, setOpen] = useState(true);

  const renderByScreen = () => {
    if (width < 500) {
      return (
        <div
          className={styles.container}
          onClick={() => setOpen(true)}
        >
          <Trail open={open}>
            <h1 className="text-[4rem]">G'day! I'm</h1>
            <h1 className="text-[4rem] text-zinc-500 italic">Joon Park</h1>
            <h2 className="text-[3.5rem]">Frone-End</h2>
            <h2 className="text-[3.5rem]">Developer</h2>
            <h3 className="text-[3.5rem]">Melbourne</h3>
            <h3 className="text-[3.5rem]">Australia</h3>
          </Trail>
        </div>
      );
    } else if (width < 768) {
      return (
        <div
          className={styles.container}
          onClick={() => setOpen(true)}
        >
          <Trail open={open}>
            <h1 className="text-[4.5rem]">G'day! I'm</h1>
            <h1 className="text-[5rem] text-zinc-500 italic">Joon Park</h1>
            <h2 className="text-[4.5rem]">Frone-End</h2>
            <h2 className="text-[4.5rem]">Developer</h2>
            <h3 className="text-[4.5rem]">Melbourne</h3>
            <h3 className="text-[4.5rem]">Australia</h3>
          </Trail>
        </div>
      );
    } else if (width < 1024) {
      return (
        <div
          className={styles.container}
          onClick={() => setOpen(true)}
        >
          <Trail open={open}>
            <h1 className="text-[5rem]">
              G'day! I'm<i className=" text-zinc-500">{""} Joon Park</i>
            </h1>
            <h2 className="text-[4.5rem]">Front-End Developer</h2>
            <h3 className="text-[4.5rem]">Melbourne, Australia</h3>
          </Trail>
        </div>
      );
    } else if (width > 1024) {
      return (
        <div
          className={styles.container}
          onClick={() => setOpen(true)}
        >
          <Trail open={open}>
            <h1 className="text-[6rem]">
              G'day! I'm <i className=" text-zinc-500">{""}Joon Park</i>
            </h1>
            <h2 className="text-[5.5rem]">Front-End Developer</h2>
            <h3 className="text-[5rem]">Melbourne, Australia</h3>
          </Trail>
        </div>
      );
    }
  };
  return <>{renderByScreen()}</>;
}
