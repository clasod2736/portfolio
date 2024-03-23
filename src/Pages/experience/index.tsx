import Description from "../../components/experience/Description";
import ExLists from "../../components/experience/ExLists";

import { ExperienceProvider } from "../../context/ExperienceProvider";

export default function Experience() {
  return (
    <section className="flex justify-center items-center w-full h-[60%]">
      <div className="flex flex-row h-[80%] w-[80%]">
        <ExperienceProvider>
          <ExLists />
          <Description />
        </ExperienceProvider>
      </div>
    </section>
  );
}
