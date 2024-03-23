import { Project } from "../../types";

export default function ProjectsItems({ item }: Project) {
  return (
    <article className="flex flex-col justify-around w-[30%] h-full">
      <div>
        <img
          src={item.image}
          alt={item.id}
          className="w-full h-full blur-sm hover:blur-none cursor-pointer"
        />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <ul className="flex flex-row list-none">
        {item.skills.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </article>
  );
}
