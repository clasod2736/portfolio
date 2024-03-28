import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "@testing-library/user-event";

import Form from "../components/contact/Form";

import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Form component in contact page.", () => {
  it("there are all inputs(3) and button on screen?", () => {
    render(<Form />);
    const input = screen.getAllByRole("input");
    const button = screen.getByRole("submit");
    expect(input.length).toBe(3);
    expect(button).toBeInTheDocument();
  });

  it("require notice working well?", async () => {
    const user = userEvent.setup();
    render(<Form />);

    const submit = screen.getByRole("submit");
    await user.click(submit);
    const notice = screen.getByTestId("notice");
    expect(notice).toBeInTheDocument();
  });
});
