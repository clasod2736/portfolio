import { useState } from "react";

import styles from "../../styles/Skills.module.css";

// Icons
import { FaHtml5 } from "react-icons/fa6";
import { TiCss3 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiPostcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
import { SiJest } from "react-icons/si";

// need to make constant file and use map methods for making lists.

export default function Skills() {
  const [skills, setSkills] = useState(false);

  console.log(skills);

  return (
    <article className={styles.container}>
      <div
        className={`${styles.title} animate-slideToRight animation-delay-200`}
      >
        <h4 className={styles.h4}>Technics</h4>
        <button
          onClick={() => {
            setSkills(false);
          }}
        >
          → Icons
        </button>
        <button
          onClick={() => {
            setSkills(true);
          }}
        >
          → Letters
        </button>
      </div>
      <div
        className={`${styles.Icons} ${
          skills ? "hidden" : "grid"
        } animate-[slideUp_0.3s]`}
      >
        <FaHtml5 />
        <TiCss3 />
        <IoLogoJavascript />
        <FaReact />
        <SiRedux />
        <FaSass />
        <SiPostcss />
        <FaBootstrap />
        <FaNodeJs />
        <SiMongodb />
        <FaGitAlt />
        <FaGithubSquare />
        <SiVite />
        <SiNextdotjs />
        <SiTailwindcss />
        <SiNetlify />
        <GrHeroku />
        <FaAws />
        <SiJest />
      </div>
      <div
        className={`${styles.letters} ${
          skills ? "grid" : "hidden"
        } animate-[slideUp_0.3s] text-base xl:text-xl`}
      >
        <span>HTML5</span>
        <span>CSS3</span>
        <span>JS(ES6)</span>
        <span>React</span>
        <span>Redux</span>
        <span>SASS</span>
        <span>PostCSS</span>
        <span>Bootstrap</span>
        <span>Node.js</span>
        <span>MongoDB</span>
        <span>Git</span>
        <span>Github</span>
        <span>Vite</span>
        <span>Next.js</span>
        <span>Tailwind</span>
        <span>Netlify</span>
        <span>Heroku</span>
        <span>AWS</span>
        <span>Jest</span>
      </div>
    </article>
  );
}
