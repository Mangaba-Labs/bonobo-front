import { Layout } from ".";
import { render, screen } from "@testing-library/react";

describe("<Layout />", () => {
  it("renders correctly", () => {
    render(<Layout />);

    expect(screen.getByTestId("layout")).toBeTruthy();
  });
});
