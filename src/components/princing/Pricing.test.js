import React from "react";
import { render, screen } from "@testing-library/react";
import { Pricing } from "./Pricing";

describe("Pricing component", () => {
  test("renders pricing section", () => {
    render(<Pricing />);

    expect(screen.getByText("Our Pricing")).toBeInTheDocument();
    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("Premium")).toBeInTheDocument();
    expect(screen.getByText("Ultimate")).toBeInTheDocument();
  });
});
