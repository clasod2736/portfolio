import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AboutLink() {
  const [anime, setAnime] = useState(false);

  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" ? setAnime(true) : setAnime(false);
  }, [location.pathname]);

  return (
    <a
      href="/about"
      className={`flex flex-col group rounded-lg border-2 border-transparent px-5 py-2 transition-colors  hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:border-gray-300 hover:bg-gray-100 ${
        anime ? "animate-slideUp animation-delay-75" : ""
      }`}
    >
      <span className="h-[35%]">
        <h1 className="text-xl lg:text-2xl">About</h1>
        <h6 className="text-2xl lg:text-2xl inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          →
        </h6>
      </span>
      <div className="hidden md:flex">
        <p className="text-sm lg:text-base">About web developer Joon Park.</p>
        <p className="text-sm lg:text-base">Backgrounds, Technical skills.</p>
      </div>
    </a>
  );
}
