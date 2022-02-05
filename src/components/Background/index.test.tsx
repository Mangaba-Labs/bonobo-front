import { Background } from ".";
import { render, screen } from "@testing-library/react";

describe("<Background />", () => {
  it("renders correctly", () => {
    render(<Background />);

    expect(screen.getByTestId("background")).toBeTruthy();
  });
});
