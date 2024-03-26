import { useContext } from "react";
import { ExperienceContext } from "../../context/ExperienceProvider";

export default function ExLists() {
  const { experience, handleExperience } = useContext(ExperienceContext);

  return (
    <div className="flex flex-row lg:flex-col justify-start w-full lg:w-[20%] h-[10%] md:h-[10%] lg:h-[60%] border-r-[1px] border-zinc-300 gap-6  lg:gap-2 px-2">
      <button
        onClick={() => handleExperience("webDeveloper")}
        className={` text-lg xl:text-xl h-full lg:h-[20%] dark:hover:bg-zinc-600 hover:bg-zinc-100  hover:border-l-8 transition-all text-center md:text-right px-4  animate-slideToRight ${
          experience === "webDeveloper"
            ? "dark:bg-zinc-700 bg-zinc-200 border-l-8 border-zinc-400 dark:border-zinc-200"
            : ""
        }`}
      >
        Web Developer
      </button>
      <button
        onClick={() => handleExperience("chef")}
        className={`text-lg xl:text-xl h-full lg:h-[20%] dark:hover:bg-zinc-600 hover:bg-zinc-100 hover:border-l-8 transition-all text-center md:text-right px-4 animate-slideToRight animation-delay-150 ${
          experience === "chef"
            ? "dark:bg-zinc-700 bg-zinc-200 border-l-8 border-zinc-400 dark:border-zinc-200"
            : ""
        }`}
      >
        Chef
      </button>
      <button
        onClick={() => handleExperience("musicInstructor")}
        className={`text-lg xl:text-xl h-full lg:h-[20%] dark:hover:bg-zinc-600  hover:bg-zinc-100 hover:border-l-8 transition-all text-center md:text-right px-4 animate-slideToRight animation-delay-300 ${
          experience === "musicInstructor"
            ? "dark:bg-zinc-700 bg-zinc-200 border-l-8 border-zinc-400 dark:border-zinc-200"
            : ""
        }`}
      >
        Music Instructor
      </button>
    </div>
  );
}
