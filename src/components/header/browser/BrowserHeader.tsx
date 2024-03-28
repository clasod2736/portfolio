import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { Github, LinkedIn, Blog } from "../../../services/Icons";

export default function BrowserHeader() {
  const [anime, setAnime] = useState(false);

  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" ? setAnime(true) : setAnime(false);
  }, [location.pathname]);

  return (
    <span className="min-[320px]:hidden md:flex flex-row justify-between w-full h-full">
      <span>
        <a
          href="/"
          className={`text-4xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-500 dark:hover:text-zinc-50 font-semibold ${
            anime ? "animate-slideUp" : ""
          }`}
        >
          Home
        </a>
      </span>
      <span className="text-2xl gap-6">
        <a
          href="https://github.com/clasod2736"
          className={` dark:hover:text-zinc-200 hover:text-zinc-500
          ${
            anime ? "animate-slideUp" : ""
          } animation-delay-200 hover:scale-110`}
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/joon-park-dev"
          className={` dark:hover:text-zinc-200 hover:text-zinc-500
          ${
            anime ? "animate-slideUp" : ""
          } animation-delay-200 hover:scale-110`}
        >
          <LinkedIn />
        </a>
        <a
          href="https://joondev.blog"
          className={` dark:hover:text-zinc-200 hover:text-zinc-500
          ${
            anime ? "animate-slideUp" : ""
          } animation-delay-200 hover:scale-110`}
        >
          <Blog />
        </a>
        <a
          href="https://drive.google.com/file/d/1MegD9dp0HG1RZWNgpBmnngFlk_dqoMwh/view?usp=sharing"
          className={`text-xl ml-4 border-2 hover:dark:bg-neutral-700/30 dark:border-neutral-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition py-2 px-4 rounded-md
        ${anime ? "animate-slideUp" : ""} animation-delay-200`}
        >
          Resume
        </a>
      </span>
    </span>
  );
}
