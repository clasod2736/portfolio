import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import renderer from "react-test-renderer";

import Form from "../components/contact/Form";

describe("Check all the initial UI components rendering well", () => {
  it("renders all UI components correctly with snapshot test", () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("require notice working well?", async () => {
    const user = userEvent.setup();
    render(<Form />);

    const submit = screen.getByRole("submit");
    await user.click(submit);
    const notice = screen.getByTestId("notice");
    expect(notice).toBeInTheDocument();
  });

  it("Checking emailJS working well", async () => {
    const user = userEvent.setup();
    render(<Form />);

    const name = screen.getByTestId("nameInput");
    const email = screen.getByTestId("emailInput");
    const message = screen.getByTestId("messageInput");
    const submit = screen.getByRole("submit");

    expect(submit.textContent).toContain("Submit");

    userEvent.type(name, "John");
    userEvent.type(email, "john@gmail.com");
    userEvent.type(message, "hello world!");

    await user.click(submit);

    screen.findByText("Thankyou!");
  });
});
