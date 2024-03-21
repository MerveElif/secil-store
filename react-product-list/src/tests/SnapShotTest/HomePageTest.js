import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";

test("renders HomePage correctly", () => {
  const { container } = render(<HomePage />);
  expect(container).toMatchSnapshot();
});
