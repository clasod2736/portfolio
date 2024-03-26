import { useContext } from "react";
import { Toggle } from "../../../types";
import { BlurContext } from "../../../context/BlurProvider";

import { linkArr, iconsinToggle } from "../../../constants/toggleMenu";

export default function ToggleMenu({ toggle, getToggle }: Toggle) {
  const { blur, handleBlur } = useContext(BlurContext);

  return (
    <>
      <div
        className={`${
          blur
            ? "absolute w-[100%] h-[1300px] backdrop-blur-md translate-y-[40%] animate-opacityIn"
            : "hidden"
        }`}
      >
        <div
          className={`fixed z-10 translate-x-[23%] translate-y-[0%] gap-2 text-zinc-100 ${
            toggle ? "flex" : "hidden"
          } flex-col justify-center items-center w-[70%] h-[600px] rounded-xl bg-gradient-to-bl border-[1px] border-zinc-500 dark:from-zinc-600 from-zinc-700 animate-opacityIn`}
        >
          {linkArr.map((item) => {
            return (
              <ul
                onClick={() => {
                  getToggle(!toggle);
                  handleBlur();
                }}
                className="list-none pl-0 text-3xl underline font-bold"
                key={item.id}
              >
                <li>
                  <a href={`/${item.id}`}>{item.title}</a>
                </li>
              </ul>
            );
          })}
          <span className="gap-8 my-4">
            {iconsinToggle.map((item) => {
              return (
                <a
                  key={item.id}
                  href={item.link}
                  className="text-zinc-600 dark:text-zinc-300"
                >
                  <item.content style={{ fontSize: "1.8rem" }} />
                </a>
              );
            })}
          </span>
          <a
            className="text-zinc-700 dark:text-zinc-300 text-2xl ml-4 border-2  dark:border-neutral-700 border-gray-500 py-2 px-4 rounded-md shadow-mobileResume"
            href="https://drive.google.com/file/d/1JJNUaLZr-3sZjp5ccZW4HjvX2O3gZwSg/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
