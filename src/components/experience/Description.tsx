import { Ex } from "../../types";

// Constants
import { exArray } from "../../constants/experiences";

export default function Description({ ex }: Ex) {
  const experience = exArray.filter((item) => item.id === ex);
  console.log(experience[0].description[0]);

  return (
    <article className="flex flex-col w-[80%] h-full px-6 animate-opacity gap-2 ">
      <h2 className="text-5xl">{experience[0].title}</h2>
      <span className="flex flex-row gap-4 italic">
        <h4 className="text-lg font-thin">{experience[0].period}</h4>/
        <h3 className="text-lg font-thin">{experience[0].place}</h3>
      </span>
      {experience[0].description.map((obj) => (
        <ul className="text-xl font-extralight">
          {Object.values(obj).map((value, subIndex) => (
            <li key={subIndex}>{value}</li>
          ))}
        </ul>
      ))}
    </article>
  );
}
