import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const [anime, setAnime] = useState(false);

  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" ? setAnime(true) : setAnime(false);
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <a
      href="/contact"
      className={`flex flex-col group rounded-lg border-2 border-transparent px-5 py-4 transition-colors  hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:border-gray-300 hover:bg-gray-100 animation-delay-600 ${
        anime ? "animate-slideUp" : ""
      }`}
    >
      <span>
        <h1>Contact</h1>
        <h6 className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          →
        </h6>
      </span>
      <p>asjdfjnaskfkasjfn ass</p>
      <p>askdnfasjns sdadsdds</p>
    </a>
  );
}
