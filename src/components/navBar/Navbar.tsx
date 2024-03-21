import AboutLink from "./links/AboutLink";
import ExperienceLink from "./links/ExperienceLink";
import ProjectsLink from "./links/ProjectsLink";
import ContactLink from "./links/ContactLink";

export default function Navbar() {
  return (
    <nav>
      <AboutLink />
      <ExperienceLink />
      <ProjectsLink />
      <ContactLink />
    </nav>
  );
}
