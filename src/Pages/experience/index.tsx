import { useState } from "react";
import Description from "../../components/experience/Description";

export default function Experience() {
  const [ex, setEx] = useState("webDeveloper");
  console.log(ex);
  return (
    <section className="flex justify-center items-center w-full h-[60%]">
      <div className="flex flex-row h-[70%] w-[80%]">
        <div className="flex flex-col justify-start w-[20%] h-[60%] border-r-[1px] border-zinc-300 gap-2 px-2">
          <button
            onClick={() => setEx("webDeveloper")}
            className={`text-lg xl:text-xl h-[20%] dark:hover:bg-zinc-600 hover:bg-zinc-100  hover:border-l-8 transition-all text-right px-4  animate-slideToRight ${
              ex === "webDeveloper"
                ? "dark:bg-zinc-700 bg-zinc-200 border-l-8 border-zinc-400 dark:border-zinc-200"
                : ""
            }`}
          >
            Web Developer
          </button>
          <button
            onClick={() => setEx("chef")}
            className={`text-lg xl:text-xl h-[20%] dark:hover:bg-zinc-600 hover:bg-zinc-100 hover:border-l-8 transition-all text-right px-4 animate-slideToRight animation-delay-150 ${
              ex === "chef"
                ? "dark:bg-zinc-700 bg-zinc-200 border-l-8 border-zinc-400 dark:border-zinc-200"
                : ""
            }`}
          >
            Chef
          </button>
          <button
            onClick={() => setEx("musicInstructor")}
            className={`text-lg xl:text-xl h-[20%] dark:hover:bg-zinc-600  hover:bg-zinc-100 hover:border-l-8 transition-all text-right px-4 animate-slideToRight animation-delay-300 ${
              ex === "musicInstructor"
                ? "dark:bg-zinc-700 bg-zinc-200 border-l-8 border-zinc-400 dark:border-zinc-200"
                : ""
            }`}
          >
            Music Instructor
          </button>
        </div>
        <Description ex={ex} />
      </div>
    </section>
  );
}
