import { render, screen } from "@testing-library/react";
import { Input } from ".";

describe("<Input />", () => {
  it("renders correctly", () => {
    render(<Input />);

    expect(screen.getByTestId("input")).toBeTruthy();
  });
});
