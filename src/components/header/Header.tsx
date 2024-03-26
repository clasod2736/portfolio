import BrowserHeader from "./browser/BrowserHeader";
import ToggleHeader from "./mobile/ToggleHeader";

export default function Header() {
  return (
    <header>
      <BrowserHeader />
      <ToggleHeader />
    </header>
  );
}
