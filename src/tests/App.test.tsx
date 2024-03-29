import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import routerConfig from "../routes/router";

describe("routing test", () => {
  it("testing error route and rendering 404", () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ["/error/route"],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText("404 NotFound😥")).toBeInTheDocument();
  });
});
