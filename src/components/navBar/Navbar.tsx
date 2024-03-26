import AboutLink from "./links/AboutLink";
import ExperienceLink from "./links/ExperienceLink";
import ProjectsLink from "./links/ProjectsLink";
import ContactLink from "./links/ContactLink";

export default function Navbar() {
  return (
    <nav className="gap-0 lg:gap-[1rem] min-[320px]:hidden md:grid">
      <AboutLink />
      <ExperienceLink />
      <ProjectsLink />
      <ContactLink />
    </nav>
  );
}
