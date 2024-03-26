import { useState, useContext } from "react";
import { BlurContext } from "../../../context/BlurProvider";
import ToggleMenu from "./ToggleMenu";

export default function ToggleHeader() {
  const { handleBlur } = useContext(BlurContext);

  const [toggle, setToggle] = useState(false);

  const getToggle = (data: boolean) => {
    setToggle(data);
  };

  return (
    <section
      className={`md:hidden flex flex-row justify-between items-center w-full h-full animate-opacityIn`}
    >
      <a
        href="/"
        className="text-3xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-500 dark:hover:text-zinc-50 font-semibold pl-6"
      >
        Home
      </a>
      <button
        onClick={() => {
          setToggle(!toggle);
          handleBlur();
        }}
        className="pr-6 text-3xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-500 dark:hover:text-zinc-50 font-semibold pl-6"
      >
        Menu
      </button>
      <ToggleMenu
        toggle={toggle}
        getToggle={getToggle}
      />
    </section>
  );
}
