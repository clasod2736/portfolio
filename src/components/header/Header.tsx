import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Icons
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { SiBloglovin } from "react-icons/si";

export default function Header() {
  const [anime, setAnime] = useState(false);

  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" ? setAnime(true) : setAnime(false);
  }, [location.pathname]);

  return (
    <header>
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
          <ImGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/joon-park-dev"
          className={` dark:hover:text-zinc-200 hover:text-zinc-500
          ${
            anime ? "animate-slideUp" : ""
          } animation-delay-200 hover:scale-110`}
        >
          <SiLinkedin />
        </a>
        <a
          href="https://joondev.blog"
          className={` dark:hover:text-zinc-200 hover:text-zinc-500
          ${
            anime ? "animate-slideUp" : ""
          } animation-delay-200 hover:scale-110`}
        >
          <SiBloglovin />
        </a>
        <a
          href="https://drive.google.com/file/d/1JJNUaLZr-3sZjp5ccZW4HjvX2O3gZwSg/view?usp=sharing"
          className={`text-xl ml-4 border-2 hover:dark:bg-neutral-700/30 dark:border-neutral-700 border-gray-300 hover:bg-gray-100 transition py-2 px-4 rounded-md
        ${anime ? "animate-slideUp" : ""} animation-delay-200`}
        >
          Resume
        </a>
      </span>
    </header>
  );
}
