import { useState, useMemo } from "react";

import styles from "../../styles/Skills.module.css";

// Icons
import { skillsArr } from "../../services/Icons";

export default function Skills() {
  const [skills, setSkills] = useState(false);

  const memoizedSkillsArr = useMemo(() => skillsArr, []);

  return (
    <article className={styles.container}>
      <div
        className={`${styles.title} animate-slideToRight animation-delay-400`}
      >
        <h4 className="text-2xl md:text-2xl xl:text-3xl">Technics</h4>
        <button
          onClick={() => {
            setSkills(false);
          }}
          className={`${skills ? "" : "underline"}`}
        >
          Icons
        </button>
        <button
          onClick={() => {
            setSkills(true);
          }}
          className={`${skills ? "underline" : ""}`}
        >
          Letters
        </button>
      </div>
      <div
        className={`${styles.Icons} ${
          skills ? "hidden" : "grid"
        } animate-[slideUp_0.3s]`}
      >
        {memoizedSkillsArr.map((skill) => (
          <skill.icon
            key={skill.name}
            className={styles.icons}
          />
        ))}
      </div>
      <div
        className={`${styles.letters} ${
          skills ? "grid" : "hidden"
        } animate-[slideUp_0.3s] text-base xl:text-lg`}
      >
        {memoizedSkillsArr.map((skill) => {
          return <span key={skill.name}>{skill.title}</span>;
        })}
      </div>
    </article>
  );
}
