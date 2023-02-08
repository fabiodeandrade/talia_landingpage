import React from "react";
import { render, screen } from "@testing-library/react";
import { MyHeader } from "./MyHeader";

describe("MyHeader component", () => {
  it("should render the header with the correct text and elements", () => {
    render(<MyHeader />);

    const header = screen.getByRole("banner");
    const title = screen.getByText("TalIA");
    const advantages = screen.getByText("Advantages");
    const mobility = screen.getByText("Mobility");
    const pricing = screen.getByText("Pricing");
    const tryFreeButton = screen.getByRole("button", { name: "Try Free" });

    expect(header).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(advantages).toBeInTheDocument();
    expect(mobility).toBeInTheDocument();
    expect(pricing).toBeInTheDocument();
    expect(tryFreeButton).toBeInTheDocument();
  });
});
