import { render, cleanup, screen } from "@testing-library/react";
import { Mobility } from "./Mobility";

afterEach(cleanup);

describe("Mobility component", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Mobility />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("contains a heading with the correct text", () => {
    render(<Mobility />);
    expect(
      screen.getByText(
        "Monitor TALIA from anywhere anytime with any device. It works when you need it."
      )
    ).toBeTruthy();
  });

  it("contains an image with the correct alt text", () => {
   render(<Mobility />);
    expect(screen.getByText("Mockuop")).toBeTruthy();
  });

  it("contains a paragraph with the correct text", () => {
    render(<Mobility />);
    expect(
      screen.getByText(
        "Practiced at any moment of your day, with TalIA you can take action in the most critical moments of your company"
      )
    ).toBeTruthy();
  });
});
