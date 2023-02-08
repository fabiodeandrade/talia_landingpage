import React from "react";
import { render } from "@testing-library/react";
import { MyFooter } from "./MyFooter";

test("renders MyFooter component correctly", () => {
  const { getByText } = render(<MyFooter />);
  const linkElement = getByText(/Call us/i);
  expect(linkElement).toBeInTheDocument();
});
