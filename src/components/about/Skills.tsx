import { useState } from "react";

import styles from "../../styles/Skills.module.css";
import { skillNamesArr } from "../../constants/skills";

// Icons
import { skillsArr } from "../../services/Icons";

export default function Skills() {
  const [skills, setSkills] = useState(false);

  return (
    <article className={styles.container}>
      <div
        className={`${styles.title} animate-slideToRight animation-delay-400`}
      >
        <h4 className={styles.h4}>Technics</h4>
        <button
          onClick={() => {
            setSkills(false);
          }}
          className={`${skills ? "" : "underline"}`}
        >
          → Icons
        </button>
        <button
          onClick={() => {
            setSkills(true);
          }}
          className={`${skills ? "underline" : ""}`}
        >
          → Letters
        </button>
      </div>
      <div
        className={`${styles.Icons} ${
          skills ? "hidden" : "grid"
        } animate-[slideUp_0.3s]`}
      >
        {skillsArr.map((skill) => (
          <skill.icon key={skill.name} />
        ))}
      </div>
      <div
        className={`${styles.letters} ${
          skills ? "grid" : "hidden"
        } animate-[slideUp_0.3s] text-base xl:text-xl`}
      >
        {skillNamesArr.map((skill) => {
          return <span key={skill.id}>{skill.title}</span>;
        })}
      </div>
    </article>
  );
}
