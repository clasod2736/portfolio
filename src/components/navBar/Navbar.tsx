import About from "./links/About";
import Experience from "./links/Experience";
import Projects from "./links/Projects";
import Contact from "./links/Contact";

export default function Navbar() {
  return (
    <nav>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </nav>
  );
}
