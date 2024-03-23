import { useContext } from "react";
import { ExperienceContext } from "../../context/ExperienceProvider";

// Constants
import { exArray } from "../../constants/experiences";

export default function Description() {
  const { experience } = useContext(ExperienceContext);

  const experienceObj = exArray.filter((item) => item.id === experience);

  return (
    <article className="flex flex-col w-[80%] h-full px-6 animate-opacityIn gap-2 ">
      <h2 className="text-5xl">{experienceObj[0].title}</h2>
      <span className="flex flex-row gap-4 italic">
        <h4 className="text-lg font-thin">{experienceObj[0].period}</h4>/
        <h3 className="text-lg font-thin">{experienceObj[0].place}</h3>
      </span>
      {experienceObj[0].description.map((obj, id) => (
        <ul
          className="text-xl font-extralight"
          key={id}
        >
          {Object.values(obj).map((value, subId) => (
            <li key={subId}>{value}</li>
          ))}
        </ul>
      ))}
    </article>
  );
}
