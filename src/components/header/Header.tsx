import BrowserHeader from "./browser/BrowserHeader";
import ToggleHeader from "./mobile/ToggleHeader";

import { ToggleProvider } from "../../context/ToggleProvider";

export default function Header() {
  return (
    <header>
      <BrowserHeader />
      <ToggleProvider>
        <ToggleHeader />
      </ToggleProvider>
    </header>
  );
}
