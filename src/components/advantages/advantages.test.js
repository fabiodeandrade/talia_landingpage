import React from "react";
import { render, screen } from "@testing-library/react";
import { Advantages } from "./Advantages";

describe("Advantages", () => {
  it("renders the video background", () => {
    render(<Advantages />);

    const videoBg = screen.getByTestId("video-background");
    expect(videoBg).toBeInTheDocument();
  });

  it("renders the advantages information", () => {
    render(<Advantages />);

    const advantagesInfo = screen.getByTestId("advantages-info");
    expect(advantagesInfo).toBeInTheDocument();
  });

  it("renders the main cards", () => {
    render(<Advantages />);

    const cardsArea = screen.getByTestId("cards-area");
    expect(cardsArea).toBeInTheDocument();
  });
});
