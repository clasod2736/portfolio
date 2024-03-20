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
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <header>
      <span>
        <a
          href="/"
          className={`text-5xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-50 font-semibold ${
            anime ? "animate-slideUp" : ""
          }`}
        >
          Home
        </a>
      </span>
      <span className="text-3xl gap-8">
        <a
          href=""
          className={`${
            anime ? "animate-slideUp" : ""
          } animation-delay-200 hover:scale-110`}
        >
          <ImGithub />
        </a>
        <a
          href=""
          className={`${
            anime ? "animate-slideUp" : ""
          } animation-delay-200 hover:scale-110`}
        >
          <SiLinkedin />
        </a>
        <a
          href=""
          className={`${
            anime ? "animate-slideUp" : ""
          } animation-delay-200 hover:scale-110`}
        >
          <SiBloglovin />
        </a>
      </span>
    </header>
  );
}
