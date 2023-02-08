import React from "react";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders header text and buttons", () => {
    render(<Hero />);

    const header = screen.getByText(
      "Your AI to check data from your app and business"
    );
    const subheader = screen.getByText(
      "Let artificial intelligence help you make the best decision within your company, which will bring benefits to your business and especially to your customer"
    );
    const tryFreeButton = screen.getByText("Try free");
    const downloadButton = screen.getByText("Download TalIA");

    expect(header).toBeInTheDocument();
    expect(subheader).toBeInTheDocument();
    expect(tryFreeButton).toBeInTheDocument();
    expect(downloadButton).toBeInTheDocument();
  });
});
