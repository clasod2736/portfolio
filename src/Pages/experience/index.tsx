import Description from "../../components/experience/Description";
import ExLists from "../../components/experience/ExLists";

import { ExperienceProvider } from "../../context/ExperienceProvider";

export default function Experience() {
  return (
    <section className="flex justify-center items-center w-full h-[90%] md:h-[80%] lg:h-[60%]">
      <div className="flex md:flex-col lg:flex-row justify-start h-full lg:h-[80%] lg:w-[90%] xl:w-[80%] gap-10 lg:gap-0">
        <ExperienceProvider>
          <ExLists />
          <Description />
        </ExperienceProvider>
      </div>
    </section>
  );
}
