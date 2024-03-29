import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";

import Links from "../components/contact/Links";
import { contactLinks } from "../constants/contact";

describe("Links component in contact page", () => {
  it("Are the links on the screen?", () => {
    render(<Links />);

    const linkElements = screen.getAllByTestId("link");
    linkElements.forEach((linkElement, index) => {
      expect(linkElement).toHaveAttribute("href", contactLinks[index].link);
    });
  });
});
