import { useState } from "react";

export default function Experience() {
  const [ex, setEx] = useState(0);
  return (
    <section className="flex justify-center items-center w-full h-full">
      <div className="flex flex-row h-[70%] w-[80%]">
        <div className="flex flex-col justify-start w-[20%] h-[60%] border-r-[1px] border-zinc-300 gap-2 px-2">
          <button className="text-2xl h-[20%] dark:hover:bg-zinc-600 transition-all text-right px-4">
            Web Developer
          </button>
          <button className="text-2xl h-[20%] dark:hover:bg-zinc-600 transition-all text-right px-4">
            Chef
          </button>
          <button className="text-2xl h-[20%] dark:hover:bg-zinc-600 transition-all text-right px-4">
            Music Instructor
          </button>
        </div>
        <article className="flex flex-col w-[80%] h-full"></article>
      </div>
    </section>
  );
}
