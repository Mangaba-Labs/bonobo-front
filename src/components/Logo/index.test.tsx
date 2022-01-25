import { Logo } from ".";
import { render, screen } from "@testing-library/react";

describe("<Logo />", () => {
  it("renders correctly", () => {
    render(<Logo />);

    expect(screen.getByTestId("logo")).toBeTruthy();
  });
});
